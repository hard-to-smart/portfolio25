import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import profileImg from "../assets/profile-zoom.jpg";
import { DATA } from "./contact/data";

const menuItems = [
  { path: "/", text: "About" },
  { path: "/projects", text: "Projects" },
  { path: "/contact", text: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const viewportHeight = window.outerHeight;
      setScrolled(offset >= viewportHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when overlay is open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Hamburger Icon (visible on mobile) */}
      <button
        className="fixed top-4 left-4 z-[101] md:hidden flex flex-col gap-1 items-center justify-center w-10 h-10 bg-slate-900/80 rounded-md"
        aria-label="Open menu"
        onClick={() => setOpen(true)}
        style={{ display: open ? "none" : undefined }}
      >
        <span className="block w-6 h-0.5 bg-white"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
      </button>

      {/* Sidebar for Desktop */}
      <nav
        className={`
          fixed left-0 top-0 h-screen w-20 md:w-24 flex flex-col justify-between items-center z-50
          transition-colors
          ${scrolled
            ? "bg-[#020617] sticky"
            : "bg-transparent"
          }
          hidden md:flex
        `}
      >
        <div>
          <Link to={"/"}>
            <img
              src={profileImg}
              alt="Profile"
              className="object-cover m-4 mt-8 rounded-full w-16 h-16 md:w-24 md:h-24"
            />
          </Link>
          {menuItems.map((item, i) => (
            <Link
              to={item.path}
              key={i}
              className="md:p-8 p-4 cursor-pointer [writing-mode:vertical-lr] tracking-wide flex flex-row-reverse rotate-180 text-white text-medium font-bold md:text-lg lg:text-xl"
            >
              {item.text}
            </Link>
          ))}
        </div>
        <div className="md:p-8 p-4 gap-6 flex flex-col">
        {Object.entries(DATA.contact.social).map(([name, social])=>(
                <a
                  key={name}
                  href={social.url}
                  target="_blank"
                  className="text-md"
                >
                  <social.icon className="size-8"/>  
                </a>
              ))
              }</div>
      </nav>

      {/* Overlay & Dropdown Menu: for mobile */}
      {/* Backdrop: covers full viewport, blurs background, fades in */}
      <div
        className={`
          fixed inset-0 z-10 bg-black/30 backdrop-blur-sm transition-opacity duration-300
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
          md:hidden
        `}
        onClick={() => setOpen(false)}
      />

      {/* Dropdown Panel */}
      <div
        className={`
          fixed left-0 top-0 w-full z-[110] bg-slate-900/90 backdrop-blur-lg text-white 
          flex flex-col items-center transition-transform duration-300
          ${open ? "translate-y-0" : "-translate-y-full"}
          shadow-xl
          md:hidden
        `}
        style={{ minHeight: "100dvh" }}
      >
        {/* Close Button */}
        <button
          className="absolute top-6 right-6 text-4xl font-bold text-white/80 hover:text-white z-50"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        >
          &times;
        </button>
        <div className="flex flex-col items-center mt-16 gap-10">
          <Link to={"/"} onClick={() => setOpen(false)}>
            <img
              src={profileImg}
              className="w-20 h-20 rounded-full object-cover shadow-lg"
              alt="Profile"
            />
          </Link>
          <nav>
          <div className="flex flex-col  items-center justify-between gap-6 mt-2">
          {menuItems.map((item, i) => (
              <Link
                to={item.path}
                key={i}
                onClick={() => setOpen(false)}
                className="text-2xl  flex flex-col font-bold uppercase tracking-wide hover:text-yellow-300 transition"
              >
                {item.text}
              </Link>
            ))}
          </div>
          <div className="flex flex-row gap-6 mt-10">
          {Object.entries(DATA.contact.social).map(([name, social])=>(
                <a
                  key={name}
                  href={social.url}
                  target="_blank"
                  className="text-md"
                >
                  <social.icon className="size-8"/>  
                </a>
              ))
              }
          </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
