// src/layouts/MainLayout.jsx
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="bg-[#020D07] min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Nếu muốn đồng bộ bề rộng theo Figma ở mọi trang:
           <div className="container"><Outlet /></div> */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
