"use client";
import Select from "@/components/common/Select";
import CodePreviewer from "@/components/lib/CodePreviewer";
import { SelectOptionType } from "@/types/utils";
import { applications, getComponentByAppPageId } from "@/utils/screens";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const TemplateDetails = () => {
  const { id } = useParams();

  const [loadingUi, setLoadingUi] = useState(true);

  const [selectedPageUI, setSelectedPageUI] = useState<SelectOptionType | null>(
    null
  );
  const [app, setApp] = useState<(typeof applications)[0] | null>(null);

  useEffect(() => {
    if (!applications) return;
    const _app = applications.find((app) => app.id === id) || applications[0];
    setApp(_app);
    setSelectedPageUI(_app.pages[0]); // set 1st page as default selected page
    setLoadingUi(false);
  }, [applications]);

  if (loadingUi) return <h1>Loading screens...</h1>;

  return (
    <div>
      <Select
        options={app?.pages || []}
        label="Select a page UI"
        value={selectedPageUI}
        setValue={setSelectedPageUI}
      />
      <div className="w-full">
        <CodePreviewer title={selectedPageUI?.name || "DevUI Screen"}>
          {getComponentByAppPageId(app?.id || "", selectedPageUI?.id || "")}
        </CodePreviewer>
      </div>
    </div>
  );
};

export default TemplateDetails;
