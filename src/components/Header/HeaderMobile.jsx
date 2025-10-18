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

  // đóng khi click ngoài / nhấn ESC
  useEffect(() => {
    const onDoc = (e) => {
      if (open && panelRef.current && !panelRef.current.contains(e.target))
        setOpen(false);
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
    <header className="bg-[#020D07] z-[3] lg:hidden">
      <div className="container">
        {/* Top bar: logo trái, menu phải (h = 32px) */}
        <div className="h-[32px] flex items-center justify-between">
          <NavLink to="/" className="shrink-0">
            <img
              src={logo}
              alt="Heineken"
              className="block h-[32px] w-auto object-contain"
            />
          </NavLink>

          {/* Icon menu 24x24 bên phải */}
          <button
            aria-label="Mở menu"
            className="inline-flex items-center justify-center w-[24px] h-[24px] text-white"
            onClick={() => setOpen(true)}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
              <path
                d="M3 6h18M3 12h18M3 18h18"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Overlay + Panel trượt từ phải */}
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
            {/* Header panel: logo + nút đóng */}
            <div className="h-[56px] flex items-center justify-between px-4">
              <img src={logo} alt="Heineken" className="h-[24px] w-auto" />
              <button
                aria-label="Đóng menu"
                className="inline-flex items-center justify-center w-[24px] h-[24px]"
                onClick={() => setOpen(false)}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>

            {/* Danh mục */}
            <nav className="px-4">
              <ul className="pb-5">
                <div className="py-5" />
                {NAV.map(({ label, to }) => {
                  const active = pathname === to;
                  return (
                    <li key={label} className="mb-1">
                      <NavLink
                        to={to}
                        onClick={() => setOpen(false)}
                        className="block py-1 text-[16px] leading-[22px]"
                      >
                        <span className="font-medium">{label}</span>
                        {active && (
                          <span className="block h-[4px] w-[40px] rounded-full bg-[#03B72A] mt-2" />
                        )}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* CTA Đăng nhập (cố định dưới cùng) */}
            <div className="absolute left-0 right-0 bottom-0 px-4 pb-6">
              <button className="w-full h-[44px] rounded-full bg-[#03B72A] text-white font-medium">
                {t("auth.login") || "Đăng nhập"}
              </button>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}
