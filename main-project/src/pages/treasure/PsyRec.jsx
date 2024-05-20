import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import photo1 from "/psy1.jpg";
import photo2 from "/psy2.jpg";
import photo3 from "/psy3.jpg";
import photo4 from "/psy4.jpg";
import photo5 from "/psy5.jpg";

const PsyRec = () => {
  return (
    <section id="tranding">
      <div className="my-3 mx-5 container">
        <h1 className="text-2xl text-center font-semibold text-dark-blue">Rekomendasi psikolog & dokter anak</h1>
        <h3 className="text-xl text-center text-dark-blue">Temukan psikolog yang tepat untuk anak anda.</h3>
      </div>
      <div className="w-[50rem] container mx-auto">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          <SwiperSlide>
            <img src={photo1} alt="slide_image" className="relative" />
            <div className="absolute inset-x-0 top-44 w-56 h-28 left-[2rem] shadow-lg rounded-xl text-center bg-white px-2">
              <h1 className="font-bold text-lg text-dark-blue">Dr. Cynthia</h1>
              <h3 className="font-semibold text-sm text-blue-900 mb-2">Psikolog anak berpengalaman lebih dari 9 tahun.</h3>
              <a className="bg-red-500 text-white font-semibold text-xs px-2 py-1 rounded-lg">Hubungi Halodok</a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={photo2} alt="slide_image" className="relative" />
            <div className="absolute inset-x-0 top-44 w-56 h-28 left-[2rem] shadow-lg rounded-xl text-center bg-white px-2">
              <h1 className="font-bold text-lg text-dark-blue">Dr. Cynthia</h1>
              <h3 className="font-semibold text-sm text-blue-900 mb-2">Psikolog anak berpengalaman lebih dari 9 tahun.</h3>
              <a className="bg-red-500 text-white font-semibold text-xs px-2 py-1 rounded-lg">Hubungi Halodok</a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={photo3} alt="slide_image" className="relative" />
            <div className="absolute inset-x-0 top-44 w-56 h-28 left-[2rem] shadow-lg rounded-xl text-center bg-white px-2">
              <h1 className="font-bold text-lg text-dark-blue">Dr. Cynthia</h1>
              <h3 className="font-semibold text-sm text-blue-900 mb-2">Psikolog anak berpengalaman lebih dari 9 tahun.</h3>
              <a className="bg-red-500 text-white font-semibold text-xs px-2 py-1 rounded-lg">Hubungi Halodok</a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={photo4} alt="slide_image" className="relative" />
            <div className="absolute inset-x-0 top-44 w-56 h-28 left-[2rem] shadow-lg rounded-xl text-center bg-white px-2">
              <h1 className="font-bold text-lg text-dark-blue">Dr. Cynthia</h1>
              <h3 className="font-semibold text-sm text-blue-900 mb-2">Psikolog anak berpengalaman lebih dari 9 tahun.</h3>
              <a className="bg-red-500 text-white font-semibold text-xs px-2 py-1 rounded-lg">Hubungi Halodok</a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={photo5} alt="slide_image" className="relative" />
            <div className="absolute inset-x-0 top-44 w-56 h-28 left-[2rem] shadow-lg rounded-xl text-center bg-white px-2">
              <h1 className="font-bold text-lg text-dark-blue">Dr. Cynthia</h1>
              <h3 className="font-semibold text-sm text-blue-900 mb-2">Psikolog anak berpengalaman lebih dari 9 tahun.</h3>
              <a className="bg-red-500 text-white font-semibold text-xs px-2 py-1 rounded-lg">Hubungi Halodok</a>
            </div>
          </SwiperSlide>

          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default PsyRec;
