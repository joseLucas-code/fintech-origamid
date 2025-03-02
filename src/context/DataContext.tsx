import { createContext, PropsWithChildren, useContext, useState } from "react";
import useFetch from "../hooks/useFetch";

type DataContext = {
  data: DataFetch[] | null;
  loading: boolean;
  error: string | null;
  inicio: string;
  setInicio: React.Dispatch<React.SetStateAction<string>>;
  final: string;
  setFinal: React.Dispatch<React.SetStateAction<string>>;
};

type DataFetch = {
  id: string;
  nome: string;
  preco: number;
  status: "pago" | "processando" | "falha";
  pagamento: "boleto" | "pix" | "cartao";
  parcelas: number | null;
  data: string;
};

const dataContext = createContext<DataContext | null>(null);

function getDate(n: number) {
  const date = new Date();
  date.setDate(date.getDate() - n);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear());
  return `${year}-${month}-${day}`;
}

export const useDataContext = () => {
  const context = useContext(dataContext);
  if (!context) throw new Error("Use context provider");
  return context;
};

export function DataContextProvider({ children }: PropsWithChildren) {
  const [inicio, setInicio] = useState(getDate(30));
  const [final, setFinal] = useState(getDate(0));
  const { data, error, loading } = useFetch<DataFetch[] | null>(
    `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`,
  );
  return (
    <dataContext.Provider
      value={{ data, error, loading, inicio, setInicio, final, setFinal }}
    >
      {children}
    </dataContext.Provider>
  );
}
