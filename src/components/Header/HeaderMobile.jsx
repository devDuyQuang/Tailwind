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

  // ── Config ngôn ngữ ở 1 nơi ─────────────────────────────
  const LANGS = {
    vi: { code: "vi", short: "VN", label: "Tiếng Việt", flag: flagVN },
    en: { code: "en", short: "EN", label: "English", flag: flagEN },
    cs: { code: "cs", short: "CZ", label: "Čeština", flag: flagCZ }, // Czech
  };

  // Chuẩn hoá code hiện tại (nhận cả 'cz' → 'cs')
  const raw = i18n.language || "vi";
  const curCode = raw.startsWith("vi")
    ? "vi"
    : raw.startsWith("cs") || raw.startsWith("cz")
    ? "cs"
    : "en";
  const current = LANGS[curCode];

  const setLang = (lng) => {
    const code = lng === "cz" ? "cs" : lng;
    i18n.changeLanguage(code);
    setLangOpen(false);
  };

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

  // Đổi route thì đóng panel
  useEffect(() => {
    setOpen(false);
    setLangOpen(false);
  }, [pathname]);

  return (
    <header className="bg-[#020D07] z-[3] lg:hidden border-b border-[#0E1A13]">
      <div className="container px-4">
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

      {open && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => {
              setOpen(false);
              setLangOpen(false);
            }}
          />
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

            {/* BODY: bám trái, không dùng transform → không vỡ layout */}
            <div className="flex-1 overflow-y-auto px-4">
              <div className="w-full max-w-[300px] h-[389px] flex flex-col justify-center items-start py-6 gap-2">
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
                        {rest && (
                          <span className="leading-[22px] text-[16px] font-medium">
                            {rest}
                          </span>
                        )}
                      </div>
                    </NavLink>
                  );
                })}

                {/* Language row (chỉ hiện NGÔN NGỮ KHÁC) */}
                <div className="w-full px-6 py-3">
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setLangOpen((v) => !v)}
                      className="flex items-center gap-2 text-[16px] leading-[22px] text-white/90 hover:text-white"
                    >
                      <img
                        src={current.flag}
                        alt={current.short}
                        className="w-[24px] h-[24px] object-cover rounded-full border border-white/10"
                      />
                      <span className="font-medium">{current.short}</span>
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
                        {Object.values(LANGS)
                          .filter((lng) => lng.code !== current.code)
                          .map((lng) => (
                            <li key={lng.code}>
                              <button
                                className="w-full text-left px-3 py-2 hover:bg-white/5 flex items-center gap-2"
                                onClick={() => setLang(lng.code)}
                              >
                                <img
                                  src={lng.flag}
                                  alt={lng.short}
                                  className="w-[18px] h-[18px] object-cover rounded-full border border-white/10"
                                />
                                <span>{lng.label}</span>
                              </button>
                            </li>
                          ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* FOOTER CTA – khung riêng, không dính BODY */}
            <div className="px-4 pb-6">
              <button className="w-full h-[44px] rounded-full bg-[#03B72A] text-white font-medium">
                {t("Đăng nhập") || "Đăng nhập"}
              </button>
              <button className="w-full h-[44px] rounded-full mt-3 border border-white/20 text-white/90">
                {t("Đăng Ký") || "Đăng ký"}
              </button>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}
