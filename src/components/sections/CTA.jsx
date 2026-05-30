import { MessageCircle } from "lucide-react";
export const Whatsapp = (props) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 464 488" {...props}>
    <path fill="#000000" d="M462 228q0 93-66 159t-160 66q-56 0-109-28L2 464l40-120q-32-54-32-116q0-93 66-158.5T236 4t160 65.5T462 228zM236 39q-79 0-134.5 55.5T46 228q0 62 36 111l-24 70l74-23q49 31 104 31q79 0 134.5-55.5T426 228T370.5 94.5T236 39zm114 241q-1-1-10-7q-3-1-19-8.5t-19-8.5q-9-3-13 2q-1 3-4.5 7.5t-7.5 9t-5 5.5q-4 6-12 1q-34-17-45-27q-7-7-13.5-15t-12-15t-5.5-8q-3-7 3-11q4-6 8-10l6-9q2-5-1-10q-4-13-17-41q-3-9-12-9h-11q-9 0-15 7q-19 19-19 45q0 24 22 57l2 3q2 3 4.5 6.5t7 9t9 10.5t10.5 11.5t13 12.5t14.5 11.5t16.5 10t18 8.5q16 6 27.5 10t18 5t9.5 1t7-1t5-1q9-1 21.5-9t15.5-17q8-21 3-26z"></path>
</svg>
    )

function CTA() {
  return (
    <section id="CTA" className=" w-full py-24 bg-black">

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

            <Whatsapp/>Cotizar ahora

          </a>

        </div>

      </div>

    </section>
  );
}

export default CTA;