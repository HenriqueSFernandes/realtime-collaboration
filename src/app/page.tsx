"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [roomId, setRoomId] = useState("room1");
  const [username, setUsername] = useState("User1");

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/editor?roomId=${roomId}&username=${username}`);
  };

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Room Details</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <div>
          <label htmlFor="roomId" className="block text-sm font-medium">
            Room ID
          </label>
          <input
            id="roomId"
            type="text"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="username" className="block text-sm font-medium">
            Username
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Join Editor
        </button>
      </form>
    </main>
  );
}

{
  /*<Editor
				roomId="room1"
				websocketUrl="ws://144.91.115.254:1234"
				userName="User1"
			/>*/
}
