import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#131313] border-b border-transparent shadow">
      <div className="flex justify-between items-center px-6 py-4">
        <Link
          to="/"
          onClick={() => window.scrollTo(0, 0)}
          className="text-white text-2xl font-bold cursor-pointer hover:scale-110 transition-transform duration-300"
        >
          Ajay <span className="text-pink-500">Singh Adhikari</span>
        </Link>
        <nav className="hidden md:flex gap-4 text-white text-base font-medium">
          <Link
            to="/"
            onClick={() => window.scrollTo(0, 0)}
            className="hover:text-pink-500"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => window.scrollTo(0, 0)}
            className="hover:text-pink-500"
          >
            About
          </Link>
          <Link
            to="/education"
            onClick={() => window.scrollTo(0, 0)}
            className="hover:text-pink-500"
          >
            Education
          </Link>
          <Link
            to="/services"
            onClick={() => window.scrollTo(0, 0)}
            className="hover:text-pink-500"
          >
            My Services
          </Link>
          <Link
            to="/works"
            onClick={() => window.scrollTo(0, 0)}
            className="hover:text-pink-500"
          >
            My Works
          </Link>
          <Link
            to="/contact"
            onClick={() => window.scrollTo(0, 0)}
            className="hover:text-pink-500"
          >
            Contact
          </Link>
        </nav>
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {open && (
        <div className="md:hidden absolute top-full right-0 w-1/2 h-screen bg-[#131313]/70 backdrop-blur-md shadow-md py-4 flex flex-col gap-4 text-white text-base font-medium transition-all duration-300">
          <Link
            to="/"
            onClick={() => {
              setOpen(false);
              window.scrollTo(0, 0);
            }}
            className="hover:text-pink-500 px-4 text-left"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => {
              setOpen(false);
              window.scrollTo(0, 0);
            }}
            className="hover:text-pink-500 px-4 text-left"
          >
            About
          </Link>
          <Link
            to="/education"
            onClick={() => {
              setOpen(false);
              window.scrollTo(0, 0);
            }}
            className="hover:text-pink-500 px-4 text-left"
          >
            Education
          </Link>
          <Link
            to="/services"
            onClick={() => {
              setOpen(false);
              window.scrollTo(0, 0);
            }}
            className="hover:text-pink-500 px-4 text-left"
          >
            My Services
          </Link>
          <Link
            to="/works"
            onClick={() => {
              setOpen(false);
              window.scrollTo(0, 0);
            }}
            className="hover:text-pink-500 px-4 text-left"
          >
            My Works
          </Link>
          <Link
            to="/contact"
            onClick={() => {
              setOpen(false);
              window.scrollTo(0, 0);
            }}
            className="hover:text-pink-500 px-4 text-left"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
