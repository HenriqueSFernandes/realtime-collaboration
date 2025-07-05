"use client";

import { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Delimiter from "@coolbytes/editorjs-delimiter";
import Table from "@editorjs/table";
import CodeTool from "@editorjs/code";

import type { BlockToolConstructable } from "@editorjs/editorjs";

const Editor = () => {
  const editorRef = useRef<EditorJS | null>(null);

  useEffect(() => {
    if (!editorRef.current) {
      const newEditor = new EditorJS({
        holder: "editorjs",
        tools: {
          header: {
            class: Header as unknown as BlockToolConstructable,
            inlineToolbar: true,
            config: {
              levels: [1, 2, 3],
              defaultLevel: 1,
            },
          },
          list: {
            class: List as unknown as BlockToolConstructable,
            inlineToolbar: true,
          },
          delimiter: {
            class: Delimiter as unknown as BlockToolConstructable,
            inlineToolbar: true,
            config: {
              defaultStyle: "line",
            },
          },
          table: {
            class: Table as unknown as BlockToolConstructable,
            inlineToolbar: true,
          },
          code: {
            class: CodeTool as unknown as BlockToolConstructable,
          },
        },
        placeholder: "Start typing your content...",
        onReady: () => {
          console.log("Editor is ready!");
        },
        onChange: () => {
          console.log("Content changed");
        },
      });

      editorRef.current = newEditor;
    }

    return () => {
      if (editorRef.current && editorRef.current.destroy) {
        editorRef.current.destroy();
        editorRef.current = null;
      }
    };
  }, []);

  return (
    <div
      id="editorjs"
      className="bg-white text-black border border-gray-300 rounded p-4 min-h-[300px]"
    />
  );
};

export default Editor;
