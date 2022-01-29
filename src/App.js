import "./App.css";
import Header from "./components/navigation/Header";
import { useState } from "react";
function App() {
  const [headerLinks, setHeaderLinks] = useState([
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "Contact", url: "/contact-us" },
    { id: 3, name: "About", url: "/about" },
    { id: 4, name: "Store", url: "/store" },
  ]);
  return (
    <div className="App">
      <Header links={headerLinks}></Header>
    </div>
  );
}

export default App;
