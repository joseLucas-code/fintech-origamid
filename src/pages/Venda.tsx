import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { DataFetch } from "../context/DataContext";

type VendaSemData = Omit<DataFetch, "data">;

const Venda = () => {
  const { id } = useParams();
  const { data, loading } = useFetch<VendaSemData>(
    `https://data.origamid.dev/vendas/${id}/`,
  );
  if (loading) return <div>Carregando...</div>;
  if (!data) return null;
  console.log(data);
  return (
    <div className="mt-8 rounded-md border-1 border-zinc-500 p-4">
      <div>ID: {data.id}</div>
      <div>Nome: {data.nome}</div>
      <div>
        Preço:{" "}
        {data.preco.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
      <div>Status: {data.status}</div>
      <div>Metodo de pagamento: {data.pagamento}</div>
      <div>Qnt. de parcelas: {data.parcelas}</div>
    </div>
  );
};

export default Venda;
