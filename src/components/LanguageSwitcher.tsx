// src/components/LanguageSwitcher.jsx
import { useEffect, useRef, useState } from "react";
import i18n from "../i18n";

import vnFlag from "../assets/image-38.png";
import csFlag from "../assets/czech.png";
import gbFlag from "../assets/uk.png";

const MAP = {
  vi: { labelKey: "lang.vi", flag: vnFlag },
  cs: { labelKey: "lang.cs", flag: csFlag },
  en: { labelKey: "lang.en", flag: gbFlag },
};

export default function LanguageSwitcher() {
  const norm = (code) => (code ?? "vi").split("-")[0];
  const [open, setOpen] = useState(false);
  const [lng, setLng] = useState(norm(i18n.language));
  const ref = useRef(null);

  // click outside + ESC
  useEffect(() => {
    const onClick = (e) => {
      if (open && ref.current && !ref.current.contains(e.target))
        setOpen(false);
    };
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const t = (k) => i18n.t(k);
  const change = async (code) => {
    if (code === lng) return;
    await i18n.changeLanguage(code);
    setLng(code);
    setOpen(false);
  };

  const cur = MAP[lng] || MAP.vi;

  return (
    <div className="relative z-50" ref={ref}>
      {/* Nút chính */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center px-2 w-[141.85px] h-6 rounded-lg 
             hover:bg-[#05150b] hover:text-white
             focus:outline-none focus-visible:ring-2 focus-visible:ring-[#03B72A]/60
             justify-between gap-2"
      >
        <div className="flex items-center gap-2">
          <img
            src={cur.flag}
            alt=""
            className="w-[29.85px] h-5 rounded-[4px] object-cover"
          />
          <span className="text-[14px] text-white/90 font-medium leading-none whitespace-nowrap">
            {t(cur.labelKey)}
          </span>
        </div>
        <svg
          width="12"
          height="12"
          viewBox="0 0 20 20"
          aria-hidden="true"
          className={`opacity-80 transition-transform duration-200 
                ${open ? "rotate-180" : "rotate-0"}`}
        >
          <path
            d="M5 7l5 5 5-5"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </button>

      {/* Dropdown rộng hơn, hover có thanh xanh */}
      <div
        className={`absolute left-0 top-full mt-2 min-w-[200px]
                    rounded-xl bg-[#18261E] ring-1 ring-white/10 shadow-xl
                    transition origin-top-left
                    ${
                      open
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95 pointer-events-none"
                    }`}
        role="listbox"
      >
        <ul className="py-2 px-2">
          {Object.keys(MAP).map((code) => {
            const active = lng === code;
            return (
              <li key={code}>
                <button
                  type="button"
                  onClick={() => change(code)}
                  role="option"
                  aria-selected={active}
                  className={`w-full -mx-2 h-9 px-3 rounded-lg transition-colors
                              ${
                                active
                                  ? "bg-[#0F3B21] text-white"
                                  : "text-white/90 hover:bg-[#0F3B21] hover:text-white"
                              }`}
                >
                  <div className="grid grid-cols-[29.85px,1fr] items-center gap-2 h-full">
                    <img
                      src={MAP[code].flag}
                      alt=""
                      className="w-[29.85px] h-5 rounded-[4px] object-cover shrink-0"
                    />
                    <span
                      className={`text-[14px] leading-none ${
                        active ? "font-semibold" : ""
                      }`}
                    >
                      {t(MAP[code].labelKey)}
                    </span>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
