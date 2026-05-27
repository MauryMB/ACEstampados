import logo from "../../assets/logos/aclogo.png";

function Hero() {
  return (
    <section className="w-full min-h-dvh bg-[#F5F2EA] flex items-center overflow-hidden">

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
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

          <button className="bg-black text-white px-8 py-4 rounded-2xl hover:bg-gray-800 transition duration-300 font-medium">

            Cotizar ahora

          </button>

          <button className="border-2 border-black px-8 py-4 rounded-2xl hover:bg-black hover:text-white transition duration-300 font-medium">

            Ver trabajos

          </button>

        </div>

      </div>

    </section>
  );
}

export default Hero;