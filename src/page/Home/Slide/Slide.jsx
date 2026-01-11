// src/page/Home/Slide.jsx
import { useEffect, useRef, useState } from "react";
import SlideDots from "./SlideDots";

import starBg from "../../../assets/Fav-Icon.png";
import heroImg from "../../../assets/Heineken-in-ice-bucket.png";
import slide2 from "../../../assets/slide.jpeg";
import slide3 from "../../../assets/slides.jpeg";


export default function Slide() {
  // ====== DATA SLIDE ======
  const baseSlides = [
    {
      id: 1,
      img: heroImg,
      title: "Heineken: Mở ra thế giới của bạn",
      kicker: "HƯƠNG VỊ ĐẾN TỪ AMSTERDAM",
      desc: "Heineken có một lịch sử phong phú bắt đầu từ năm 1864, được thành lập bởi Gerard Adriaan Heineken tại Amsterdam. Các giá trị của chúng tôi tập trung vào chất lượng, đổi mới và bền vững, đảm bảo rằng mỗi ngụm Heineken phản ánh cam kết của chúng tôi đối với sự xuất sắc.",
      // 3 dòng để ép wrap y hệt figma (tất cả đều màu xanh)
      customLines: ["Heineken: Mở", "ra thế giới của bạn"],
      kickerClass: "",
      titleClass: "text-[100px] leading-[95px]", // chỉnh to/nhỏ tại đây
      descClass: "font-desc text-[23px] leading-[22px]",
      imgBoxClass: "",
      imgClass: "",
      leftMaxW: "",
    },
    {
      id: 2,
      img: slide2,
      title: "Hương vị đẳng cấp thế giới trong tầm tay",
      kicker: "Sự sảng khoái với tinh thần ",
      desc: "Desperados Original là một loại đồ uống biểu tượng Sự kết hợp độc đáo giữa bia lager hơi có ga và rượu agave là lựa chọn tuyệt vời nhất cho mọi bữa tiệc, vừa sảng khoái vừa nhẹ nhàng. Mỗi ly mang đến bầu không khí tràn đầy năng lượng và niềm vui. Đây là thức uống gắn kết mọi người và biến mọi khoảnh khắc trở nên khó quên.",
      kickerClass: "",
      titleClass: "text-[100px] leading-[95px]",
      descClass: "font-desc text-[23px] leading-[22px]",
      imgBoxClass: "",
      imgClass: "",
      leftMaxW: "",
    },
    {
      id: 3,
      img: slide3,
      title: "Krušovice sự lựa chọn đúng đắn",
      kicker: "NIỀM TỰ HÀO HƠN MỘT THẾ KỶ",
      desc: "Krušovice là loại bia Séc chính gốc với truyền thống từ năm 1581. Mỗi ngụm bia kết hợp giữa lịch sử, chất lượng và hương vị độc đáo, làm hài lòng tất cả những ai yêu thích bia Séc thượng hạng. Dù bạn chọn Bohem Lager tươi mát, Royal Lager đậm đà hay Original truyền thống, bạn luôn có thể tin tưởng vào một cốc bia tuyệt vời.",
      kickerClass: "",
      titleClass: "text-[100px] leading-[95px]",
      descClass: "font-desc text-[23px] leading-[22px]",
      imgBoxClass: "",
      imgClass: "",
      leftMaxW: "",
    },
  ];

  // Clone hai đầu để loop mượt
  const slides = [
    baseSlides[baseSlides.length - 1],
    ...baseSlides,
    baseSlides[0],
  ];

  const [currentIdx, setCurrentIdx] = useState(1); // 1 = phần tử đầu thật
  const [isTransitioning, setIsTransitioning] = useState(true);

  const dotIndex = (currentIdx - 1 + baseSlides.length) % baseSlides.length;

  const interval = 6000;
  const timerRef = useRef(null);

  // đo width viewport để tính translate
  const viewportRef = useRef(null);
  const [viewportW, setViewportW] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (!viewportRef.current) return;
      setViewportW(viewportRef.current.clientWidth);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    clear();
    timerRef.current = setTimeout(() => {
      goTo(currentIdx + 1);
    }, interval);
    return clear;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIdx, interval, viewportW]);

  const clear = () => timerRef.current && clearTimeout(timerRef.current);

  const goTo = (idx) => {
    setIsTransitioning(true);
    setCurrentIdx(idx);
  };

  const onTransitionEnd = () => {
    if (currentIdx === slides.length - 1) {
      // clone cuối -> nhảy về 1
      setIsTransitioning(false);
      setCurrentIdx(1);
    } else if (currentIdx === 0) {
      // clone đầu -> nhảy về cuối thật
      setIsTransitioning(false);
      setCurrentIdx(slides.length - 2);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      const id = requestAnimationFrame(() => setIsTransitioning(true));
      return () => cancelAnimationFrame(id);
    }
  }, [isTransitioning]);

  // ====== CLASS BASE (áp cho tất cả slide) ======
  const kickerBase =
    "text-[32px] leading-[34px] uppercase font-extrabold text-[#D7E4DD]";
  const titleBase = "tracking-[-0.04em] font-extrabold text-[#03B72A]"; // size/line-height lấy từ titleClass
  const descBase = "text-[#D7E4DD] text-[24px] leading-[36px]";
  const imgBoxBase =
    "w-[672px] h-[672px] rounded-[22px] ring-1 ring-[#496E5B]/10";
  const leftMaxWBase = "max-w-[672px]";

  return (
    <section className="relative isolate overflow-hidden border-b border-white/5">
      {/* ⭐ Ngôi sao nền (tĩnh, như cũ) */}
      <img
        src={starBg}
        alt=""
        aria-hidden="true"
        className="hidden lg:block absolute left-0 -z-10 pointer-events-none select-none transform-gpu opacity-[0.8] rotate-[-0.05deg]"
        style={{ width: "clamp(420px, 30vw, 734px)", top: "10px" }}
      />

      {/* Viewport bao toàn slide */}
      <div className="container px-4 lg:px-0 py-[72px]">
        <div ref={viewportRef} className="relative overflow-hidden w-full">
          {/* Track */}
          <div
            className="flex"
            style={{
              width: viewportW ? slides.length * viewportW : undefined,
              transform: `translateX(-${viewportW * currentIdx}px)`,
              transition: isTransitioning ? "transform 600ms ease" : "none",
            }}
            onTransitionEnd={onTransitionEnd}
          >
            {slides.map((s, i) => {
              const rawTitle = s.title || "";
              const [titleGreen, titleWhite] = rawTitle.includes(":")
                ? [rawTitle.split(":")[0], rawTitle.split(":")[1]]
                : [rawTitle, ""];

              const hasCustomLines =
                Array.isArray(s.customLines) && s.customLines.length > 0;

              return (
                <div
                  key={`${s.id}-${i}`}
                  className="shrink-0"
                  style={{ width: viewportW || "100%" }}
                >
                  <div className="grid items-center gap-[32px] grid-cols-1 lg:grid-cols-[1fr_672px]">
                    {/* LEFT: dots + text */}
                    <div
                      className={`flex flex-col justify-center items-start gap-[40px] w-full ${leftMaxWBase}`}
                    >
                      <SlideDots
                        count={baseSlides.length}
                        value={dotIndex}
                        onChange={(dot) => goTo(dot + 1)}
                        interval={interval}
                        accent="#E3000F"
                      />

                      <p className={kickerBase}>{s.kicker}</p>

                      {/* TIÊU ĐỀ */}
                      {hasCustomLines ? (
                        // Slide 1 – ép 3 dòng, tất cả xanh, canh thẳng giống figma
                        <h1
                          className={`${titleBase} ${s.titleClass || "text-[100px] leading-[105px]"
                            }`}
                          style={{
                            textShadow: "0px 4px 40px rgba(19,189,57,0.5)",
                          }}
                        >
                          {s.customLines.map((line, lineIdx) => (
                            <span
                              key={lineIdx}
                              className="block text-[#03B72A]"
                            >
                              {line}
                            </span>
                          ))}
                        </h1>
                      ) : (
                        // Các slide 2,3 – dùng title bình thường
                        <h1
                          className={`${titleBase} ${s.titleClass || "text-[100px] leading-[105px]"
                            }`}
                          style={{
                            textShadow: "0px 4px 40px rgba(19,189,57,0.5)",
                          }}
                        >
                          {titleGreen}
                          {titleWhite ? ":" : ""}
                          {titleWhite && <br />}
                          {titleWhite && (
                            <span
                              className="text-white"
                              style={{ textShadow: "none" }}
                            >
                              {titleWhite}
                            </span>
                          )}
                        </h1>
                      )}

                      <p className={`${descBase} ${s.descClass}`}> {s.desc}</p>

                    </div>

                    {/* RIGHT: ảnh */}
                    <div className="flex justify-center lg:justify-end">
                      <div
                        className={`${imgBoxBase} relative overflow-hidden max-w-full`}
                      >
                        <img
                          src={s.img}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
