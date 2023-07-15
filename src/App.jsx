import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Footer from "./Components/Footer/Footer";
import Products from "./Components/Products/Products";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Hero />
        <Products />
        <Footer />
      </div>
    </>
  );
}

export default App;
