// src/components/Header/HeaderMobile.jsx
import flagVN from "../../assets/image-38.png";
import flagEN from "../../assets/uk.png";
import flagCZ from "../../assets/czech.png";

import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import logo from "../../assets/logoken.png";

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

  // Đóng khi click ngoài / ESC
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

  // Đổi ngôn ngữ (hỗ trợ cả 'cs' và 'cz' – i18n thường dùng 'cs')
  const setLang = (lng) => {
    const code = lng === "cz" ? "cs" : lng;
    i18n.changeLanguage(code);
    setLangOpen(false);
  };

  // Đóng drawer khi đổi route
  useEffect(() => {
    setOpen(false);
    setLangOpen(false);
  }, [pathname]);

  // Phát hiện ngôn ngữ hiện tại
  const isVI = i18n.language?.startsWith("vi");
  const isCS =
    i18n.language?.startsWith("cs") || i18n.language?.startsWith("cz");
  const currentLang = isVI ? "VN" : isCS ? "CZ" : "EN";
  const currentFlagSrc = isVI ? flagVN : isCS ? flagCZ : flagEN;

  return (
    <header className="bg-[#020D07] z-[3] lg:hidden border-b border-[#0E1A13]">
      <div className="container px-4">
        {/* Thanh header (72px) */}
        <div className="h-[72px] flex items-center justify-between">
          <NavLink to="/" className="flex items-center">
            <img
              src={logo}
              alt="Heineken"
              className="block w-[63px] h-[32px] object-contain"
            />
          </NavLink>

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
          {/* Panel */}
          <aside
            ref={panelRef}
            className="absolute right-0 top-0 h-full w-[85%] max-w-[343px] bg-[#0A160F] text-white shadow-xl flex flex-col"
          >
            {/* Header trong panel */}
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

            {/* ===== BODY (khung Content 300×389) ===== */}
            <div className="flex-1 overflow-y-auto px-4">
              <div className="ml-auto w-[300px] h-[389px] flex flex-col justify-center items-end py-6 gap-2">
                {/* Nav items + underline theo ĐỘ DÀI TỪ ĐẦU TIÊN */}
                {NAV.map(({ label, to }) => {
                  const active = pathname === to;
                  const [first, ...restArr] = label.split(" ");
                  const rest = restArr.join(" ");
                  return (
                    <NavLink
                      key={label}
                      to={to}
                      className="block w-full h-[56px] px-6 py-3 text-left"
                      onClick={() => {
                        setOpen(false);
                        setLangOpen(false);
                      }}
                    >
                      <div className="h-[32px] flex items-center gap-1">
                        {/* từ đầu tiên: underline bám đúng chiều rộng chữ */}
                        <span
                          className={
                            "inline-block relative leading-[22px] text-[16px] font-medium " +
                            (active
                              ? "after:content-[''] after:absolute after:left-0 after:top-full after:mt-2 after:block after:h-[4px] after:w-full after:rounded-full after:bg-[#03B72A]"
                              : "")
                          }
                        >
                          {first}
                        </span>
                        {/* các từ còn lại (không ảnh hưởng underline) */}
                        {rest && (
                          <span className="leading-[22px] text-[16px] font-medium">
                            {rest}
                          </span>
                        )}
                      </div>
                    </NavLink>
                  );
                })}

                {/* Dòng chọn ngôn ngữ (trong khung Content) */}
                <div className="w-full px-6 py-3">
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setLangOpen((v) => !v)}
                      className="flex items-center gap-2 text-[16px] leading-[22px] text-white/90 hover:text-white"
                    >
                      <img
                        src={currentFlagSrc}
                        alt={currentLang}
                        className="w-[24px] h-[24px] object-contain"
                      />
                      <span className="font-medium">{currentLang}</span>
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
                      <ul className="absolute left-0 mt-2 w-[170px] rounded-[10px] bg-[#142019] ring-1 ring-white/10 shadow-lg overflow-hidden z-10">
                        <li>
                          <button
                            className="w-full text-left px-3 py-2 hover:bg-white/5 flex items-center gap-2"
                            onClick={() => setLang("vi")}
                          >
                            <img
                              src={flagVN}
                              alt="VN"
                              className="w-[18px] h-[18px]"
                            />
                            <span>Tiếng Việt</span>
                          </button>
                        </li>
                        <li>
                          <button
                            className="w-full text-left px-3 py-2 hover:bg-white/5 flex items-center gap-2"
                            onClick={() => setLang("en")}
                          >
                            <img
                              src={flagEN}
                              alt="EN"
                              className="w-[18px] h-[18px]"
                            />
                            <span>English</span>
                          </button>
                        </li>
                        <li>
                          <button
                            className="w-full text-left px-3 py-2 hover:bg-white/5 flex items-center gap-2"
                            onClick={() => setLang("cs")} // dùng mã 'cs' cho Séc
                          >
                            <img
                              src={flagCZ}
                              alt="CZ"
                              className="w-[18px] h-[18px]"
                            />
                            <span>Čeština</span>
                          </button>
                        </li>
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* ===== FOOTER CTA (KHUNG RIÊNG, ngoài Content) ===== */}
            <div className="px-4 pb-6">
              <button className="w-full h-[44px] rounded-full bg-[#03B72A] text-white font-medium">
                {t("auth.login") || "Đăng nhập"}
              </button>
              <button className="w-full h-[44px] rounded-full mt-3 border border-white/20 text-white/90">
                {t("auth.signup") || "Đăng ký"}
              </button>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}
