import { DataFetch } from "../context/DataContext";

const VendaItem = ({ venda }: { venda: DataFetch }) => {
  return (
    <div className="my-4 rounded-md bg-zinc-800 p-4">
      <a href="">ID: {venda.id}</a>
      <div className="flex justify-between">
        <div>Nome: {venda.nome}</div>
        <div>
          Preço:{" "}
          {venda.preco.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </div>
      </div>
    </div>
  );
};

export default VendaItem;
