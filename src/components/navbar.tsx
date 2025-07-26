import { useEffect, useState } from "react";

interface NavBarProps {
  BG_Color: string;
  Logo_Image?: string;
  ID_Ref?: string;
  Buttons: {
    Label: string;
    OnClick: () => void;
  }[];
}

const useOnScrollAt = (
  elementId: string,
  onVisible: () => void,
  onHidden: () => void
) => {
  useEffect(() => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const halfWindowHeight = window.innerHeight / 2;
      const isVisible =
        rect.top < halfWindowHeight && rect.bottom > halfWindowHeight / 2;

      if (isVisible) {
        onVisible();
      } else {
        onHidden();
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [elementId, onVisible, onHidden]);
};

export default function NavBar({ BG_Color, Logo_Image, ID_Ref, Buttons }: NavBarProps) {
  const [applyBg, setApplyBg] = useState(!ID_Ref);
  const [menuOpen, setMenuOpen] = useState(false);

  useOnScrollAt(
    ID_Ref || "",
    () => setApplyBg(false),
    () => setApplyBg(true)
  );

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Desktop Navbar */}
      <div
        className={`hidden sm:flex items-center justify-between transition-colors duration-300 px-6 h-16 ${applyBg ? BG_Color : "bg-transparent"}`}
      >
        {/* Left - Logo */}
        <div className="flex-shrink-0">
          {Logo_Image && (
            <img src={Logo_Image} alt="Logo" className="h-10 w-auto" />
          )}
        </div>

        {/* Center - Buttons */}
        <div className="flex space-x-6">
          {Buttons.map((btn, i) => (
            <span
              key={i}
              onClick={btn.OnClick}
              className="cursor-pointer text-gray-300 hover:text-white hover:bg-slate-800 rounded-md px-4 py-2 text-sm font-medium transition"
            >
              {btn.Label}
            </span>
          ))}
        </div>

        {/* Right Spacer (optional for symmetry) */}
        <div className="w-10" />
      </div>

      {/* Mobile Header */}
      <div className={`sm:hidden ${BG_Color} px-4 py-3 flex items-center justify-between`}>
        {/* Menu Toggle (left) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 rounded-md text-gray-200 hover:text-white hover:bg-gray-700 transition"
        >
          {menuOpen ? (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Logo (right) */}
        {Logo_Image && (
          <img src={Logo_Image} alt="Logo" className="h-10 w-auto" />
        )}
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className={`${BG_Color} sm:hidden px-4 pb-4 pt-2 space-y-1 text-center`}>
          {Buttons.map((btn, i) => (
            <div
              key={i}
              onClick={btn.OnClick}
              className="cursor-pointer text-gray-200 hover:text-white hover:bg-gray-700 block rounded-md px-3 py-2 text-base font-medium transition"
            >
              {btn.Label}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
