import Header from './components/Header';
import SideNav from './components/SideNav';
import Summary from './pages/Summary';

function App() {
  return (
    <>
      <Header />
      <main>
        <SideNav />
        <Summary />
      </main>
    </>
  );
}

export default App;
