import React from "react";
import { FaLinkedin, FaTwitter, FaGithub, FaTelegram } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      className="flex flex-col justify-center items-center text-center px-4 pt-28 pb-12 min-h-screen"
      id="home"
    >
      <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full shadow-[0_0_60px_10px_rgba(236,72,153,0.8)] overflow-hidden hover:shadow-[0_0_60px_10px_white] transition duration-300 mb-6">
        <img
          src="/photo.jpg"
          alt="Ajay"
          className="object-cover w-full h-full"
        />
      </div>
      <h1 className="text-3xl sm:text-4xl font-bold">
        Hi, It&apos;s <span className="text-pink-600">Ajay</span>
      </h1>
      <h2 className="text-lg sm:text-xl mt-2 text-pink-500">
       <span className="text-white">I&apos;m a </span> Front-End Developer
      </h2>
      <p className="max-w-xl mt-4 text-gray-300 text-sm sm:text-base px-2">
        I build visually stunning and user-friendly websites that blend
        creativity with functionality. I try to make websites that are{" "}
        <b>both beautiful and functional</b>. I&apos;m passionate about coding,
        design and problem-solving.
      </p>
      <div className="flex space-x-4 mt-6">
        <a
          href="https://linkedin.com/in/ajay-singh-adhikari-039415290"
          className="text-pink-600 hover:text-white border border-pink-600 rounded-full p-3 transition hover:shadow-[0_0_10px_6px_rgba(236,72,153,0.8)]"
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href="https://twitter.com"
          className="text-pink-600 hover:text-white border border-pink-600 rounded-full p-3 transition hover:shadow-[0_0_10px_6px_rgba(236,72,153,0.8)]"
        >
          <FaTwitter size={20} />
        </a>
        <a
          href="https://github.com/Ajay-Singh-Adhikari"
          className="text-pink-600 hover:text-white border border-pink-600 rounded-full p-3 transition hover:shadow-[0_0_10px_6px_rgba(236,72,153,0.8)]"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://t.me/NightOwl_zzz"
          className="text-pink-600 hover:text-white border border-pink-600 rounded-full p-3 transition hover:shadow-[0_0_10px_6px_rgba(236,72,153,0.8)]"
        >
          <FaTelegram size={20} />
        </a>
      </div>
      <Link to='/contact'><button className="mt-6 px-6 py-2 bg-pink-600 hover:bg-white hover:text-pink-600 rounded-full transition hover:shadow-[0_0_10px_6px_rgba(236,72,153,0.8)] font-bold">
        Hire Me
      </button>
      </Link>
    </section>
  );
}
