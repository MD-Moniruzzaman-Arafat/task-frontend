import { useState } from 'react';
import logo from '../../assets/image/header/Logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Find Jobs', href: '#' },
    { label: 'Browse Companies', href: '#' },
  ];

  return (
    <>
      <nav className="relative z-50 border-b border-white/[0.07] bg-[#F8F8FD] backdrop-blur-2xl fade-in">
        <div className="container mx-auto px-6 lg:px-0">
          <div className="flex items-center justify-between h-16 lg:h-18">
            <div className="flex items-center gap-10 justify-between h-16 lg:h-18">
              {/* Logo */}
              <a href="#" className="w-30">
                <img src={logo} alt="Logo" />
              </a>

              {/* Desktop Links */}
              <div className="hidden md:flex gap-10">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="nav-font link-line  text-[13px] font-semibold tracking-widest uppercase transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#"
                className="nav-font text-[13px] font-semibold text-[#4640DE] hover:text-[#4640DE] px-4 py-2 rounded-lg transition-colors duration-200"
              >
                Log in
              </a>
              <a
                href="#"
                className="btn-glow nav-font text-[13px] font-bold text-[#ffffff] bg-[#4640DE] hover:bg-[#4640DE] px-5 py-2.25  transition-all duration-200"
              >
                Sign up
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg border border-black text-black hover:text-white hover:bg-white/5 transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mobile-menu md:hidden border-t border-white/[0.07] bg-[white] backdrop-blur-2xl">
            <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="nav-font  hover:text-white hover:bg-white/5 text-[13px] font-semibold tracking-widest uppercase px-4 py-3 rounded-lg transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}

              <div className="border-t border-white/[0.07] mt-3 pt-4 flex flex-col gap-2">
                <a
                  href="#"
                  className="nav-font text-[13px] font-semibold text-[#4640DE] hover:text-[#4640DE]  px-4 py-3 rounded-lg transition-all duration-200 text-center"
                >
                  Log in
                </a>
                <a
                  href="#"
                  className="nav-font text-[13px] font-bold text-[#ffffff] bg-[#4640DE] hover:bg-[#4640DE] px-5 py-3 transition-all duration-200 text-center"
                >
                  Sign up
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
