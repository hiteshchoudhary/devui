import { classNames } from "@/utils";

interface PreviewCardProps {
  className?: string;
  children: React.ReactNode;
}

const PreviewCard = ({ children, className }: PreviewCardProps) => {
  return (
    <div
      className={classNames(
        "mt-4 min-h-min w-full rounded-md border",
        className || ""
      )}
    >
      {children}
    </div>
  );
};

export default PreviewCard;
