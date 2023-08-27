import { classNames } from "@/utils";
import { renderToStaticMarkup } from "react-dom/server";

interface PreviewCardProps {
  className?: string;
  children: React.ReactElement;
}

const PreviewCard = ({ children, className }: PreviewCardProps) => {
  return (
    // ! Reason to use iframe instead on any normal div is to avoid interference of devui parent project's styling and classes with the example's styling an classes
    // ! using iframe will isolate the examples from devui's parent application code.
    <iframe
      className={classNames(
        "mt-4 min-h-[865px] w-full overflow-auto rounded-md border",
        className || "",
      )}
      srcDoc={`
      <script src="https://cdn.tailwindcss.com"></script>
      ${renderToStaticMarkup(children)}`}
    ></iframe>
  );
};

export default PreviewCard;
