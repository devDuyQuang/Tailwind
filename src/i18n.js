// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  vi: {
    common: {
      nav: {
        home: "Trang chủ",
        about: "Giới thiệu",
        product: "Sản phẩm",
        history: "Lịch sử",
        contact: "Liên hệ",
      },
      lang: { vi: "Tiếng Việt", cs: "Česky", en: "English" },
      account: {
        email: "nguyenvanA@gmail.com",
        profile: "Thông tin tài khoản",
        store: "Thông tin cửa hàng",
        orders: "Lịch sử đặt hàng",
        events: "Sự kiện đang diễn ra",
        vouchers: "Voucher của tôi",
        password: "Đổi mật khẩu",
        logout: "Đăng xuất",
      },
    },
  },
  cs: {
    common: {
      nav: {
        home: "Domů",
        about: "O nás",
        product: "Produkty",
        history: "Historie",
        contact: "Kontakt",
      },
      lang: { vi: "Vietnamština", cs: "Česky", en: "Angličtina" },
      account: {
        email: "nguyenvanA@gmail.com",
        profile: "Účet",
        store: "Informace o obchodě",
        orders: "Historie objednávek",
        events: "Probíhající akce",
        vouchers: "Moje kupóny",
        password: "Změnit heslo",
        logout: "Odhlásit se",
      },
    },
  },
  en: {
    common: {
      nav: {
        home: "Home",
        about: "About",
        product: "Products",
        history: "History",
        contact: "Contact",
      },
      lang: { vi: "Vietnamese", cs: "Czech", en: "English" },
      account: {
        email: "nguyenvanA@gmail.com",
        profile: "Account info",
        store: "Store info",
        orders: "Order history",
        events: "Ongoing events",
        vouchers: "My vouchers",
        password: "Change password",
        logout: "Log out",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("i18n_lng") || "vi",
  fallbackLng: "vi",
  supportedLngs: ["vi", "cs", "en"],
  ns: ["common"],
  defaultNS: "common",
  interpolation: { escapeValue: false },
});

i18n.on("languageChanged", (lng) => {
  localStorage.setItem("i18n_lng", lng);
  document.documentElement.setAttribute("lang", lng);
});

export default i18n;
