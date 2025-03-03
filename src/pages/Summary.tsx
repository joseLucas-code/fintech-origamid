import { useDataContext } from "../context/DataContext";
import Vendas from "./Vendas";

const Summary = () => {
  const { data } = useDataContext();
  if (!data) return null;
  return (
    <section className="mt-8">
      <div className="space-y-4">
        <div>
          <h2 className="text-3xl font-semibold">Vendas</h2>
          <span className="text-xl font-medium">
            {data
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
          </span>
        </div>
        <div>
          <h2 className="text-3xl font-semibold">Recebidos</h2>
          <span className="text-xl font-medium">
            {data
              .filter((item) => item.status === "pago")
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
          </span>
        </div>
        <div>
          <h2 className="text-3xl font-semibold">Processando</h2>
          <span className="text-xl font-medium">
            {data
              .filter((item) => item.status === "processando")
              .reduce((acc, item) => acc + item.preco, 0)
              .toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
          </span>
        </div>
        <div className="mt-8">Graficos</div>
        <Vendas />
      </div>
    </section>
  );
};

export default Summary;
