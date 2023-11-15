import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home, Contact, Store } from "./pages";
import "./App.css";
import { NotFound } from "./pages/NotFound";
import { Footer } from "./components/Footer";
import { Details } from "./pages/Details";

export const App = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tienda" element={<Store />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/detalles/:id" element={<Details/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </main>
        <Footer/>
    </BrowserRouter>
  );
};
