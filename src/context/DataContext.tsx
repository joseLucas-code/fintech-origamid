import { createContext, PropsWithChildren, useContext } from 'react';
import useFetch from '../hooks/useFetch';

type DataContext = {
  data: DataFetch | null;
  loading: boolean;
  error: string | null;
};

type DataFetch = {
  id: string;
  nome: string;
  preco: number;
  status: 'pago' | 'processando' | 'falha';
  pagamento: 'boleto' | 'pix' | 'cartao';
  parcelas: number | null;
  data: string;
};

const dataContext = createContext<DataContext | null>(null);

export const useDataContext = () => {
  const context = useContext(dataContext);
  if (!context) throw new Error('Use context provider');
  return context;
};

export function DataContextProvider({ children }: PropsWithChildren) {
  const { data, error, loading } = useFetch<DataFetch | null>(
    'https://data.origamid.dev/vendas/'
  );
  return (
    <dataContext.Provider value={{ data, error, loading }}>
      {children}
    </dataContext.Provider>
  );
}
