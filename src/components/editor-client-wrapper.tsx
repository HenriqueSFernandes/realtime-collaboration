"use client";

import dynamic from "next/dynamic";

const Editor = dynamic(() => import("@/components/editor"), {
  ssr: false,
});

export default function EditorClientWrapper() {
  return <Editor />;
}
