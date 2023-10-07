"use client";
import { classNames } from "@/utils";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface IFrameProps {
  className?: string;
  children: React.ReactElement;
}

const IFrame = ({ children, className = "" }: IFrameProps) => {
  const ref = useRef<HTMLIFrameElement>(null);
  const [iframeDoc, setIframeDoc] = useState<Document>();
  const [loadBody, setLoadBody] = useState(false);

  useEffect(() => {
    setIframeDoc(ref.current?.contentWindow?.document);
  }, []);

  useEffect(() => {
    const stylesheet = document.querySelector<HTMLLinkElement>(
      "link[rel=stylesheet]",
    );

    if (iframeDoc && stylesheet) {
      const link = iframeDoc.createElement("link");
      link.rel = "stylesheet";
      link.href = stylesheet.href;

      link.onload = () => {
        setLoadBody(true);
      };

      iframeDoc.head.appendChild(link);

      // MutationObserver for parent css to update css only in development mode
      if (process.env.NODE_ENV === "development") {
        const observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (mutation.type === "childList") {
              mutation.addedNodes.forEach((node: any) => {
                if (node.nodeName === "LINK" && node.rel === "stylesheet") {
                  link.href = node.href;
                }
              });
            }
          });
        });

        observer.observe(document.querySelector("head") as HTMLHeadElement, {
          childList: true,
        });

        return () => observer.disconnect();
      }
    }
  }, [iframeDoc]);

  return (
    <iframe ref={ref} className={classNames(className)}>
      {iframeDoc && loadBody && createPortal(children, iframeDoc.body)}
    </iframe>
  );
};

export default IFrame;
