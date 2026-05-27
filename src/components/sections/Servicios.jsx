import { Shirt, ShoppingBag, PaintBucket, Package } from "lucide-react";


function Servicios() {
  return (
    <section className="w-full py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Título */}
        <div className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Nuestros Servicios
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Personalizamos productos con estampados
            DTF de alta calidad.
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center ">

          {/* Card 1 */}
          <div className="bg-[#F5F2EA] p-8 rounded-3xl shadow-md hover:shadow-xl transition flex flex-col items-center">

            <Shirt size={50} className="text-yellow-500 mb-6" />

            <h3 className="text-2xl font-bold mb-4">
              Playeras
            </h3>

            <p className="text-gray-700">
              Diseños personalizados para empresas,
              eventos y regalos especiales.
            </p>

          </div>

          {/* Card 2 */}
          <div className="bg-[#F5F2EA] p-8 rounded-3xl shadow-md hover:shadow-xl transition flex flex-col items-center">

            <PaintBucket size={50} className="text-yellow-500 mb-6" />

            <h3 className="text-2xl font-bold mb-4">
              Estampado DTF
            </h3>

            <p className="text-gray-700">
              Impresión de alta calidad con colores
              vibrantes y gran durabilidad.
            </p>

          </div>

          {/* Card 3 */}
          <div className="bg-[#F5F2EA] p-8 rounded-3xl shadow-md hover:shadow-xl transition flex flex-col items-center">

            <ShoppingBag size={50} className="text-yellow-500 mb-6" />

            <h3 className="text-2xl font-bold mb-4">
              Bolsas
            </h3>

            <p className="text-gray-700">
              Bolsas personalizadas para eventos,
              negocios y ocasiones especiales.
            </p>

          </div>

          {/* Card 4 */}
          <div className="bg-[#F5F2EA] p-8 rounded-3xl shadow-md hover:shadow-xl transition flex flex-col items-center">

            <Package size={50} className="text-yellow-500 mb-6" />

            <h3 className="text-2xl font-bold mb-4">
              Mayoreo
            </h3>

            <p className="text-gray-700">
              Pedidos desde una pieza hasta
              producción en volumen.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Servicios;