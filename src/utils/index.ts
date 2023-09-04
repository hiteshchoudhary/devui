import { ReactElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";

export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

export const renderHTMLFromJSX = (jsx: ReactElement): string => {
  return renderToStaticMarkup(jsx).replaceAll("&amp;", "&");
};
