import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import { DataContextProvider } from "./context/DataContext";
import Summary from "./pages/Summary";
import Vendas from "./pages/Vendas";
import Venda from "./pages/Venda";

function App() {
  return (
    <BrowserRouter>
      <div className="space-y-5 p-5">
        <DataContextProvider>
          <SideNav />
          <main>
            <Header />
            <Routes>
              <Route path="/" element={<Summary />} />
              <Route path="/vendas" element={<Vendas />} />
              <Route path="/vendas/:id" element={<Venda />} />
            </Routes>
          </main>
        </DataContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
