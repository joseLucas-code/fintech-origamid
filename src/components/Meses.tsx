import React from "react";
import MesBtn from "./MesBtn";

const Meses = () => {
  return (
    <div className="flex justify-between gap-4">
      <MesBtn n={-2} />
      <MesBtn n={-1} />
      <MesBtn n={0} />
    </div>
  );
};

export default Meses;
