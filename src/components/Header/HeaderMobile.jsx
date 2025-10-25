// src/components/Header/HeaderMobile.jsx

import flagVN from "../../assets/image-38.png";
import flagEN from "../../assets/uk.png";
import flagCZ from "../../assets/czech.png";

import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import logo from "../../assets/logo.png";

export default function HeaderMobile() {
  const { t, i18n } = useTranslation("common");
  const { pathname } = useLocation();

  const NAV = [
    { label: t("nav.home"), to: "/" },
    { label: t("nav.about"), to: "/about" },
    { label: t("nav.product"), to: "/product" },
    { label: t("nav.history"), to: "/history" },
    { label: t("nav.contact"), to: "/contact" },
  ];

  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const panelRef = useRef(null);

  // Đóng drawer khi click ra ngoài hoặc nhấn ESC
  useEffect(() => {
    const onDoc = (e) => {
      if (open && panelRef.current && !panelRef.current.contains(e.target)) {
        setOpen(false);
        setLangOpen(false);
      }
    };
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", onDoc);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Đổi ngôn ngữ
  const setLang = (lng) => {
    i18n.changeLanguage(lng);
    setLangOpen(false);
  };

  // Đóng drawer khi chuyển route
  useEffect(() => {
    setOpen(false);
    setLangOpen(false);
  }, [pathname]);

  const currentLang = i18n.language?.startsWith("vi") ? "VN" : "EN";
  const currentFlag = i18n.language?.startsWith("vi") ? "🇻🇳" : "🇺🇸";

  return (
    <header className="bg-[#020D07] z-[3] lg:hidden border-b border-[#0E1A13]">
      <div className="container px-4">
        {/* Header mobile: 72px */}
        <div className="h-[72px] flex items-center justify-between">
          {/* Logo trái – theo yêu cầu: 96×49 */}
          <NavLink to="/" className="flex items-center">
            <img
              src={logo}
              alt="Heineken"
              className="block w-[96px] h-[49px] object-contain"
            />
          </NavLink>

          {/* Icon menu 24×24 (bo 8px) bên phải */}
          <button
            aria-label="Mở menu"
            className="flex items-center justify-center w-[24px] h-[24px] rounded-[8px] text-white hover:bg-white/10 transition-colors"
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

      {/* Drawer */}
      {open && (
        <div className="fixed inset-0 z-50">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => {
              setOpen(false);
              setLangOpen(false);
            }}
          />
          {/* Panel trượt từ phải */}
          <aside
            ref={panelRef}
            className="absolute right-0 top-0 h-full w-[85%] max-w-[343px] bg-[#0A160F] text-white shadow-xl"
          >
            {/* Header của drawer: 72px, nút X bên trái, logo bên phải */}
            <div className="h-[72px] flex items-center justify-between px-4">
              <button
                aria-label="Đóng menu"
                className="flex items-center justify-center w-[24px] h-[24px] rounded-[8px] hover:bg-white/10"
                onClick={() => {
                  setOpen(false);
                  setLangOpen(false);
                }}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </button>
              <img src={logo} alt="Heineken" className="h-[40px] w-auto" />
            </div>

            {/* Content 300×389 bám mép phải (items-end + ml-auto) */}
            <div className="px-4">
              <div className="ml-auto w-[300px] h-[389px] flex flex-col justify-center items-end py-6 gap-2 relative">
                {/* Danh mục */}
                {NAV.map(({ label, to }) => {
                  const active = pathname === to;
                  return (
                    <NavLink
                      key={label}
                      to={to}
                      className="block w-full h-[56px] px-6 py-3 text-left"
                    >
                      {/* Frame 83×32: text + underline */}
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

                {/* Language row (theo Figma: ~300×53, padding 12/24/12/24) */}
                {/* Language row (theo Figma: icon 24x24 + VN + caret) */}
                <div className="w-full">
                  <div className="w-[300px] h-[53px] px-6 py-3 mx-auto">
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setLangOpen((v) => !v)}
                        className="flex items-center gap-2 text-[16px] leading-[22px] text-white/90 hover:text-white"
                        style={{ cursor: "pointer" }}
                      >
                        <img
                          src={
                            i18n.language?.startsWith("vi")
                              ? flagVN
                              : flagEN
                              ? flagEN
                              : flagCZ
                          }
                          alt="flag"
                          className="w-[24px] h-[24px] object-contain"
                        />
                        <span className="font-medium select-none">
                          {currentLang}
                        </span>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 20 20"
                          fill="none"
                          className="opacity-80"
                        >
                          <path
                            d="M5 7l5 6 5-6"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                        </svg>
                      </button>

                      {langOpen && (
                        <ul className="absolute left-0 mt-2 w-[160px] rounded-[10px] bg-[#142019] ring-1 ring-white/10 shadow-lg overflow-hidden z-10">
                          <li>
                            <button
                              className="w-full text-left px-3 py-2 hover:bg-white/5 flex items-center gap-2"
                              onClick={() => setLang("vi")}
                            >
                              <span className="text-lg">🇻🇳</span>
                              <span>Tiếng Việt</span>
                            </button>
                          </li>
                          <li>
                            <button
                              className="w-full text-left px-3 py-2 hover:bg-white/5 flex items-center gap-2"
                              onClick={() => setLang("en")}
                            >
                              <span className="text-lg">🇺🇸</span>
                              <span>English</span>
                            </button>
                          </li>

                          <li>
                            <button
                              className="w-full text-left px-3 py-2 hover:bg-white/5 flex items-center gap-2"
                              onClick={() => setLang("en")}
                            >
                              <span className="text-lg">🇺🇸</span>
                              <span>čeština</span>
                            </button>
                          </li>
                        </ul>
                      )}
                    </div>
                  </div>
                </div>

                {/* CTA trong khối content */}
                <div className="w-full px-2 pt-4 space-y-3">
                  <button className="w-full h-[44px] rounded-full bg-[#03B72A] text-white font-medium">
                    {t("auth.login") || "Đăng nhập"}
                  </button>
                  <button className="w-full h-[44px] rounded-full border border-white/20 text-white/90">
                    {t("auth.signup") || "Đăng ký"}
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}
