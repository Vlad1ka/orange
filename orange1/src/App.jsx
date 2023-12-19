import Cards from "./components/cards/Cards";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Juice from "./components/juice/Juice";


function App() {
  return (
    <div className="App">
        <Header />
        <Juice />
        <Cards />
        <Footer />
    </div>
  );
}

export default App;
