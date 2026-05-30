import logo from "../../assets/logos/aclogo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

import {
  Phone,
  MapPin,
  MessageCircle,
} from "lucide-react";

function Footer() {
  return (
    <footer id="Footer" className="w-full bg-[#111111] text-white py-16">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Logo y descripción */}
          <div>

            <div className="flex items-center gap-4">

              <img
                src={logo}
                alt="AC Estampados"
                className="w-16 h-16 object-contain"
              />

              <span className="text-xl font-bold">

                AC {" "}
                <span className="text-yellow-500">
                  Estampados
                </span>
              </span>

            </div>

            <p className="mt-6 text-gray-400 leading-relaxed">

              Playeras, bolsas y productos personalizados
              con estampado DTF de alta calidad.

            </p>

          </div>

          {/* Contacto */}
          <div>

            <h3 className="text-2xl font-bold mb-6">
              Contacto
            </h3>

            <div className="space-y-4">

              <div className="flex items-center gap-3 text-gray-300">

                <Phone size={20} />

                <span>624 161 5885</span>

              </div>

              <div className="flex items-center gap-3 text-gray-300">

                <Phone size={20} />

                <span>624 160 3776</span>

              </div>

              <div className="flex items-center gap-3 text-gray-300">

                <MapPin size={20} />

                <span>San José del Cabo</span>

              </div>

              <div className="flex items-center gap-3 text-gray-300">

                <MessageCircle size={20} />

                <span>Entregas a domicilio</span>

              </div>

            </div>

          </div>

          {/* Redes */}
          <div>

            <h3 className="text-2xl font-bold mb-6">
              Redes Sociales
            </h3>

            <p className="text-gray-400 mb-6">
              Síguenos para conocer nuestros
              trabajos más recientes.
            </p>

            <div className="flex gap-4">

              {/* Facebook */}
              <a
                href="https://www.facebook.com/Estampa2AC"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center
                  hover:bg-yellow-500
                  hover:text-black
                  transition"
              >
                <FaFacebookF size={20} />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/ac.estampa2"
                target="_blank"
                rel="noreferrer"
                className="
        w-12
        h-12
        rounded-full
        bg-white/10
        flex
        items-center
        justify-center
        hover:bg-yellow-500
        hover:text-black
        transition
      "
              >
                <FaInstagram size={20} />
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@ac.estampa2"
                target="_blank"
                rel="noreferrer"
                className="
        w-12
        h-12
        rounded-full
        bg-white/10
        flex
        items-center
        justify-center
        hover:bg-yellow-500
        hover:text-black
        transition
      "
              >
                <FaTiktok size={20} />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/526241615885"
                target="_blank"
                rel="noreferrer"
                className="
        w-12
        h-12
        rounded-full
        bg-white/10
        flex
        items-center
        justify-center
        hover:bg-yellow-500
        hover:text-black
        transition
      "
              >
                <FaWhatsapp size={20} />
              </a>

            </div>

          </div>

        </div>

        {/* Línea inferior */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">

          © 2026 AC Estampados. Todos los derechos reservados.

        </div>

      </div>

    </footer>
  );
}

export default Footer;