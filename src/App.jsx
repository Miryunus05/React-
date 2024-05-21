import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import NotFound from "./components/pages/NotFound";
import GeneralLayout from "./components/pages/GeneralLayout";
import "./App.css"
const Home = React.lazy(() => import("./components/pages/Home"))
const Contact = React.lazy(() => import("./components/pages/Contact"))
const Checkout = React.lazy(() => import("./components/pages/Checkout"))
const Card = React.lazy(() => import("./components/pages/Card"))
const Shop = React.lazy(() => import("./components/pages/Shop"))
const Login = React.lazy(() => import("./components/pages/Login"))
const Registratsiya = React.lazy(() => import("./components/pages/registratsiya"))
const Use = React.lazy(() => import("./components/pages/use"))
const SinglePage =React.lazy(() => import("./components/pages/SingleProduct"))

const App = () => {
  return <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<GeneralLayout />}>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/use" element={<Use />} />
        <Route path="/card" element={<Card />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:productId" element={<SinglePage/>} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/registratsiya" element={<Registratsiya />} />
    </Routes>
    </Suspense>
  </BrowserRouter>
}

export default App;
