// src/components/Main/Hero.jsx
import { useTranslation } from "react-i18next";
import heroImg from "../../assets/hero-bucket.jpg";

export default function Home() {
  const { t } = useTranslation("common");

  return (
    <section
      className="relative isolate bg-[#020D07] border-b border-white/5"
      style={{ paddingTop: "72px", paddingBottom: "72px" }}
    >
      <div className="container mx-auto max-w-[1376px] px-4 flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-[32px]">
        {/* LEFT COLUMN */}
        <div className="flex-1 order-2 lg:order-1 text-white max-w-[560px]">
          {/* Slider indicator (3 chấm chạy qua lại) */}
          <div className="flex items-center gap-2 mb-6">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`block rounded-full transition-all duration-300 ${
                  i === 0
                    ? "w-[24px] h-[6px] bg-[#03B72A]"
                    : "w-[6px] h-[6px] bg-white/30 hover:bg-white/50"
                }`}
              ></span>
            ))}
          </div>

          {/* Sub heading */}
          <p className="text-[14px] tracking-[0.2em] uppercase text-white/70 mb-3">
            {t("hero.kicker") || "HƯƠNG VỊ ĐẾN TỪ AMSTERDAM"}
          </p>

          {/* Main heading */}
          <h1 className="text-[48px] leading-[56px] font-extrabold text-[#03B72A] mb-4">
            Heineken: <br />
            <span className="text-white">Mở ra thế giới của bạn</span>
          </h1>

          {/* Description */}
          <p className="text-[16px] leading-[26px] text-white/80">
            {t("hero.desc") ||
              "Heineken có một lịch sử phong phú bắt đầu từ năm 1864, được thành lập bởi Gerard Adriaan Heineken tại Amsterdam. Các giá trị của chúng tôi tập trung vào chất lượng, đổi mới và bền vững, đảm bảo rằng mỗi ngụm Heineken phản ánh cam kết của chúng tôi đối với sự xuất sắc."}
          </p>
        </div>

        {/* RIGHT COLUMN: image */}
        <div className="flex-1 order-1 lg:order-2 flex justify-center lg:justify-end">
          <img
            src={heroImg}
            alt="Heineken bucket"
            className="w-[672px] h-[672px] object-cover rounded-[22px] ring-1 ring-[#496E5B]/10"
          />
        </div>
      </div>
    </section>
  );
}
