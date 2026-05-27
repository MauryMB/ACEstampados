import { MessageCircle } from "lucide-react";

function CTA() {
  return (
    <section className="w-full py-24 bg-black">

      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Título */}
        <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">

          ¿Tienes un diseño
          <span className="text-yellow-400"> en mente?</span>

        </h2>

        {/* Texto */}
        <p className="mt-6 text-lg text-gray-300">

          Cotiza tus playeras, bolsas y estampados
          personalizados por WhatsApp.

        </p>

        {/* Botón */}
        <div className="mt-10">

          <a
            href="https://wa.me/526241615885"
            target="_blank"
            className="inline-flex items-center gap-3 bg-yellow-400 text-black px-8 py-4 rounded-2xl text-lg font-semibold hover:scale-105 transition"
          >

            <MessageCircle size={24} />

            Cotizar ahora

          </a>

        </div>

      </div>

    </section>
  );
}

export default CTA;