import { useState } from "react";
import { Menu, X } from "lucide-react";

import logo from "../../assets/logos/aclogo.png";

function Navbar() {

  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50 shadow-sm">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <a
          href="#Inicio"
          className="flex items-center gap-3"
        >

          <img
            src={logo}
            alt="AC Estampados"
            className="w-14 h-14 object-contain"
          />

          <span className="text-2xl font-bold text-black">
            AC Estampados
          </span>

        </a>

        {/* Botón móvil */}
        <button
          onClick={() => setMenuAbierto(!menuAbierto)}
          className="md:hidden text-black"
        >

          {
            menuAbierto
              ? <X size={30} />
              : <Menu size={30} />
          }

        </button>

        {/* Menú desktop */}
        <ul className="hidden md:flex items-center gap-8 font-medium">

          <li>
            <a
              href="#Inicio"
              className="hover:text-yellow-500 transition"
            >
              Inicio
            </a>
          </li>

          <li>
            <a
              href="#Servicios"
              className="hover:text-yellow-500 transition"
            >
              Servicios
            </a>
          </li>

          <li>
            <a
              href="#Galeria"
              className="hover:text-yellow-500 transition"
            >
              Galería
            </a>
          </li>

          <li>
            <a
              href="#Footer"
              className="hover:text-yellow-500 transition"
            >
              Contacto
            </a>
          </li>

        </ul>

      </div>

      {/* Menú móvil */}
      {
        menuAbierto && (
          <div className="md:hidden bg-white border-t border-gray-200">

            <ul className="flex flex-col p-6 gap-5 font-medium">

              <li>
                <a
                  href="#Inicio"
                  className="hover:text-yellow-500 transition"
                >
                  Inicio
                </a>
              </li>

              <li>
                <a
                  href="#Servicios"
                  className="hover:text-yellow-500 transition"
                >
                  Servicios
                </a>
              </li>

              <li>
                <a
                  href="#Galeria"
                  className="hover:text-yellow-500 transition"
                >
                  Galería
                </a>
              </li>

              <li>
                <a
                  href="#Footer"
                  className="hover:text-yellow-500 transition"
                >
                  Contacto
                </a>
              </li>

            </ul>

          </div>
        )
      }

    </nav>
  );
}

export default Navbar;