import { useState } from "react";

function FilaGaleria({ titulo, imagenes, direction = "left" }) {

  const [pause, setPause] = useState(false);

  return (

    <div className="mb-20">

      {/* Título */}
      <h2
        className={`
          text-2xl
          md:text-4xl
          font-bold
          text-black
          mb-6
          relative
          z-20

          ${direction === "right"
            ? "text-right -translate-x-6 md:-translate-x-10"
            : "text-left translate-x-6 md:translate-x-10"}
        `}
      >
        {titulo}
      </h2>

      {/* Fila */}
      <div
        className="relative flex overflow-hidden"
        onMouseEnter={() => setPause(true)}
        onMouseLeave={() => setPause(false)}
      >

        <div
          className={`
            flex
            w-max
            gap-6

            ${direction === "left"
              ? "marquee-left"
              : "marquee-right"}
          `}
          style={{
            animationPlayState: pause ? "paused" : "running",
          }}
        >

          {[...imagenes, ...imagenes].map((imagen, index) => (

            <div
              key={index}
              className="
                w-[250px]
                md:w-[320px]
                h-[300px]
                md:h-[400px]
                overflow-hidden
                rounded-3xl
                shadow-lg
                hover:shadow-2xl
                transition
                duration-500
                flex-shrink-0
                group
                bg-white
              "
            >

              <img
                src={imagen}
                alt=""
                className="
                  w-full
                  h-full
                  object-cover
                  group-hover:scale-110
                  transition
                  duration-700
                "
              />

            </div>

          ))}

        </div>

      </div>

    </div>

  );
}

function Galeria() {

  /* =========================
      IMPORTAR IMÁGENES
  ========================== */

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

    <section className="w-full py-28 bg-[#F5F2EA] overflow-hidden">

      {/* Animaciones */}
      <style>
        {`
          @keyframes marqueeLeft {

            0% {
              transform: translateX(0%);
            }

            100% {
              transform: translateX(-50%);
            }

          }

          @keyframes marqueeRight {

            0% {
              transform: translateX(-50%);
            }

            100% {
              transform: translateX(0%);
            }

          }

          .marquee-left {
            animation: marqueeLeft 30s linear infinite;
          }

          .marquee-right {
            animation: marqueeRight 30s linear infinite;
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto px-6 relative overflow-hidden">

        {/* Fade izquierdo */}
        <div className="
          absolute
          left-0
          top-0
          w-16
          md:w-32
          h-full
          bg-gradient-to-r
          from-[#F5F2EA]
          via-[#F5F2EA]/70
          to-transparent
          z-10
          pointer-events-none
        ">
        </div>

        {/* Fade derecho */}
        <div className="
          absolute
          right-0
          top-0
          w-16
          md:w-32
          h-full
          bg-gradient-to-l
          from-[#F5F2EA]
          via-[#F5F2EA]/70
          to-transparent
          z-10
          pointer-events-none
        ">
        </div>

        {/* Header */}
        <div className="text-center mb-24 relative z-20">

          <p className="
            text-yellow-600
            font-medium
            uppercase
            tracking-[0.3em]
            text-sm
            mb-4
          ">

            Galería

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
            leading-relaxed
          ">

            Conoce algunos de nuestros estampados personalizados
            en playeras, bolsas y prendas para empresas,
            eventos y regalos especiales.

          </p>

        </div>

        {/* FILAS */}

        <FilaGaleria
          titulo="Playeras personalizadas"
          imagenes={imagenesPlayeras}
          direction="left"
        />

        <FilaGaleria
          titulo="Estampado de logos para empresas"
          imagenes={imagenesLogos}
          direction="right"
        />

        <FilaGaleria
          titulo="Bolsas personalizadas"
          imagenes={imagenesBolsas}
          direction="left"
        />

        <FilaGaleria
          titulo="Prendas para eventos y regalos"
          imagenes={imagenesPrendas}
          direction="right"
        />

      </div>

    </section>

  );
}

export default Galeria;