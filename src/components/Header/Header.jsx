import { useState } from "react";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../../assets/logo.png";
import viewport from "../../assets/vietpost.png";
import icon from "../../assets/icon-cart.png";
import headerRight from "../../assets/header-right.png";
import LanguageSwitcher from "../LanguageSwitcher";

export default function Header() {
  const { t } = useTranslation("common");

  const NAV = [
    { label: t("nav.home"), to: "/" },
    { label: t("nav.about"), to: "/about" },
    { label: t("nav.product"), to: "/product" },
    { label: t("nav.history"), to: "/history" },
    { label: t("nav.contact"), to: "/contact" },
  ];

  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const onDocClick = (e) => {
      if (openMenu && menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenu(false);
      }
    };
    const onKey = (e) => e.key === "Escape" && setOpenMenu(false);
    document.addEventListener("mousedown", onDocClick);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      window.removeEventListener("keydown", onKey);
    };
  }, [openMenu]);

  return (
    <header className="bg-[#020D07] z-[3]">
      <div className="container">
        {/* Header bar: Figma height = 84px */}
        <div className="h-[84px] flex items-center justify-between">
          {/* Logo (link về trang chủ) */}
          <div className="flex items-center shrink-0">
            <NavLink to="/">
              <img
                src={logo}
                alt="Logo"
                className="block h-[60px] w-auto object-contain relative top-[2px]"
              />
            </NavLink>
          </div>

          {/* Nav (desktop) */}
          <nav className="hidden lg:block">
            <ul className="flex justify-center items-center gap-[60px] xl:gap-[80px]">
              {NAV.map(({ label, to }) => {
                const [first, ...restArr] = label.split(" ");
                const rest = restArr.join(" ");
                return (
                  <li key={label}>
                    <NavLink
                      to={to}
                      end
                      className={({ isActive }) =>
                        `relative inline-flex items-baseline gap-1 text-[16px] leading-[20px] ${
                          isActive
                            ? "font-bold text-white"
                            : "font-medium text-white/90 hover:text-white"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <span
                            className={
                              "relative inline-block " +
                              (isActive
                                ? "after:content-[''] after:absolute after:left-0 after:top-full after:mt-[12px] after:block after:h-[4px] after:w-full after:rounded-full after:bg-[#03B72A]"
                                : "")
                            }
                          >
                            {first}
                          </span>
                          {rest && <span className="inline-block">{rest}</span>}
                        </>
                      )}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Cụm phải */}
          <div className="flex items-center justify-end gap-[24px]">
            {/* Email + dropdown (không bóng) */}
            <div className="relative" ref={menuRef}>
              <button
                type="button"
                className="hidden md:inline-flex items-center justify-center text-[14px] leading-[20px] text-white/90 rounded px-2
                           hover:bg-transparent focus:bg-transparent active:bg-transparent
                           shadow-none focus:shadow-none focus:outline-none focus:ring-0"
                aria-haspopup="menu"
                aria-expanded={openMenu}
                onClick={() => setOpenMenu((v) => !v)}
              >
                {t("account.email")}
                <img
                  src={headerRight}
                  alt="Dropdown"
                  className="ml-1 w-[12px] h-[12px] object-contain relative top-[1px]"
                />
              </button>

              {openMenu && (
                <div className="absolute right-0 top-full mt-2 w-[193px] rounded-[12px] bg-[#18261E] ring-1 ring-white/10 shadow-lg z-50">
                  <ul className="py-2 text-[14px] leading-[20px] text-white/90">
                    <li>
                      <a
                        href="#/account"
                        className="block px-3 py-2 hover:bg-white/5"
                      >
                        {t("account.profile")}
                      </a>
                    </li>
                    <li>
                      <a
                        href="#/account/store"
                        className="block px-3 py-2 hover:bg-white/5"
                      >
                        {t("account.store")}
                      </a>
                    </li>
                    <li>
                      <a
                        href="#/orders"
                        className="block px-3 py-2 hover:bg-white/5"
                      >
                        {t("account.orders")}
                      </a>
                    </li>
                    <li>
                      <a
                        href="#/events"
                        className="block px-3 py-2 hover:bg-white/5"
                      >
                        {t("account.events")}
                      </a>
                    </li>
                    <li>
                      <a
                        href="#/vouchers"
                        className="block px-3 py-2 hover:bg-white/5"
                      >
                        {t("account.vouchers")}
                      </a>
                    </li>
                    <li>
                      <a
                        href="#/change-password"
                        className="block px-3 py-2 hover:bg-white/5"
                      >
                        {t("account.password")}
                      </a>
                    </li>
                    <li className="mt-1 border-t border-white/10 pt-1">
                      <button className="w-full text-left px-3 py-2 text-red-500 hover:bg-white/5">
                        {t("account.logout")}
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Language switcher – remove hover bg/shadow/ring */}
            <div
              className="
                [&_button]:bg-transparent
                [&_button:hover]:bg-transparent
                [&_button:focus]:bg-transparent
                [&_button]:shadow-none
                [&_button]:ring-0
                [&_button]:outline-none

                [&_[role='button']]:bg-transparent
                [&_[role='button']:hover]:bg-transparent
                [&_[role='button']:focus]:bg-transparent
                [&_[role='button']]:shadow-none
                [&_[role='button']]:ring-0
                [&_[role='button']]:outline-none

                [&_*]:transition-none
              "
            >
              <LanguageSwitcher />
            </div>

            {/* Icons */}
            <img
              src={icon}
              alt="Giỏ hàng"
              className="block w-[25px] h-[24px]"
            />
            <img
              src={viewport}
              alt="avatar"
              className="block w-[32px] h-[32px] rounded-full"
            />

            {/* Nút menu mobile */}
            <button
              className="lg:hidden text-white ml-2"
              onClick={() => setOpenMenu(!openMenu)}
              aria-label="Toggle menu"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {openMenu && (
          <div className="lg:hidden mt-2 pb-4 border-t border-white/10">
            <ul className="flex flex-col gap-3 text-white/90 text-[16px]">
              {NAV.map(({ label, to }) => (
                <li key={label}>
                  <NavLink
                    to={to}
                    className="block py-1 hover:text-white"
                    onClick={() => setOpenMenu(false)}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
