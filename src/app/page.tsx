import EditorClientWrapper from "@/components/editor-client-wrapper";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Editor</h1>
      <EditorClientWrapper />
    </main>
  );
}
