import { Outlet } from "react-router-dom";
import Header from "../components/Header"; // wrapper

export default function Layout() {
  return (
    <>
      <Header />
      <main className="min-h-[60vh] bg-[#020D07] text-white">
        <Outlet />
      </main>
    </>
  );
}
