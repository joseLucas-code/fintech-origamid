import React from "react";
import { useDataContext } from "../context/DataContext";
import VendaItem from "../components/VendaItem";

const Vendas = () => {
  const { data } = useDataContext();

  if (!data) return null;
  return (
    <div>
      <ul>
        {data.map((venda) => (
          <li key={venda.id}>
            <VendaItem venda={venda} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Vendas;
