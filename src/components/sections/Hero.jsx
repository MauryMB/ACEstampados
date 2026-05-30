import logo from "../../assets/logos/aclogo.png";
export const Whatsapp = (props) => (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 464 488" {...props}>
    <path fill="#ffffff" d="M462 228q0 93-66 159t-160 66q-56 0-109-28L2 464l40-120q-32-54-32-116q0-93 66-158.5T236 4t160 65.5T462 228zM236 39q-79 0-134.5 55.5T46 228q0 62 36 111l-24 70l74-23q49 31 104 31q79 0 134.5-55.5T426 228T370.5 94.5T236 39zm114 241q-1-1-10-7q-3-1-19-8.5t-19-8.5q-9-3-13 2q-1 3-4.5 7.5t-7.5 9t-5 5.5q-4 6-12 1q-34-17-45-27q-7-7-13.5-15t-12-15t-5.5-8q-3-7 3-11q4-6 8-10l6-9q2-5-1-10q-4-13-17-41q-3-9-12-9h-11q-9 0-15 7q-19 19-19 45q0 24 22 57l2 3q2 3 4.5 6.5t7 9t9 10.5t10.5 11.5t13 12.5t14.5 11.5t16.5 10t18 8.5q16 6 27.5 10t18 5t9.5 1t7-1t5-1q9-1 21.5-9t15.5-17q8-21 3-26z"></path>
</svg>
    )

function Hero() {
  return (
    <section id="Inicio" className="w-full min-h-dvh bg-[#F5F2EA] flex items-center overflow-hidden">

      <div className="max-w-5xl mx-auto px-6 py-24 w-full flex flex-col items-center text-center">

        {/* Imagen */}
        <div className="flex justify-center">

          <img
            src={logo}
            alt="Logo AC Estampados"
            className="
              w-[220px]
              sm:w-[300px]
              md:w-[380px]
              lg:w-[450px]
              object-contain
            "
          />

        </div>

        {/* Texto pequeño */}
        <p className="mt-5 text-sm md:text-base font-medium text-yellow-600 uppercase tracking-widest">

          Estampados personalizados en San José del Cabo

        </p>

        {/* Título */}
        <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight max-w-4xl">

          Prendas y bolsas
          <span className="text-yellow-500"> personalizadas </span>
          con estampado DTF

        </h1>

        {/* Descripción */}
        <p className="mt-6 text-base sm:text-lg text-gray-700 max-w-2xl leading-relaxed">

          Creamos estampados de alta calidad para empresas,
          eventos, negocios y regalos personalizados.
          Trabajamos diseños únicos en playeras y bolsas
          con entregas en San José del Cabo.

        </p>

        {/* Botones */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4  ">

          <a
            href="https://wa.me/526241615885"
            className="bg-black text-white px-8 py-4 rounded-2xl hover:bg-gray-800 transition duration-300 font-medium flex items-center gap-2"
          >
            < Whatsapp />Cotizar ahora 
          </a>

          <a
            href="#Galeria"
            className="border-2 border-black px-8 py-4 rounded-2xl hover:bg-black hover:text-white transition duration-300 font-medium flex items-center justify-center "
          >
            Ver trabajos
          </a>

        </div>

      </div>

    </section>
  );
}

export default Hero;