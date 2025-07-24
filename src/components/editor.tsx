"use client"; // this registers <Editor> as a Client Component
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/shadcn";
import "@blocknote/shadcn/style.css";
import { WebsocketProvider } from "y-websocket";
import * as Y from "yjs";

// Our <Editor> component we can reuse later
export default function Editor() {
  // Creates a new editor instance.
  const doc = new Y.Doc();
  const provider = new WebsocketProvider("ws://localhost:1234", "temp", doc);

  const editor = useCreateBlockNote({
    collaboration: {
      provider,
      fragment: doc.getXmlFragment("document-store"),
      user: {
        name: "Ricky",
        color: "#ff0000",
      },
      showCursorLabels: "activity",
    },
  });

  // Renders the editor instance using a React component.
  return <BlockNoteView editor={editor} />;
}
