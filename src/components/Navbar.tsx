import { useState } from "react";
import { Menu, X, Heart, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";

import logo from "@/assets/Logo.png";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Contact", id: "footer" },
];

const initiativesLinks = [
  { label: "Sambhajinagar Ploggers", path: "/ploggers" },
  { label: "Social Shelf", path: "/social-shelf" },
  { label: "Laal Bindi", path: "/laal-bindi" },
];

const underlineStyle =
  "relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    if (id === "footer") {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
      return;
    }

    const section = document.getElementById(id);
    if (!section) return;

    const navbarHeight = 80;
    const sectionTop =
      section.getBoundingClientRect().top + window.scrollY - navbarHeight;

    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });
  };

  const handleNavigation = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollToSection(id);
      }, 100);
    } else {
      scrollToSection(id);
    }

    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto flex items-center justify-between h-20 px-4">

        {/* Logo */}
        <button
          onClick={() => handleNavigation("home")}
          className="flex items-center gap-3"
        >
          <img
            src={logo}
            alt="Logo"
            className="h-14 md:h-16 w-auto object-contain"
          />
          <span className="font-display text-xl font-bold text-black">
            Vinit Abhedya Foundation
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">

          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavigation(link.id)}
              className={`${underlineStyle} text-sm font-medium text-gray-800 hover:text-black transition-colors`}
            >
              {link.label}
            </button>
          ))}

          {/* Initiatives Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className={`${underlineStyle} flex items-center gap-1 text-sm font-medium text-gray-800 hover:text-black transition-colors`}
            >
              Initiatives
              <ChevronDown className="w-4 h-4" />
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-10 left-0 bg-white shadow-xl rounded-xl py-3 w-60 border"
                >
                  {initiativesLinks.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 transition"
                    >
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Donate Button */}
          <Link
            to="/donate"
            className="flex items-center gap-2 px-6 py-2 rounded-full bg-emerald-600 text-white font-medium text-sm transition-all duration-300 hover:bg-emerald-700"
          >
            <Heart className="w-4 h-4" />
            Donate
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-black"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-b border-gray-200"
          >
            <div className="flex flex-col p-4 gap-4 text-black">

              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavigation(link.id)}
                  className={`${underlineStyle} text-sm font-medium text-left`}
                >
                  {link.label}
                </button>
              ))}

              <Link
                to="/donate"
                className="flex items-center justify-center gap-2 px-6 py-2 rounded-full bg-emerald-600 text-white font-medium text-sm hover:bg-emerald-700 transition-all duration-300"
                onClick={() => setMobileOpen(false)}
              >
                <Heart className="w-4 h-4" />
                Donate
              </Link>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
