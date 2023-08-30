import {
  CheckIcon,
  CodeBracketIcon,
  DocumentDuplicateIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import CodeSnippetRenderer from "./CodeSnippetRenderer";
import PreviewCard from "./PreviewCard";

interface CodePreviewerProps {
  title: string;
  children: React.ReactElement;
}

const CodePreviewer: React.FC<CodePreviewerProps> = ({ children, title }) => {
  const [previewMode, setPreviewMode] = useState(true);

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
                className="relative inline-flex items-center rounded-l-md bg-white px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
              >
                <span className="sr-only">Previous</span>
                <span className="flex items-center space-x-2 text-sm font-semibold text-black">
                  <EyeIcon className="h-4 w-4" />
                  <span>Preview</span>
                </span>
              </button>
              <button
                onClick={() => setPreviewMode(false)}
                type="button"
                className="relative -ml-px inline-flex items-center rounded-r-md bg-white px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10"
              >
                <span className="sr-only">Next</span>
                <span className="flex items-center space-x-2 text-sm font-semibold text-black">
                  <CodeBracketIcon className="h-4 w-4" />
                  <span>Code</span>
                </span>
              </button>
            </span>
          </div>

          <div className="rounded-md p-2 hover:bg-gray-200">
            {false ? (
              <CheckIcon className="h-4 w-4" />
            ) : (
              <DocumentDuplicateIcon className="h-4 w-4" />
            )}
          </div>
        </div>
      </div>
      <div className="w-full">
        {previewMode ? (
          <PreviewCard>{children}</PreviewCard>
        ) : (
          <CodeSnippetRenderer codeSnippet={renderToStaticMarkup(children)} />
        )}
      </div>
    </div>
  );
};

export default CodePreviewer;
