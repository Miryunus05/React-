import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Checkout from "./components/pages/Checkout";
import Card from "./components/pages/Card";
import NotFound from "./components/pages/NotFound";
import Layout from "./components/pages/Layout";
import "./App.css"

const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/card" element={<Card />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default App;
