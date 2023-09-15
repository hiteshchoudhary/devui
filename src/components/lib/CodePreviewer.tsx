import { renderHTMLFromJSX } from "@/utils";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import {
  CodeBracketIcon,
  DocumentDuplicateIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import CodeSnippetRenderer from "./CodeSnippetRenderer";
import PreviewCard from "./PreviewCard";

interface CodePreviewerProps {
  title: string;
  children: React.ReactElement;
}

const CodePreviewer: React.FC<CodePreviewerProps> = ({ children, title }) => {
  const [previewMode, setPreviewMode] = useState(true);
  const [codeCopied, setCodeCopied] = useState(false);

  const copyToClipboard = () => {
    const codeToCopy = renderHTMLFromJSX(children);
    navigator.clipboard.writeText(codeToCopy);
    setCodeCopied(true);
    setTimeout(() => {
      setCodeCopied(false);
    }, 4000);
  };

  return (
    <div className="my-8 md:my-12 lg:my-14">
      <div className="flex flex-col justify-between md:flex-row md:items-center">
        <div className="mb-4 flex flex-row items-center space-x-4 md:mb-0">
          <h3 className=" font-sans font-semibold md:mb-0">{title}</h3>
        </div>
        <div className="flex items-center space-x-4">
          {/* Buttons */}
          <div className="">
            <span className="isolate inline-flex rounded-md shadow-sm">
              <button
                onClick={() => setPreviewMode(true)}
                type="button"
                className="relative inline-flex items-center rounded-l-md bg-gray-800 px-2 py-2 ring-1 ring-inset ring-gray-500 hover:bg-gray-700 focus:z-10"
              >
                <span className="sr-only">UI preview</span>
                <span className="flex items-center space-x-2 text-sm font-semibold text-gray-200">
                  <EyeIcon className="h-4 w-4" />
                  <span>Preview</span>
                </span>
              </button>
              <button
                onClick={() => setPreviewMode(false)}
                type="button"
                className="relative -ml-px inline-flex items-center rounded-r-md bg-gray-800 px-2 py-2 ring-1 ring-inset ring-gray-500 hover:bg-gray-700 focus:z-10"
              >
                <span className="sr-only">Code snippet</span>
                <span className="flex items-center space-x-2 text-sm font-semibold text-gray-200">
                  <CodeBracketIcon className="h-4 w-4" />
                  <span>Code</span>
                </span>
              </button>
            </span>
          </div>

          <button
            onClick={() => {
              if (codeCopied) return;
              copyToClipboard();
            }}
            className="cursor-pointer rounded-md p-2 hover:bg-gray-700 active:bg-gray-600"
          >
            {codeCopied ? (
              <CheckCircleIcon className="h-5 w-5 text-green-600" />
            ) : (
              <DocumentDuplicateIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
      <div className="mt-4 w-full">
        {previewMode ? (
          <PreviewCard>{children}</PreviewCard>
        ) : (
          <CodeSnippetRenderer codeSnippet={renderHTMLFromJSX(children)} />
        )}
      </div>
    </div>
  );
};

export default CodePreviewer;
