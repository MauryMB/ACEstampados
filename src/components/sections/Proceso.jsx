import {
  MessageCircle,
  BadgeDollarSign,
  Printer,
  Truck,
} from "lucide-react";

function Proceso() {

  const pasos = [
    {
      icono: <MessageCircle size={45} />,
      titulo: "Envía tu diseño",
      descripcion:
        "Mándanos tu idea, logo o imagen por WhatsApp.",
    },

    {
      icono: <BadgeDollarSign size={45} />,
      titulo: "Cotizamos",
      descripcion:
        "Te damos precio según cantidad y producto.",
    },

    {
      icono: <Printer size={45} />,
      titulo: "Realizamos el estampado",
      descripcion:
        "Trabajamos con impresión DTF de alta calidad.",
    },

    {
      icono: <Truck size={45} />,
      titulo: "Entregamos tu pedido",
      descripcion:
        "Entregas en San José del Cabo y pedidos personalizados.",
    },
  ];

  return (
    <section className="w-full py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Título */}
        <div className="text-center mb-20">

          <h2 className="text-4xl md:text-5xl font-bold text-black">
            ¿Cómo trabajamos?
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Nuestro proceso es rápido, sencillo y personalizado.
          </p>

        </div>

        {/* Pasos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {pasos.map((paso, index) => (
            <div
              key={index}
              className="bg-[#F5F2EA] rounded-3xl p-8 text-center shadow-md hover:shadow-xl transition"
            >

              {/* Número */}
              <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold mx-auto mb-6">
                {index + 1}
              </div>

              {/* Icono */}
              <div className="flex justify-center text-black mb-6">
                {paso.icono}
              </div>

              {/* Título */}
              <h3 className="text-2xl font-bold mb-4">
                {paso.titulo}
              </h3>

              {/* Texto */}
              <p className="text-gray-700">
                {paso.descripcion}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Proceso;