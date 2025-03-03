import { Link } from "react-router-dom";
import { DataFetch } from "../context/DataContext";

const VendaItem = ({ venda }: { venda: DataFetch }) => {
  return (
    <div className="my-4 rounded-md bg-zinc-800 p-4">
      <Link to={`/vendas/${venda.id}`}>
        <p>ID: {venda.id}</p>
        <div className="flex justify-between">
          <p>Nome: {venda.nome}</p>
          <p>
            Preço:{" "}
            {venda.preco.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default VendaItem;
