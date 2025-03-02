import DateInput from "./DateInput";
import { useDataContext } from "../context/DataContext";

const DateRange = () => {
  const { inicio, setInicio, final, setFinal } = useDataContext();
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <DateInput
        label="Inicio"
        id="inicio"
        value={inicio}
        onChange={({ target }) => setInicio(target.value)}
      />
      <DateInput
        label="Final"
        id="Final"
        value={final}
        onChange={({ target }) => setFinal(target.value)}
      />
    </form>
  );
};

export default DateRange;
