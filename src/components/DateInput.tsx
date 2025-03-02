import { ComponentProps } from "react";

type DateInput = ComponentProps<"input"> & {
  label: string;
  id: string;
};
const DateInput = ({ label, id, ...props }: DateInput) => {
  return (
    <div className="my-4 space-y-2 rounded-md border-[1px] border-zinc-600 p-4">
      <label className="block rounded-md p-2" htmlFor={id}>
        {label}
      </label>
      <input
        className="w-full rounded-md bg-zinc-100 p-2 py-1 text-black"
        type="date"
        id={id}
        {...props}
      />
    </div>
  );
};

export default DateInput;
