// src/page/Home/ProductSection.jsx
import { useState } from "react";

import heinekenImg1 from "../../../assets/image1.png";
import heinekenImg2 from "../../../assets/image-2.png";
import heinekenImg3 from "../../../assets/image 3.357cae5270cc73852eb5.png";
import heinekenImg4 from "../../../assets/image-4.png";
import cart from "../../../assets/solar_cart-3-outline (1).png";

// Strongbow
import strong from "../../../assets/strong.jpg";
import StrongRed from "../../../assets/StrongRed.jpg";
import Strongbow from "../../../assets/Strongbow.jpg";
import StrongBow from "../../../assets/Strongbow-pink.jpg";
import strongyellow from "../../../assets/strongyellow.jpg";

// Desperados
import Desperados1 from "../../../assets/Desperados1.png";
import Desperados2 from "../../../assets/Desperados2.png";
import Desperados3 from "../../../assets/Desperados3.png";
import Desperados4 from "../../../assets/Desperados4.png";

// Krušovice
import krusovice1 from "../../../assets/krusovice1.png";
import krusovice2 from "../../../assets/krusovice2.png";
import Krusovice3 from "../../../assets/Krusovice3.png";
import krusovice4 from "../../../assets/krusovice4.png";

// Zlatopramen
import Zlatopramen1 from "../../../assets/Zlatopramen1.jpg";
import Zlatopramen2 from "../../../assets/Zlatopramen2.jpeg";
import Zlatopramen3 from "../../../assets/Zlatopramen3.jpg";
import Zlatopramen4 from "../../../assets/Zlatopramen4.jpeg";

// Starobrno
import Starobrno1 from "../../../assets/Starobrno1.jpg";
import Starobrno2 from "../../../assets/Starobrno2.jpg";
import Starobrno3 from "../../../assets/Starobrno3.jpg";
import Starobrno4 from "../../../assets/Starobrno4.jpg";

// Zlatý Bažant
import bažant1 from "../../../assets/zlatý-bažant1.jpg";
import bažant2 from "../../../assets/zlatý-bažant2.jpg";
import bažant3 from "../../../assets/zlatý-bažant3.jpg";
import bažant4 from "../../../assets/zlatý-bažant4.jpg";

const PRODUCT_BY_BRAND = {
  Heineken: [
    {
      id: 1,
      name: "Heineken Original",
      image: heinekenImg1,
      discount: 10,
      oldPrice: "17.99 Kč",
      price: "15.99 Kč",
    },
    {
      id: 2,
      name: "Heineken 0.0",
      image: heinekenImg2,
      price: "17.99 Kč",
    },
    {
      id: 3,
      name: "Heineken Silver",
      image: heinekenImg3,
      price: "17.99 Kč",
    },
    {
      id: 4,
      name: "Heineken Light",
      image: heinekenImg4,
      price: "17.99 Kč",
    },
  ],

  Strongbow: [
    {
      id: 1,
      name: "Strongbow Dark Fruit Cider",
      image: strong,
      oldPrice: "19.99 Kč",
      price: "17.99 Kč",
    },
    {
      id: 2,
      name: "Strongbow Gold Apple",
      image: StrongRed,
      price: "18.99 Kč",
      discount: 10,
    },
    {
      id: 3,
      name: "Strongbow Red Berries",
      image: Strongbow,
      price: "18.99 Kč",
    },
    {
      id: 4,
      name: "Strongbow Elderflower",
      image: strongyellow,
      price: "18.99 Kč",
    },
  ],

  Desperados: [
    {
      id: 1,
      name: "Desperados Original",
      image: Desperados1,
      oldPrice: "24.99 Kč",
      price: "22.49 Kč",
    },
    {
      id: 2,
      name: "Desperados Original",
      image: Desperados2,
      price: "22.99 Kč",
    },
    {
      id: 3,
      name: "Desperados Mojito",
      image: Desperados3,
      price: "22.99 Kč",
    },
    {
      id: 4,
      name: "Desperados Red",
      image: Desperados4,
      price: "22.99 Kč",
    },
  ],

  Zlatopramen: [
    {
      id: 1,
      name: "Zlatopramen Světlý",
      image: Zlatopramen1,
      oldPrice: "15.99 Kč",
      price: "13.99 Kč",
    },
    {
      id: 2,
      name: "Zlatopramen 11°",
      image: Zlatopramen2,
      price: "14.99 Kč",
    },
    {
      id: 3,
      name: "Zlatopramen Nealko",
      image: Zlatopramen3,
      price: "13.99 Kč",
    },
    {
      id: 4,
      name: "Zlatopramen Radler",
      image: Zlatopramen4,
      price: "14.49 Kč",
      discount: 10,
    },
  ],

  Krušovice: [
    {
      id: 1,
      name: "Krušovice Královské Černé",
      image: krusovice1,
      oldPrice: "19.99 Kč",
      price: "17.99 Kč",
    },
    {
      id: 2,
      name: "Krušovice Královský Ležák",
      image: krusovice2,
      price: "17.99 Kč",
    },
    {
      id: 3,
      name: "Krušovice Bohém",
      image: Krusovice3,
      price: "18.49 Kč",
    },
    {
      id: 4,
      name: "Krušovice Královský Originál",
      image: krusovice4,
      price: "17.49 Kč",
    },
  ],

  Starobrno: [
    {
      id: 1,
      name: "Starobrno Medium",
      image: Starobrno1,
      oldPrice: "18.99 Kč",
      price: "16.99 Kč",
    },
    {
      id: 2,
      name: "Starobrno Štatl",
      image: Starobrno2,
      price: "17.99 Kč",
    },
    {
      id: 3,
      name: "Starobrno Bitr",
      image: Starobrno3,
      price: "16.99 Kč",
      discount: 10,
    },
    {
      id: 4,
      name: "Starobrno Drak",
      image: Starobrno4,
      price: "18.49 Kč",
      discount: 10,
    },
  ],

  "Zlatý Bažant": [
    {
      id: 1,
      name: "Zlatý Bažant 12°",
      image: bažant1,
      oldPrice: "19.49 Kč",
      price: "17.49 Kč",
    },
    {
      id: 2,
      name: "Zlatý Bažant 10°",
      image: bažant2,
      price: "17.49 Kč",
    },
    {
      id: 3,
      name: "Zlatý Bažant Radler Lemon",
      image: bažant3,
      discount: 10,
      price: "18.49 Kč",
    },
    {
      id: 4,
      name: "Zlatý Bažant Nealko",
      image: bažant4,
      price: "16.99 Kč",
    },
  ],

  "Lišácké jablko": [
    {
      id: 1,
      name: "Bia đặc biệt 01",
      image: heinekenImg1,
      discount: 10,
      oldPrice: "21.99 Kč",
      price: "19.79 Kč",
    },
    {
      id: 2,
      name: "Bia đặc biệt 02",
      image: heinekenImg2,
      price: "19.99 Kč",
      discount: 10,
    },
    {
      id: 3,
      name: "Bia đặc biệt 03",
      image: heinekenImg3,
      price: "19.99 Kč",
    },
    {
      id: 4,
      name: "Bia đặc biệt 04",
      image: heinekenImg4,
      price: "19.99 Kč",
      discount: 10,
    },
  ],
};

// Sinh TABS từ data → không lo lệch
const TABS = Object.keys(PRODUCT_BY_BRAND);

export default function ProductSection() {
  const [activeTab, setActiveTab] = useState("Heineken");

  const handleOpenDetail = (product) => {
    console.log("Go to product detail:", product.id, product.name);
  };

  const handleAddToCart = (product, e) => {
    e.stopPropagation();
    console.log("Add to cart:", product.id, product.name);
  };

  const goToPrevTab = () => {
    const currentIndex = TABS.indexOf(activeTab);
    if (currentIndex === -1) return;
    const prevIndex = (currentIndex - 1 + TABS.length) % TABS.length;
    setActiveTab(TABS[prevIndex]);
  };

  const goToNextTab = () => {
    const currentIndex = TABS.indexOf(activeTab);
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + 1) % TABS.length;
    setActiveTab(TABS[nextIndex]);
  };

  const products = PRODUCT_BY_BRAND[activeTab] || PRODUCT_BY_BRAND.Heineken;

  return (
    <section className="border-b border-white/5 bg-zinc-950">
      <div className="container px-4 xl:px-0 py-16 flex flex-col gap-9">
        {/* TITLE – có thể để static như Figma hoặc dynamic */}
        <h2 className="self-stretch text-neutral-200 text-6xl font-normal font-heading uppercase tracking-[2.56px]">
          Sản phẩm của {activeTab}
        </h2>

        {/* TABS – layout bám sát Figma */}
        <div className="self-stretch border-b border-gray-400/20 flex justify-center items-center overflow-x-auto scrollbar-none">
          <div className="inline-flex min-w-max">
            {TABS.map((tab) => {
              const isActive = tab === activeTab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`
                    px-6 py-3 flex justify-center items-center gap-2
                    border-b
                    ${isActive ? "border-green-600" : "border-transparent"}
                  `}
                >
                  <span
                    className={
                      isActive
                        ? "text-green-500 text-xl font-bold font-gilroy leading-5"
                        : "text-neutral-200/60 text-xl font-medium font-gilroy leading-5"
                    }
                  >
                    {tab}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* PRODUCT LIST */}
        <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((p) => (
            <article
              key={`${activeTab}-${p.id}`}
              className="flex flex-col gap-4"
            >
              {/* IMAGE */}
              <div
                className="relative w-full h-[260px] md:h-[300px] xl:h-80
                           rounded-3xl border border-gray-600/0 overflow-hidden
                           cursor-pointer group"
                onClick={() => handleOpenDetail(p)}
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                />
              </div>

              {/* TEXT + CART */}
              <div className="self-stretch pr-4 flex items-end justify-between gap-4">
                <div
                  className="inline-flex flex-col justify-start items-start gap-1 cursor-pointer"
                  onClick={() => handleOpenDetail(p)}
                >
                  {/* Discount badge (nếu có) */}
                  <div className="h-[36px] mb-1 flex items-center">
                    {p.discount && (
                      <div className="px-4 py-2 bg-orange-950 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-red-700 inline-flex justify-center items-center gap-2.5">
                        <span className="text-white text-base font-bold font-gilroy leading-5">
                          {p.discount}%
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Name */}
                  <p className="text-white/70 text-xl font-medium font-gilroy leading-5 line-clamp-1">
                    {p.name}
                  </p>

                  {/* Prices */}
                  <div className="self-stretch inline-flex justify-start items-start gap-1">
                    {p.oldPrice && (
                      <span className="text-neutral-200/50 text-base font-normal font-gilroy line-through leading-5 line-clamp-2">
                        {p.oldPrice}
                      </span>
                    )}
                    <span className="text-neutral-200 text-base font-bold font-gilroy leading-5 line-clamp-2">
                      {p.price}
                    </span>
                  </div>
                </div>

                {/* Cart Icon */}
                <button
                  type="button"
                  onClick={(e) => handleAddToCart(p, e)}
                  className="w-10 h-10 relative bg-zinc-900 rounded-[58px] overflow-hidden flex items-center justify-center hover:bg-zinc-800 transition"
                >
                  <img
                    src={cart}
                    alt="Cart Icon"
                    className="w-10 h-10 object-contain opacity-80 hover:opacity-100 transition"
                  />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* PREV / NEXT */}
        <div className="self-stretch h-14 flex justify-end items-center gap-4 pt-6">
          <button
            type="button"
            onClick={goToPrevTab}
            aria-label="Previous brand"
            className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center"
          >
            <span className="text-white/60 text-2xl leading-none -translate-x-[1px]">
              ‹
            </span>
          </button>

          <button
            type="button"
            onClick={goToNextTab}
            aria-label="Next brand"
            className="w-14 h-14 rounded-full border border-white/60 flex items-center justify-center"
          >
            <span className="text-white/90 text-2xl leading-none translate-x-[1px]">
              ›
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}



// Trong Figma, họ dựng UI bằng div tĩnh vì Figma chỉ là công cụ thiết kế, nó không có logic.

// Ví dụ designer kéo ra 8 cái tab → họ bắt buộc phải dùng 8 cái <div>.

// Nhưng khi qua code không ai viết vậy cả, vì:

// không tái sử dụng được

// hardcode → sửa 1 cái phải sửa 8 nơi

// không có active tab

// không thể map để tạo logic

// khó làm responsive

// khó maintain khi khách hàng đổi content
// viết bằng <div> thủ công:
// → Muốn highlight tab active? Phải viết logic cho từng cái.

// → Muốn reorder tab? Sửa 8 dòng.

// → Muốn thêm tab mới? Sửa 8 dòng code + thêm logic.

// → Muốn dịch sang tiếng Anh? Toang luôn.
//tạo mảng để:
// ✔ Tạo tab tự động bằng .map()

// Chỉ cần 1 dòng:

// {TABS.map(...)} 

// ✔ Làm active tab cực dễ
// const [activeTab, setActiveTab] = useState("Heineken");

// ✔ Thay đổi nội dung cực nhanh

// Designer đổi thứ tự tab → bạn chỉ sửa 1 mảng.

// ✔ Dễ thêm multi-language (EN / VI / CZ sau này)

// Chỉ đổi mảng là xong.

// ✔ Cách này đúng chuẩn industry

// Tất cả các công ty đều viết như vậy.