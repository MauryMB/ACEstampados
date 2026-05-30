import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "swiper/css";
import "swiper/css/pagination";

import "yet-another-react-lightbox/styles.css";

function CarruselCategoria({
  encabezado,
  imagenes,
  delay = 3500,
}) {

  const [open, setOpen] = useState(false);
  const [indexActual, setIndexActual] = useState(0);

  return (
    <>
      <div className="mb-24">

        {/* Encabezado personalizado */}
        <div className="mb-10">
          {encabezado}
        </div>

        {/* Carrusel */}
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          speed={1000}
          autoplay={{
            delay,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
          }}
          spaceBetween={24}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },

            640: {
              slidesPerView: 2,
            },

            1024: {
              slidesPerView: 3,
            },

            1280: {
              slidesPerView: 4,
            },
          }}
        >
          {imagenes.map((imagen, index) => (

            <SwiperSlide key={index}>

              <div
                className="
                  overflow-hidden
                  rounded-3xl
                  bg-white
                  shadow-lg
                  hover:shadow-2xl
                  transition-all
                  duration-500
                  group
                "
              >

                <img
                  src={imagen}
                  alt={`Imagen ${index + 1}`}
                  onClick={() => {
                    setIndexActual(index);
                    setOpen(true);
                  }}
                  className="
                    w-full
                    h-[300px]
                    md:h-[380px]
                    object-cover
                    cursor-pointer
                    group-hover:scale-110
                    transition-transform
                    duration-700
                  "
                />

              </div>

            </SwiperSlide>

          ))}
        </Swiper>

      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={indexActual}
        plugins={[Zoom]}
        slides={imagenes.map((img) => ({
          src: img,
        }))}
      />
    </>
  );
}

export default CarruselCategoria;