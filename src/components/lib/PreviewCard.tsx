import { classNames, renderHTMLFromJSX } from "@/utils";
import { useEffect, useRef, useState } from "react";
import WidthHandler from "./WidthHandler";

interface PreviewCardProps {
  className?: string;
  children: React.ReactElement;
}

const PreviewCard = ({ children, className }: PreviewCardProps) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState("100%");
  const [maxWidth, setMaxWidth] = useState<number | null>(null);

  useEffect(() => {
    if (!editorRef.current || maxWidth) return; // once set don't set max width again
    setMaxWidth(editorRef.current?.clientWidth);
  }, [editorRef]);

  return (
    <div
      ref={editorRef}
      className={classNames(
        "relative mx-auto mt-4 min-h-[865px] overflow-visible rounded-md border",
        className || "",
      )}
      style={{
        width: containerWidth || "100%",
      }}
    >
      <WidthHandler
        innerRef={editorRef}
        onChange={(width) => {
          setContainerWidth(`${width}px`);
        }}
        maxWidth={maxWidth || 1440}
      />
      {/* // ! Reason to use iframe instead on any normal div is to avoid interference of devui parent project's styling and classes with the example's styling an classes
     // ! using iframe will isolate the examples from devui's parent application code. */}
      <div
        className={classNames(
          "iframe-overlay absolute inset-0 z-20 mx-auto hidden h-full min-h-[865px] w-full overflow-auto rounded-md border",
        )}
      ></div>
      <iframe
        className={classNames(
          "z-10 mx-auto min-h-[865px] w-full overflow-auto rounded-md border",
        )}
        srcDoc={`
      <script src="https://cdn.tailwindcss.com"></script>
      ${
        process.env.NODE_ENV && process.env.NODE_ENV === "development"
          ? '<script>const host=window.parent.location.host;const socket=new WebSocket("ws://"+host+"/_next/webpack-hmr");socket.onmessage=(message)=>{const{action}=JSON.parse(message.data);if(action==="built")window.parent.location.reload()}</script>'
          : ""
      }
      ${renderHTMLFromJSX(children)}`}
      ></iframe>
    </div>
  );
};

export default PreviewCard;
