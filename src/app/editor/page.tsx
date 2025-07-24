"use client";
import { Editor } from "@/components/dynamic_editor";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const roomId = searchParams.get("roomId");
  const userName = searchParams.get("username");

  if (!roomId || !userName) {
    return (
      <main className="p-8">
        <h1 className="text-2xl font-bold mb-4">Error</h1>
        <p className="text-red-500">
          Missing roomId or username in query parameters.
        </p>
      </main>
    );
  }

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Editor</h1>
      <Editor
        roomId={roomId}
        websocketUrl="ws://144.91.115.254:1234"
        userName={userName}
      />
    </main>
  );
}
