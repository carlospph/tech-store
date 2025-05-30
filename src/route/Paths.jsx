import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Produtos } from "../pages/Produtos";
import { Erro } from "../pages/Erro";

export const Paths = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/produtos" element={<Produtos/>}/>
      <Route path="*" element={<Erro/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default Paths;