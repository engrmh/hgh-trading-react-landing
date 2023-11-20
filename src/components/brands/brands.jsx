import { Swiper, SwiperSlide } from 'swiper/react';
import './brands.css';
import { brands } from "../../data/data.jsx";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import Brand from "./brand/brand.jsx";

export default function Brands() {
  return (
      <div className='mx-auto max-w-7xl p-3 lg:px-8 h-56 flex items-center'>
        <Swiper
            slidesPerView={4}
            spaceBetween={50}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
            breakpoints={{
              // when window width is >= 320px
              320: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              // when window width is >= 480px
              480: {
                slidesPerView: 3,
                spaceBetween: 30
              },
              // when window width is >= 640px
              640: {
                slidesPerView: 4,
                spaceBetween: 40
              }
            }}
            modules={[Autoplay]}
            className="mySwiper"
        >
          {
            brands.map((brand, index) => (
                <SwiperSlide key={index} className='flex items-center justify-center'>
                  <Brand imgLink={brand.img}/>
                </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
  );
}
