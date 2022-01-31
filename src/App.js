import "./App.css";
import Header from "./components/navigation/Header";
import { useState } from "react";
import Home from "./pages/Home";
import Footer from "./components/navigation/Footer";
import Services from "./pages/Services";
function App() {
  const [headerLinks, setHeaderLinks] = useState([
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "Contact", url: "/contact-us" },
    { id: 3, name: "About", url: "/about" },
    { id: 4, name: "Store", url: "/store" },
  ]);
  return (
    <div className="">
      <Header links={headerLinks} />
      <Home />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
