import { langs } from "@uiw/codemirror-extensions-langs";
import * as themes from "@uiw/codemirror-themes-all";
import CodeMirror from "@uiw/react-codemirror";
import * as parserBabel from "prettier/parser-babel";
import * as parserHtml from "prettier/parser-html";
import prettier from "prettier/standalone";
import React, { useEffect, useState } from "react";

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
  const [code, setCode] = useState("");

  const formatCode = async () => {
    try {
      const formattedCode = await prettier.format(codeSnippet, {
        parser: "html",
        plugins: [parserHtml, parserBabel],
        semi: false,
        printWidth: 200,
        tabWidth: 2,
        bracketSameLine: true,
        singleAttributePerLine: true,
        htmlWhitespaceSensitivity: "ignore",
      });
      setCode(formattedCode);
    } catch (error) {
      console.error("Error while formatting the code: \n", error);
      setCode(codeSnippet);
    }
  };

  useEffect(() => {
    formatCode();
  }, [codeSnippet]);

  return (
    <div className="relative mt-4 min-h-min w-full rounded-md pb-0">
      <CodeMirror
        className={"CodeMirror__Main__Editor"}
        theme={themes["githubDark"]}
        value={code}
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
