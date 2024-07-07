"use client";

import dynamic from "next/dynamic";
import {
  ChangeEvent,
  MutableRefObject,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import "react-quill/dist/quill.snow.css";
import Loading from "../../Loading";
import ReactQuill, { ReactQuillProps } from "react-quill";

interface ForwardedQuillProps extends ReactQuillProps {
  forwardedRef: React.MutableRefObject<ReactQuill | null>;
}

const Editor = dynamic(
  async () => {
    const { default: RQ } = await import("react-quill");

    const DynamicEditor = ({ forwardedRef, ...props }: ForwardedQuillProps) => (
      <RQ ref={forwardedRef} {...props} />
    );

    DynamicEditor.displayName = "Editor"; // Set display name here

    return DynamicEditor;
  },
  {
    ssr: false,
    loading: () => <Loading />,
  }
);

const formats = [
  "font",
  "size",
  "header",
  "color",
  "background",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

type IPresignedResponse = {
  ok: boolean;
  presignedUrl: string;
  fileName: string;
};

interface IPostEditorProps {
  onEditorStateChange: (editorState: string) => void;
  content?: string;
}

export default function PostEditor({
  onEditorStateChange,
  content,
}: IPostEditorProps) {
  const [value, setValue] = useState("");

  const quillRef = useRef<ReactQuill | null>(null);

  useEffect(() => {
    setValue(content || "");
  }, [content]);

  const onChangeHandler = (value: string) => {
    setValue(value);
    onEditorStateChange(value);
  };

  const imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.addEventListener("change", async () => {
      let file: File | undefined;
      if (input.files) file = input.files[0];

      try {
        const editor = quillRef?.current?.getEditor?.();
        const range = editor?.getSelection?.();

        if (editor && range) {
          editor?.insertEmbed(
            range?.index,
            "image",
            "https://d2p8484c990lgc.cloudfront.net/KLAB/next/loading_spinner.gif"
          );
        }

        if (file) {
          const response = await fetch(`/api/presigned?file=${file.name}`);

          if (response.ok) {
            const data: IPresignedResponse = await response.json();

            const presignedUrl = data.presignedUrl;

            const signedResponse = await fetch(presignedUrl, {
              method: "PUT",
              body: file,
            });

            if (signedResponse.ok) {
              const signedImageURL = `https://d2p8484c990lgc.cloudfront.net/KLAB/${data.fileName}`;

              if (editor && range) {
                editor.deleteText(range.index, 1);
                editor.insertEmbed(range.index, "image", signedImageURL);
                const nextIndex = range.index + 1;
                const nextRange = {
                  index: nextIndex,
                  length: 0,
                };

                editor.setSelection(nextRange);
              }
            } else {
              console.error("signedResponse Error");
            }
          } else {
            console.error("Failed to get presigned URL");
          }
        } else {
          console.error("No file selected");
        }
      } catch (error) {
        console.log(error);
      }
    });
  };

  function getVideoUrl(url: any) {
    const match = url.match(
      /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.+)$/
    );

    if (match && match[1]) {
      return `https://www.youtube.com/embed/${match[1]}`;
    }
    return null;
  }

  const videoHandler = () => {
    const editor = quillRef?.current?.getEditor?.();
    const range = editor?.getSelection?.();
    let url = prompt("YouTube 동영상 URL을 입력하세요: ");

    if (url === null) {
      return;
    }

    const videoUrl = getVideoUrl(url);

    if (videoUrl && editor && range) {
      editor.insertEmbed(range.index, "video", videoUrl);
      editor.setSelection(range.index + 1, 0);
    } else {
      alert("유효한 YouTube URL이 아닙니다.");
    }
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: "1" }, { header: "2" }],
          [{ size: [] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ list: "ordered" }, { list: "bullet" }, { align: [] }],
          ["image", "video"],
        ],
        handlers: { image: imageHandler, video: videoHandler },
      },
      clipboard: {
        matchVisual: false,
      },
    }),
    []
  );

  return (
    <Editor
      theme="snow"
      value={value}
      onChange={onChangeHandler}
      style={{ height: "400px", width: "1100px" }}
      modules={modules}
      formats={formats}
      forwardedRef={quillRef}
    />
  );
}
