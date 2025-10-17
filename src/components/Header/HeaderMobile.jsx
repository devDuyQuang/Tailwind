import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import logo from "../../assets/logo.png";
import LanguageSwitcher from "../LanguageSwitcher";

export default function HeaderMobile() {
  const { t } = useTranslation("common");

  const NAV = [
    { label: t("nav.home"), to: "/" },
    { label: t("nav.about"), to: "/about" },
    { label: t("nav.product"), to: "/product" },
    { label: t("nav.history"), to: "/history" },
    { label: t("nav.contact"), to: "/contact" },
  ];

  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);

  // click-outside + ESC cho panel
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
    <header className="bg-[#020D07] z-[3] lg:hidden">
      <div className="container">
        {/* Top bar: height 32px */}
        <div className="h-[32px] flex items-center justify-between">
          {/* Logo 63x32 (giữ theo chiều cao) */}
          <NavLink to="/" className="shrink-0">
            <img
              src={logo}
              alt="Heineken"
              className="block h-[32px] w-auto object-contain"
            />
          </NavLink>

          {/* Nút menu 24x24 */}
          <button
            aria-label="Mở menu"
            className="inline-flex items-center justify-center w-[24px] h-[24px] text-white"
            onClick={() => setOpen(true)}
          >
            {/* icon hamburger đơn giản */}
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
          {/* overlay mờ */}
          <div className="absolute inset-0 bg-black/50" />

          {/* panel */}
          <aside
            ref={panelRef}
            className="absolute right-0 top-0 h-full w-[85%] max-w-[343px] bg-[#0A160F] shadow-xl"
          >
            {/* Header panel: nút đóng 24px */}
            <div className="h-[56px] flex items-center justify-between px-4">
              <NavLink
                to="/"
                onClick={() => setOpen(false)}
                className="shrink-0"
              >
                <img src={logo} alt="Heineken" className="h-[24px] w-auto" />
              </NavLink>
              <button
                aria-label="Đóng menu"
                className="inline-flex items-center justify-center w-[24px] h-[24px] text-white"
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

            {/* danh mục: padding y = 20px, gap = 4px, border-bottom 1px */}
            <nav className="px-4 pb-4">
              <ul className="border-b border-white/10 pb-5">
                <div className="py-5" />
                {NAV.map(({ label, to }) => (
                  <li key={label} className="mb-1">
                    <NavLink
                      to={to}
                      className="block py-1 text-[16px] leading-[22px] text-white"
                      onClick={() => setOpen(false)}
                    >
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>

              {/* Language (đặt trong panel như Figma) */}
              <div
                className="
                  mt-4
                  [&_button]:bg-transparent
                  [&_button:hover]:bg-transparent
                  [&_button:focus]:bg-transparent
                  [&_button]:shadow-none
                  [&_button]:ring-0
                  [&_button]:outline-none
                "
              >
                <LanguageSwitcher />
              </div>

              {/* CTA đăng nhập / đăng ký */}
              <div className="mt-6 space-y-2">
                <button className="w-full h-[44px] rounded-full bg-[#03B72A] text-white font-medium">
                  {t("auth.login") || "Đăng nhập"}
                </button>
                <button className="w-full h-[44px] rounded-full border border-white/20 text-white/90">
                  {t("auth.signup") || "Đăng ký"}
                </button>
              </div>
            </nav>
          </aside>
        </div>
      )}
    </header>
  );
}
