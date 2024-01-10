import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";

import HomePageImage from "./components/homepageImage";
import Products from "./components/Products";
import Deals from "./components/Deals";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePageImage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<Deals />} />
      </Routes>
    </Router>
  );
}

export default App;
