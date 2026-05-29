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

    <section className="w-full py-28 bg-[#F5F2EA]">

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
          titulo="Playeras Personalizadas"
          imagenes={imagenesPlayeras}
          align="left"
          delay={3000}
        />

        <CarruselCategoria
          titulo="Estampado de Logos"
          imagenes={imagenesLogos}
          align="right"
          delay={4200}
        />

        <CarruselCategoria
          titulo="Bolsas Personalizadas"
          imagenes={imagenesBolsas}
          align="left"
          delay={5400}
        />

        <CarruselCategoria
          titulo="Prendas para Eventos"
          imagenes={imagenesPrendas}
          align="right"
          delay={6600}
        />

      </div>

    </section>

  );
}

export default Galeria;