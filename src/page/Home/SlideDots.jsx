// src/page/Home/SlideDots.jsx
import { useEffect, useRef } from "react";

/**
 * SlideDots – thanh chuyển slide đúng layout Figma
 * - Tổng khung: 672x8, gap 20
 * - Mỗi thanh: 153x8
 * - Auto chạy, có thể click để đổi
 */
export default function SlideDots({
  count = 3,
  value = 0,
  onChange = () => {},
  auto = true,
  interval = 3000,
  accent = "#E3000F",
}) {
  const timerRef = useRef(null);

  useEffect(() => {
    if (!auto) return;
    clear();
    timerRef.current = setTimeout(() => {
      onChange((value + 1) % count);
    }, interval);
    return clear;
  }, [value, count, auto, interval]);

  const clear = () => timerRef.current && clearTimeout(timerRef.current);

  return (
    <div
      className="flex items-start"
      style={{
        width: 672,
        height: 8,
        gap: 20,
      }}
    >
      {Array.from({ length: count }).map((_, i) => {
        const active = i === value;
        return (
          <button
            key={i}
            onClick={() => onChange(i)}
            className="relative overflow-hidden rounded-full focus:outline-none"
            style={{
              width: 153,
              height: 8,
              background: "rgba(255,255,255,0.24)",
            }}
          >
            {active && (
              <span
                className="absolute left-0 top-0 h-full"
                style={{
                  background: accent,
                  borderRadius: 9999,
                  animation: "slideProgress linear forwards",
                  animationDuration: `${interval}ms`,
                  width: "0%",
                }}
              />
            )}
          </button>
        );
      })}

      <style>{`
        @keyframes slideProgress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
}
