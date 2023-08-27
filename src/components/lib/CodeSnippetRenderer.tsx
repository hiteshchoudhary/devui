import { langs } from "@uiw/codemirror-extensions-langs";
import * as themes from "@uiw/codemirror-themes-all";
import CodeMirror from "@uiw/react-codemirror";
import React, { useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";

const DEFAULT_BASE_SETUP = {
  foldGutter: false,
  highlightActiveLine: false,
  highlightActiveLineGutter: false,
  indentOnInput: true,
  lineNumbers: false,
  syntaxHighlighting: true,
  tabSize: 4,
};

interface CodeSnippetRendererProps {
  codeSnippet: string;
}

const CodeSnippetRenderer: React.FC<CodeSnippetRendererProps> = ({
  codeSnippet,
}) => {
  return (
    <div className="relative mt-4 min-h-min w-full rounded-md pb-0">
      <CodeMirror
        className={"CodeMirror__Main__Editor"}
        theme={themes["githubDark"]}
        value={codeSnippet}
        extensions={[langs.html()]}
        readOnly={true}
        style={{
          fontSize: "14px",
        }}
        basicSetup={{
          ...DEFAULT_BASE_SETUP,
        }}
        indentWithTab
      />
    </div>
  );
};

export default CodeSnippetRenderer;
