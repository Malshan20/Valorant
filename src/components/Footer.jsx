import React from "react";
import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#4a3aff] text-black py-8">
      <div className="container mx-auto flex flex-col items-center px-6 lg:flex-row lg:items-start lg:justify-between">
        {/* Logo Section */}
        <div className="mb-8 lg:mb-0">
          <div className="text-black font-bold text-3xl tracking-wider">
            <a href="/" className="hover:underline "><img src="/valorant.png" alt="VALORANT" className="w-32" /></a>
          </div>
        </div>

        {/* Explore Section */}
        <div className="mb-8 lg:mb-0">
          <h3 className="text-xs font-bold uppercase tracking-wider mb-4">
            Explore
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#prologue" className="hover:underline">
                Prologue
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Products Section */}
        <div className="mb-8 lg:mb-0">
          <h3 className="text-xs font-bold uppercase tracking-wider mb-4">
            Products
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#radiant" className="hover:underline">
                Radiant
              </a>
            </li>
            <li>
              <a
                href="#nexus"
                className="hover:underline flex items-center gap-1"
              >
                Nexus <span className="text-lg">↗</span>
              </a>
            </li>
            <li>
              <a href="#zigma" className="hover:underline">
                Zigma
              </a>
            </li>
            <li>
              <a href="#azul" className="hover:underline">
                Azul
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="mb-8 lg:mb-0">
          <h3 className="text-xs font-bold uppercase tracking-wider mb-4">
            Follow Us
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center gap-2"
              >
                <FaDiscord /> Discord
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                X
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center gap-2"
              >
                <FaYoutube /> YouTube
              </a>
            </li>
            <li>
              <a
                href="https://medium.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center gap-2"
              >
                <FaMedium /> Medium
              </a>
            </li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider mb-4">
            Resources
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#media-kit" className="hover:underline">
                Media Kit
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 flex flex-col items-center justify-between space-y-4 text-xs font-light text-black lg:flex-row">
        <p>© Zentry 2024. All Rights Reserved</p>
        <a href="#privacy-policy" className="hover:underline">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
