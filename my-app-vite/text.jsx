<header className="py-3 bg-[#020D07]">
      <div className="container">
        <div className="grid grid-cols-12 items-center">
          {/* Logo */}
          <div className="col-span-1">
            <img src={logo} alt="Logo" className="w-[100px] h-[50px]" />
          </div>

          {/* Nav */}
          <nav className="col-span-6">
            <ul className="flex justify-center items-center gap-[80px]">
              {NAV.map((it) => (
                <li key={it.label} className="relative">
                  <a
                    href={it.href}
                    className={`text-[16px] leading-[20px] ${
                      it.active
                        ? "font-bold text-white"
                        : "font-medium text-white/90 hover:text-white"
                    }`}
                  >
                    {it.label}
                  </a>
                  {it.active && (
                    <span className="absolute left-1/2 -translate-x-1/2 -bottom-[10px] block h-[4px] w-[28px] rounded-full bg-[#03B72A]" />
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Cụm phải */}
          <div className="col-span-5">
            <div className="flex items-center justify-end gap-[30px] h-[32px]">
              <span className="w-[168px] text-[14px] leading-[20px] text-white/90 text-center">
                nguyenvanA@gmail.com
              </span>

              <button className="flex items-center h-[24px] w-[141px] px-2 rounded hover:bg-white/5">
                <img
                  src="https://image.conooran.com/image/8448ec1092394e02b6b4d2227788d7f6.png"
                  alt="VN"
                  className="w-[30px] h-[20px] mr-2"
                />
                <span className="text-[14px] leading-[20px] text-white/90">
                  Tiếng Việt
                </span>
                <svg
                  className="ml-auto"
                  width="12"
                  height="12"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M5 7l5 5 5-5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </button>

              <img src={icon} alt="Giỏ hàng" className="w-[25px] h-[24px]" />
              <img
                src={viewport}
                alt="avatar"
                className="w-[33px] h-[32px] rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </header>




       // <header className="w-full bg-[#020D07]">
    //   {/* OUTER: 1440 + 32px hai bên */}
    //   <div className="mx-auto max-w-[1440px] px-8">
    //     {/* INNER: 1376 x 80, justify-content: space-between, top: 2px */}
    //     {/* NOTE: Nếu muốn TỔNG cao đúng 80px -> dùng h-[80px] và BỎ py-3.
    //              Nếu muốn theo Figma có padding-top/bottom 12px -> dùng py-3 và KHÔNG set h. */}
    //     <div className="mx-auto max-w-[1376px] relative top-[2px] flex items-center justify-between h-[80px]">
    //       {/* Logo (trái) */}
    //       <a href="/" className="shrink-0 min-w-[96px]">
    //         <img
    //           src={logo}
    //           alt="Logo"
    //           width={95}
    //           height={48}
    //           className="block h-auto"
    //         />
    //       </a>

    //       {/* NAV (giữa) */}
    //       <nav className="hidden md:flex flex-1 justify-center">
    //         <ul className="flex items-center gap-12 lg:gap-16 xl:gap-20">
    //           {NAV.map((it) => (
    //             <li key={it.label}>
    //               <a
    //                 href={it.href}
    //                 className="text-white/90 hover:text-white text-[18px] leading-tight"
    //               >
    //                 {it.label}
    //               </a>
    //             </li>
    //           ))}
    //         </ul>
    //       </nav>

    //       {/* Nhóm phải (phải) */}
    //       <div className="flex items-center justify-end gap-4 lg:gap-6 xl:gap-8 whitespace-nowrap">
    //         <div className="flex items-center justify-center w-[159px] h-5">
    //           <span className="font-[SVN-Gilroy] font-medium text-[14px] leading-5 text-white/90 text-center">
    //             nguyenvanA@gmail.com
    //           </span>
    //         </div>

    //         <button
    //           onClick={() => setOpenLang((v) => !v)}
    //           className="flex items-center h-6 w-[141.851px] px-2 rounded-[8px] hover:bg-white/5"
    //           aria-haspopup="menu"
    //           aria-expanded={openLang}
    //         >
    //           <img
    //             src="https://image.conooran.com/image/8448ec1092394e02b6b4d2227788d7f6.png"
    //             alt="VN"
    //             className="w-[30px] h-5 rounded mr-2"
    //           />
    //           <span className="font-[SVN-Gilroy] text-[14px] leading-5 text-white/90">
    //             Tiếng Việt
    //           </span>
    //           <svg
    //             className="ml-auto"
    //             width="12"
    //             height="12"
    //             viewBox="0 0 20 20"
    //             aria-hidden="true"
    //           >
    //             <path
    //               d="M5 7l5 5 5-5"
    //               fill="none"
    //               stroke="currentColor"
    //               strokeWidth="2"
    //             />
    //           </svg>
    //         </button>

    //         {/* icon placeholder */}
    //         {/* Giỏ hàng 25x24 (SVG tối giản) */}
    //         <div className="w-[25px] h-6 flex items-center justify-center">
    //           <img
    //             src={icon}
    //             alt="Giỏ hàng"
    //             className="w-[25px] h-[24px] object-contain"
    //           />
    //         </div>

    //         <img src={viewport} alt="avatar" className="w-8 h-8 rounded-full" />
    //       </div>
    //     </div>
    //   </div>
    // </header>






    // code mới 


    <header className="bg-[#020D07]">
  {/* Frame 1376 + padding 12 như Figma */}
  <div className="mx-auto max-w-[1376px] px-3">
    {/* Hàng 56px: h-14 */}
    <div className="grid grid-cols-[auto_1fr_430.21px] items-center h-14">
      {/* Logo */}
      <div>
        <img src={logo} alt="Logo" className="w-[95px] h-[48px]" />
      </div>

      {/* Nav (ở giữa), có khoảng đệm nhẹ tránh “dính” logo */}
      <nav className="pl-4">
        <ul className="flex items-center justify-center gap-[80px]">
          {NAV.map((it) => (
            <li key={it.label} className="relative leading-none">
              <a
                href={it.href}
                className={`inline-flex items-center h-5 text-[16px] leading-[20px] ${
                  it.active
                    ? "font-bold text-white"
                    : "font-medium text-white/90 hover:text-white"
                }`}
              >
                {it.label}
              </a>
              {it.active && (
                <span className="absolute left-1/2 -translate-x-1/2 -bottom-[10px] block h-[4px] w-[28px] rounded-full bg-[#03B72A]" />
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Cụm phải — fix đúng 430.21 × 32 + gap 30 */}
      <div className="w-[430.21px]">
        <div className="flex h-8 items-center justify-end gap-[30px]">
          <span className="w-[168px] text-center text-[14px] leading-[20px] text-white/90">
            nguyenvanA@gmail.com
          </span>

          <button className="flex h-[24px] w-[141px] items-center rounded px-2 hover:bg-white/5">
            <img
              src="https://image.conooran.com/image/8448ec1092394e02b6b4d2227788d7f6.png"
              alt="VN"
              className="mr-2 h-[20px] w-[30px]"
            />
            <span className="text-[14px] leading-[20px] text-white/90">
              Tiếng Việt
            </span>
            <svg className="ml-auto" width="12" height="12" viewBox="0 0 20 20">
              <path d="M5 7l5 5 5-5" stroke="currentColor" strokeWidth="2" />
            </svg>
          </button>

          <img src={icon} alt="Cart" className="h-[24px] w-[25px]" />
          <img src={viewport} alt="avatar" className="h-[32px] w-[33px] rounded-full" />
        </div>
      </div>
    </div>
  </div>
</header>
