import CarruselCategoria from "./CarruselCategoria";

function Galeria() {

  const imagenesPlayeras = Object.values(
    import.meta.glob(
      "../../assets/imagenes/playeras/*.{jpg,jpeg,png,webp}",
      {
        eager: true,
        import: "default",
      }
    )
  );

  const imagenesLogos = Object.values(
    import.meta.glob(
      "../../assets/imagenes/estampadoLogos/*.{jpg,jpeg,png,webp}",
      {
        eager: true,
        import: "default",
      }
    )
  );

  const imagenesBolsas = Object.values(
    import.meta.glob(
      "../../assets/imagenes/bolsas/*.{jpg,jpeg,png,webp}",
      {
        eager: true,
        import: "default",
      }
    )
  );

  const imagenesPrendas = Object.values(
    import.meta.glob(
      "../../assets/imagenes/prendas/*.{jpg,jpeg,png,webp}",
      {
        eager: true,
        import: "default",
      }
    )
  );

  return (

    <section id="Galeria" className="w-full py-28 bg-[#F5F2EA]">

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">

          <p className="
            text-yellow-600
            uppercase
            tracking-[0.3em]
            text-sm
            font-medium
            mb-4
          ">
            GALERÍA
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-black">
            Nuestros Trabajos
          </h2>

          <p className="
            mt-6
            text-lg
            text-gray-700
            max-w-2xl
            mx-auto
          ">
            Conoce algunos de nuestros trabajos realizados
            para empresas, eventos y clientes particulares.
          </p>

        </div>

        <CarruselCategoria
          encabezado={
            <div className="text-left">
              

              <h2 className="text-3xl md:text-4xl font-bold text-black">
                <span className="text-yellow-500">
                  Playeras{" "}
                </span>
                 Personalizadas
              </h2>

              <div className="mt-4 w-32 h-1 bg-yellow-500 rounded-full"></div>
            </div>
          }
          imagenes={imagenesPlayeras}
          delay={3000}
        />

        <CarruselCategoria
          encabezado={
            <div className="text-right">
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                Estampado de
                <span className="text-yellow-500">
                  {" "}Logos
                </span>
              </h2>

              <div className="mt-4 ml-auto w-32 h-1 bg-yellow-500 rounded-full"></div>
            </div>
          }
          imagenes={imagenesLogos}
          delay={4200}
        />

        <CarruselCategoria
          encabezado={
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                <span className="text-yellow-500">
                  Bolsas{" "}
                </span>
                 Personalizadas
              </h2>

              <div className="mt-4 w-32 h-1 bg-yellow-500 rounded-full"></div>
            </div>
          }
          imagenes={imagenesBolsas}
          delay={5400}
        />

        <CarruselCategoria
          encabezado={
            <div className="text-right">
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                Prendas para
                <span className="text-yellow-500">
                  {" "}Eventos
                </span>
              </h2>

              <div className="mt-4 ml-auto w-32 h-1 bg-yellow-500 rounded-full"></div>
            </div>
          }
          imagenes={imagenesPrendas}
          delay={6600}
        />

      </div>

    </section>

  );
}

export default Galeria;