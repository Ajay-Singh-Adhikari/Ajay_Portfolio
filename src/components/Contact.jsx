import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaTelegram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <section className="min-h-screen pt-28 pb-16 px-6 bg-[#1e1e1e] text-white">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Contact Me</h1>
        <p className="text-gray-400">
          <Link to="/" className="hover:text-pink-600">Home</Link> /{" "}
          <span className="text-pink-500">Contact Me</span>
        </p>
        <div className="flex justify-center gap-4 mt-4 text-xl">
          {[
            {
              href: "https://linkedin.com/in/ajay-singh-adhikari-039415290",
              icon: <FaLinkedin />,
            },
            {
              href: "https://twitter.com",
              icon: <FaTwitter />,
            },
            {
              href: "https://github.com/Ajay-Singh-Adhikari",
              icon: <FaGithub />,
            },
            {
              href: "https://t.me/NightOwl_zzz",
              icon: <FaTelegram />,
            },
          ].map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500 border p-2 rounded-full transition hover:border-pink-500 hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      <h2 className="text-center text-2xl font-bold mb-12">
        Connect me via Email or Phone
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-8 px-4">
        <div className="relative bg-[#131313] border border-gray-600 rounded-lg p-6 w-full md:w-1/2 flex flex-col items-start hover:border-pink-500 hover:scale-105 transition">
          <Link to="mailto:ajayadhikari12a@gmail.com" className="absolute -top-5 left-6 bg-[#1e1e1e] border rounded-full p-3 hover:bg-pink-500 hover:text-white transition">
            <FaEnvelope size={20} />
          </Link>
          <h3 className="text-xl font-semibold mt-6">Email Address</h3>
          <p className="mt-2">ajayadhikari10c@gmail.com</p>
          <p>ajayadhikari12a@gmail.com</p>
        </div>

        <div className="relative bg-[#131313] border border-gray-600 rounded-lg p-6 w-full md:w-1/2 flex flex-col items-start hover:border-pink-500 hover:scale-105 transition">
          <Link to="tel:+916395712341"  className="absolute -top-5 left-6 bg-[#1e1e1e] border rounded-full p-3 hover:bg-pink-500 hover:text-white transition">
            <FaPhone size={20} />
          </Link>
          <h3 className="text-xl font-semibold mt-6">Phone Number</h3>
          <p className="mt-2">+91 6395712341</p>
        </div>
      </div>
    </section>
  );
}
