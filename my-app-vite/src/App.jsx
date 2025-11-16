import { Routes, Route, Navigate } from "react-router-dom";

// Layout
import Layout from "./page/Layout.jsx";

// Pages
import Home from "./page/Home/Home.jsx";
import Product from "./page/Product/Product.jsx";
import About from "./page/About/About.jsx";
import History from "./page/History/History.jsx";
import Contact from "./page/Contact/Contact.jsx";

export default function App() {
  return (
    <Routes>
      {/* Layout cha giữ Header cố định */}
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="about" element={<About />} />
        <Route path="history" element={<History />} />
        <Route path="contact" element={<Contact />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
