import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white py-8 px-4 mt-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/certificates"
                onClick={() => window.scrollTo(0, 0)}
                className="hover:text-pink-600 transition underline"
              >
                My Certificates
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => window.scrollTo(0, 0)}
                className="hover:text-pink-600 transition underline"
              >
                Let’s Talk
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Say HELLO</h3>
          <ul className="space-y-2">
            <li>ajayadhikari12a@gmail.com</li>
            <li>ajaysinghadhikari10c@gmail.com</li>
          </ul>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a
              href="https://github.com/Ajay-Singh-Adhikari"
              className="hover:text-pink-600 transition"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/ajay-singh-adhikari-039415290"
              className="hover:text-pink-600 transition"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://t.me/NightOwl_zzz"
              className="hover:text-pink-600 transition"
            >
              <FaTelegram size={20} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Skills</h3>
          <ul className="space-y-2">
            <h2 className="text-pink-600 font-bold">Front-End Technologies</h2>
            <li>HTML, CSS, JavaScript</li>
            <li>ReactJS, Redux, EJS</li>
            <li>Bootstrap, TailwindCSS, Wix Studio</li>
            <h2 className="text-pink-600 font-bold">Backend Technologies</h2>
            <li>Node.js, Express.js, Firebase</li>
          </ul>
        </div>
      </div>
      <p className="text-center text-gray-400 text-xs mt-6">
        © 2025 Ajay Singh Adhikari. All rights reserved.
      </p>
    </footer>
  );
}
