import { useDataContext } from "../context/DataContext";

function nomeMes(n: number) {
  const date = new Date();
  date.setMonth(date.getMonth() + n);
  return date.toLocaleString("pt-BR", { month: "long" });
}

function formatDate(date: Date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear());
  return `${year}-${month}-${day}`;
}

const MesBtn = ({ n }: { n: number }) => {
  const { setInicio, setFinal } = useDataContext();
  function setMes(n: number) {
    const date = new Date();
    date.setMonth(date.getMonth() + n);
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    setInicio(formatDate(firstDay));
    setFinal(formatDate(lastDay));
  }
  return (
    <button
      className="w-full cursor-pointer rounded-md bg-gray-100 px-6 py-2 text-black capitalize transition-[background] hover:bg-gray-200"
      onClick={() => setMes(n)}
    >
      {nomeMes(n)}
    </button>
  );
};

export default MesBtn;
