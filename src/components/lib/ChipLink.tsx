import React from "react";

interface ChipLinkProps {
  url: string;
  text: string;
}

const ChipLink: React.FC<ChipLinkProps> = ({ url, text }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="rounded-xl border-0 bg-sky-400/10 px-2 py-1 text-sm text-sky-400"
    >
      {text}
    </a>
  );
};

export default ChipLink;
