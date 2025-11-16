// // src/page/Home/Home.jsx
// import { useState } from "react";
// import SlideDots from "./SlideDots";
// import heroImg from "../../assets/Heineken-in-ice-bucket .png";
// import Img from "../../assets/slide.jpeg";
// import ImgSlide from "../../assets/slides.jpeg";
// import starBg from "../../assets/Fav-Icon.png";

// export default function Home() {
//   const slides = [
//     { id: 1, img: heroImg, title: "Heineken: Mở ra thế giới của bạn" },
//     { id: 2, img: Img, title: "Hương vị từ Amsterdam" },
//     { id: 3, img: ImgSlide, title: "Chất lượng & bền vững" },
//   ];

//   const [idx, setIdx] = useState(0);

//   return (
//     <main className="bg-[#020D07] text-white">
//       <section className="relative isolate overflow-hidden border-b border-white/5">
//         {/* star nền bên trái */}
//         <img
//           src={starBg}
//           alt=""
//           aria-hidden="true"
//           className="hidden lg:block absolute left-0 -z-10 pointer-events-none select-none transform-gpu opacity-[0.8] rotate-[-0.05deg]"
//           style={{ width: "clamp(420px, 30vw, 734px)", top: "10px" }}
//         />

//         <div className="container px-4 lg:px-0 py-[72px]">
//           <div className="grid items-center gap-8 lg:gap-[32px] grid-cols-1 lg:grid-cols-[1fr_672px]">
//             {/* left text */}
//             <div className="max-w-[560px]">
//               {/* thay cụm 3 dấu thành SlideDots */}
//               <SlideDots
//                 count={slides.length}
//                 value={idx}
//                 onChange={setIdx}
//                 interval={9500}
//                 runnerWidth={24}
//                 color="#E3000F" // hoặc #03B72A nếu muốn xanh
//               />

//               <h1
//                 className="mt-6 mb-4 text-[64px] leading-[72px] font-extrabold text-[#03B72A]"
//                 style={{
//                   textShadow:
//                     "0 0 16px rgba(3,183,42,0.45), 0 0 32px rgba(3,183,42,0.25)",
//                 }}
//               >
//                 {slides[idx].title.split(":")[0]}:
//                 <br />
//                 <span className="text-white" style={{ textShadow: "none" }}>
//                   {slides[idx].title.split(":")[1] || ""}
//                 </span>
//               </h1>

//               <p className="text-[16px] leading-[26px] text-white/80">
//                 hero.desc
//               </p>
//             </div>

//             {/* right image */}
//             <div className="flex justify-center lg:justify-end">
//               <img
//                 src={slides[idx].img}
//                 alt="Heineken bucket"
//                 className="w-[672px] h-[672px] object-cover rounded-[22px] ring-1 ring-[#496E5B]/10"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// src/page/Home/Home.jsx
import Slide from "./Slide"; // import phần slide đầu trang

export default function Home() {
  return (
    <main className="bg-[#020D07] text-white">
      {/* === Slide đầu trang (Hero Section) === */}
      <Slide />

      {/* === Các phần khác của trang Home (thêm sau) === */}
      {/* <ProductSection /> */}
      {/* <VideoSection /> */}
      {/* <FooterSection /> */}
    </main>
  );
}
