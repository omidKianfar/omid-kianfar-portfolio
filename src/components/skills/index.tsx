import { PropsWithChildren } from "react";

const SkillBadgeComponent = ({ children }: PropsWithChildren) => {
  return (
    <span className="inline-flex items-center rounded-full border border-sky-400/20 bg-sky-400/5 px-3 py-1 text-sm text-sky-200 transition-colors hover:border-sky-400/40 hover:bg-sky-400/10">
      {children}
    </span>
  );
};

export default SkillBadgeComponent;
