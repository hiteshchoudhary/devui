import { ReactElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";

const renderHTMLFromJSX = (jsx: ReactElement): string => {
  return renderToStaticMarkup(jsx).replaceAll("&amp;", "&");
};

export default renderHTMLFromJSX;
