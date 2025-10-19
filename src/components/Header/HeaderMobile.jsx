// src/components/Header/HeaderMobile.jsx
import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import logo from "../../assets/logo.png";

export default function HeaderMobile() {
  const { t } = useTranslation("common");
  const { pathname } = useLocation();

  const NAV = [
    { label: t("nav.home"), to: "/" },
    { label: t("nav.about"), to: "/about" },
    { label: t("nav.product"), to: "/product" },
    { label: t("nav.history"), to: "/history" },
    { label: t("nav.contact"), to: "/contact" },
  ];

  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);

  useEffect(() => {
    const onDoc = (e) => {
      if (open && panelRef.current && !panelRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDoc);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="bg-[#020D07] z-[3] lg:hidden border-b border-[#0E1A13]">
      <div className="container px-4">
        {/* Header mobile: 72px */}
        <div className="h-[72px] flex items-center justify-between">
          {/* Logo 63x32 bên trái */}
          <NavLink to="/" className="flex items-center">
            <img
              src={logo}
              alt="Heineken"
              className="block w-[63px] h-[70px] object-contain"
            />
          </NavLink>

          {/* Menu 24x24 bo 8px bên phải */}
          <button
            aria-label="Mở menu"
            className="flex items-center justify-center w-[24px] h-[24px] rounded-[8px] text-white hover:bg-white/10 transition-colors"
            onClick={() => setOpen(true)}
          >
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Drawer */}
      {open && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          />
          <aside
            ref={panelRef}
            className="absolute right-0 top-0 h-full w-[85%] max-w-[343px] bg-[#0A160F] text-white shadow-xl"
          >
            {/* Header của drawer: 72px, X trái, logo phải */}
            <div className="h-[72px] flex items-center justify-between px-4">
              <button
                aria-label="Đóng menu"
                className="flex items-center justify-center w-[24px] h-[24px] rounded-[8px] hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
              <img src={logo} alt="Heineken" className="h-[40px] w-auto" />
            </div>

            {/* Nội dung: padding top/bottom 24, left/right 16, gap 8 */}
            <div className="px-4 pt-6 pb-6">
              <nav className="space-y-2">
                {NAV.map(({ label, to }) => {
                  const active = pathname === to;
                  return (
                    <NavLink
                      key={label}
                      to={to}
                      onClick={() => setOpen(false)}
                      className="block w-[300px] h-[56px] px-6 py-3 rounded-md"
                    >
                      {/* frame 83x32: text + underline */}
                      <div className="h-[32px] flex flex-col justify-center items-start gap-2">
                        <span className="text-[16px] leading-[22px] text-white/90 font-medium">
                          {label}
                        </span>
                      </div>
                      {active && (
                        <span
                          className="block mt-2 h-[4px] w-[40px] rounded-[76px] bg-[#03B72A]"
                          aria-hidden="true"
                        />
                      )}
                    </NavLink>
                  );
                })}
              </nav>

              {/* Khối “icons/CTA”: padding 20/16/20/16, gap 12 */}
              <div className="pt-5" />
              <div className="px-4 py-5 flex flex-col gap-3">
                <button className="w-full h-[44px] rounded-full bg-[#03B72A] text-white font-medium">
                  {t("Đăng nhập") || "Đăng nhập"}
                </button>
                <button
                  type="button"
                  className="w-full h-[44px] rounded-full bg-[#03B72A] text-white font-medium"
                  onClick={() => setOpen(false)}
                >
                  {t("Đăng Ký") || "Đăng ký"}
                </button>
              </div>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}
