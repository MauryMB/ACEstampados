import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function CarruselCategoria({
  titulo,
  imagenes,
  align = "left",
}) {
  return (
    <div className="mb-24">

      {/* Título */}
      <div
        className={`
          mb-8

          ${
            align === "right"
              ? "text-right"
              : "text-left"
          }
        `}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          {titulo}
        </h2>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        speed={1000}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
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
                alt=""
                className="
                  w-full
                  h-[300px]
                  md:h-[380px]

                  object-cover

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
  );
}

export default CarruselCategoria;