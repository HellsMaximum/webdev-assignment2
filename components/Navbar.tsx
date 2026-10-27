import { palette } from "@/data/colorPalette";

const Navbar = () => {
  return (
    <header className={`${palette.headerBg} border-b ${palette.divider}`}>
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className={`text-lg font-bold ${palette.heading}`}>Unit Converter</h1>
        <span
          className={`text-xs font-semibold ${palette.badgeText} ${palette.badgeBg} px-3 py-1 rounded-full`}
        >
          CPRG 306 &middot; Week 4
        </span>
      </div>
    </header>
  );
};
export default Navbar;
