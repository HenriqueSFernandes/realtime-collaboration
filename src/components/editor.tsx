"use client"; // this registers <Editor> as a Client Component
import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/shadcn";
import "@blocknote/shadcn/style.css";
import * as Y from "yjs";
import { WebsocketProvider } from "y-websocket";

interface EditorProps {
  roomId: string;
  websocketUrl: string;
  userName: string;
}

export default function Editor({
  roomId,
  websocketUrl,
  userName,
}: EditorProps) {
  const doc = new Y.Doc();
  const provider = new WebsocketProvider(websocketUrl, roomId, doc);

  const editor = useCreateBlockNote({
    collaboration: {
      provider,
      fragment: doc.getXmlFragment("document-store"),
      user: {
        name: userName,
        color: "#ff0000",
      },
      showCursorLabels: "activity",
    },
  });

  return <BlockNoteView editor={editor} />;
}
