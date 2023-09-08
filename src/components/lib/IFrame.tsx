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
    if (iframeDoc) {
      const stylesheet = document.querySelector<HTMLLinkElement>(
        "link[rel=stylesheet]",
      );

      if (stylesheet) {
        const link = iframeDoc.createElement("link");
        link.rel = "stylesheet";
        link.href = stylesheet.href;

        link.onload = () => {
          setLoadBody(true);
        };

        iframeDoc.head.appendChild(link);
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
