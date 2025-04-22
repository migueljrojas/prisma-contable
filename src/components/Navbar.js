"use client";

import { useState } from "react";
import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ contact }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50">
      {/* Top bar con información de contacto visible solo en escritorio */}
      <div className="bg-gray-100 hidden md:block">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-1">
            <FaMapMarkerAlt className="text-secondary-500" />
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                contact.address
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {contact.address}
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <MdEmail className="text-secondary-500" />
              <a href={`mailto:${contact.email}`} className="hover:underline">
                {contact.email}
              </a>
            </div>
            {contact.whatsapp && (
              <div className="flex items-center space-x-1">
                <FaWhatsapp className="text-secondary-500" />
                <a
                  href={`https://wa.me/${contact.whatsapp.replace(
                    /[^0-9]/g,
                    ""
                  )}?text=${encodeURIComponent(
                    "Hola, quisiera más información"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {contact.whatsapp}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Barra de navegación principal */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold" style={{ color: "#005f9e" }}>
          <img src="/logo.png" alt="Prisma Contable" className="h-16" />
        </div>
        <div className="hidden md:flex space-x-6 font-montserrat font-semibold">
          <a
            href="#home"
            className="text-primary-500 hover:text-secondary-500 transition"
          >
            Home
          </a>
          <a
            href="#nosotros"
            className="text-primary-500 hover:text-secondary-500 transition"
          >
            Nosotros
          </a>
          <a
            href="#servicios"
            className="text-primary-500 hover:text-secondary-500 transition"
          >
            Servicios
          </a>
          <a
            href="#planes"
            className="text-primary-500 hover:text-secondary-500 transition"
          >
            Planes
          </a>
          {/* <a href="#equipo" className="text-primary-500 hover:text-secondary-500 transition">Equipo</a> */}
          <a
            href="#contacto"
            className="text-primary-500 hover:text-secondary-500 transition"
          >
            Contacto
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <MdClose className="w-6 h-6 text-secondary-500" />
            ) : (
              <GiHamburgerMenu className="w-6 h-6 text-secondary-500" />
            )}
          </button>
        </div>
      </div>
      {/* Menú móvil: incluye información de contacto y enlaces de navegación */}
      <div
        id="mobile-menu"
        className={`${
          menuOpen ? "block" : "hidden"
        } md:hidden bg-white shadow-xl`}
      >
        <div className="px-4 pt-2 pb-2 space-y-4 font-montserrat font-semibold">
          <div className="space-y-1">
            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
              className="block text-primary-500 hover:text-secondary-500 transition"
            >
              Home
            </a>
            <a
              href="#nosotros"
              onClick={() => setMenuOpen(false)}
              className="block text-primary-500 hover:text-secondary-500 transition"
            >
              Nosotros
            </a>
            <a
              href="#servicios"
              onClick={() => setMenuOpen(false)}
              className="block text-primary-500 hover:text-secondary-500 transition"
            >
              Servicios
            </a>
            <a
              href="#planes"
              onClick={() => setMenuOpen(false)}
              className="block text-primary-500 hover:text-secondary-500 transition"
            >
              Planes
            </a>
            {/* <a href="#equipo" onClick={() => setMenuOpen(false)} className="block text-primary-500 hover:text-secondary-500 transition">Equipo</a> */}
            <a
              href="#contacto"
              onClick={() => setMenuOpen(false)}
              className="block text-primary-500 hover:text-secondary-500 transition"
            >
              Contacto
            </a>
          </div>
          <div className="space-y-1 border-t border-t-stone-200 py-4">
            <div className="flex items-center space-x-1 text-sm font-light">
              <FaMapMarkerAlt className="text-secondary-500" />
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  contact.address
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {"Torre California, Oficina 2H. Macaracuay, Caracas"}
              </a>
            </div>
            <div className="flex items-center space-x-1 text-sm font-light">
              <MdEmail className="text-secondary-500" />
              <a href={`mailto:${contact.email}`} className="hover:underline">
                {contact.email}
              </a>
            </div>
            {contact.whatsapp && (
              <div className="flex items-center space-x-1 text-sm font-light">
                <FaWhatsapp className="text-secondary-500" />
                <a
                  href={`https://wa.me/${contact.whatsapp.replace(
                    /[^0-9]/g,
                    ""
                  )}?text=${encodeURIComponent(
                    "Hola, quisiera más información"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {contact.whatsapp}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
