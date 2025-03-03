import { useState } from "react";
import HomeSVG from "./HomeSVG";
import PanelLeftSVG from "./PanelLeftSVG";
import SummarySVG from "./SummarySVG";
const SideNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <span
        className="inline-block cursor-pointer rounded-md border-1 border-white p-1"
        onClick={() => setOpen(true)}
      >
        <PanelLeftSVG />
      </span>
      <div
        data-menu={open}
        className="fixed inset-0 z-10 bg-black opacity-75 data-[menu=false]:hidden data-[menu=true]:block"
        onClick={() => setOpen(false)}
      />
      <div
        data-menu={open}
        className="fixed inset-y-0 left-0 z-11 flex w-64 flex-col border-r-2 border-white bg-zinc-900 transition-[position,0.3s] data-[menu=false]:-left-64 data-[menu=true]:left-0"
      >
        <div className="flex flex-col gap-4 p-4">
          <div className="text-xl font-semibold">Origamid</div>
          <a href="/" className="flex gap-2 text-lg">
            <HomeSVG /> Home
          </a>
          <a href="/summary" className="flex gap-2 text-lg">
            <SummarySVG /> Summary
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
