import { palette } from "@/data/colorPalette";
const Footer = () => {
  return (
    <footer className={`border-t ${palette.divider} mt-16`}>
      <div
        className="max-w-5xl mx-auto px-6 py-6 flex items-center
justify-between"
      >
        <p className={`text-sm ${palette.footerText}`}>
            Developed by Doug, Daniel, Caelan, and Niko
        </p>
        <p className={`text-sm ${palette.footerMuted}`}>CPRG 306 · Assignment 2</p>
      </div>
    </footer>
  );
};
export default Footer;
