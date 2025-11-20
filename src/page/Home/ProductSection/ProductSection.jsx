// src/page/Home/ProductSection.jsx
import { useState } from "react";
import heinekenImg1 from "../../../assets/image1.png";
import heinekenImg2 from "../../../assets/image-2.png";
import heinekenImg3 from "../../../assets/image-3.png";
import heinekenImg4 from "../../../assets/image-4.png";
import cart from "../../../assets/solar_cart-3-outline (1).png"

const TABS = [
    "Heineken",
    "Strongbow",
    "Desperados",
    "Zlatopramen",
    "Krušovice",
    "Starobrno",
    "Zlatý Bažant",
    "Ostatní",
];

const PRODUCTS = [
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
];

export default function ProductSection() {
    const [activeTab, setActiveTab] = useState("Heineken");

    return (
        <section className="border-b border-white/5 bg-[#020D07]">
            <div className="container px-4 xl:px-0 py-[72px] flex flex-col gap-9">
                {/* TITLE */}
                <h2 className="font-heading uppercase text-[#D7E4DD] tracking-[0.04em] text-[40px] md:text-[48px] xl:text-[64px]">
                    Sản phẩm của Heineken
                </h2>

                {/* TABS */}
                <div className="border-b border-white/10 overflow-x-auto scrollbar-none">
                    <div className="flex min-w-max">
                        {TABS.map((tab) => {
                            const isActive = tab === activeTab;
                            return (
                                <button
                                    key={tab}
                                    type="button"
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-6 py-3 text-[18px] md:text-[20px] font-gilroy whitespace-nowrap border-b-2 transition-colors ${isActive
                                            ? "border-[#14AE5C] text-[#17CC6C] font-bold"
                                            : "border-transparent text-white/60 font-medium hover:text-white"
                                        }`}
                                >
                                    {tab}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* PRODUCT LIST */}
                <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
                    {PRODUCTS.map((p) => (
                        <article
                            key={p.id}
                            className="flex flex-col gap-4"
                        >
                            {/* IMAGE */}
                            <div className="relative w-full h-[260px] md:h-[300px] xl:h-[336px] rounded-[22px] border border-[#496E5B]/0 overflow-hidden">
                                <img
                                    src={p.image}
                                    alt={p.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* TEXT + CART */}
                            <div className="flex items-end justify-between gap-4 pr-4">
                                <div className="flex flex-col gap-1">
                                    {/* Discount badge */}
                                    {p.discount && (
                                        <div className="inline-flex items-center justify-center px-4 py-2 rounded-[10px] bg-[#43110D] outline outline-1 outline-[#B42318] outline-offset-[-1px]">
                                            <span className="font-gilroy text-[15px] md:text-[17px] leading-5 text-white font-bold">
                                                {p.discount}%
                                            </span>
                                        </div>
                                    )}

                                    {/* Name */}
                                    <p className="font-gilroy text-[18px] md:text-[20px] leading-5 text-white/70 font-medium">
                                        {p.name}
                                    </p>

                                    {/* Prices */}
                                    <div className="flex items-baseline gap-1 font-gilroy text-[15px] md:text-[17px] leading-5">
                                        {p.oldPrice && (
                                            <span className="text-white/50 line-through font-normal">
                                                {p.oldPrice}
                                            </span>
                                        )}
                                        <span className="text-[#D7E4DD] font-bold">
                                            {p.price}
                                        </span>
                                    </div>
                                </div>

                                {/* Cart icon (đơn giản hoá) */}
                                <button
                                    type="button"
                                    className="relative w-10 h-10 rounded-full bg-[#18261E] flex items-center justify-center shrink-0 overflow-hidden"
                                >
                                    <img
                                        src={cart}
                                        alt="Cart Icon"
                                        className="w-15 h15 object-contain opacity-80 hover:opacity-100 transition"
                                    />
                                </button>

                            </div>
                        </article>
                    ))}
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