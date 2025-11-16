import HeaderDesktop from "./Header";
import HeaderMobile from "./HeaderMobile";

export default function HeaderRoot() {
  return (
    <>
      <div className="hidden lg:block">
        <HeaderDesktop />
      </div>
      <div className="lg:hidden">
        <HeaderMobile />
      </div>
    </>
  );
}
