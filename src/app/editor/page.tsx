import { Suspense } from "react";
import EditorPageClient from "./EditorPageCient";

export default function EditorPage() {
  return (
    <Suspense fallback={<div className="p-8">Loading editor...</div>}>
      <EditorPageClient />
    </Suspense>
  );
}
