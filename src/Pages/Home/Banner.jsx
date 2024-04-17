import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpg";
import slide4 from "../../assets/slide4.jpg";
import slide5 from "../../assets/slide5.jpg";

const Banner = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className="h-[300px] md:h-[420px] lg:h-[680px]"
    >
      <SwiperSlide>
        <img className="w-full h-full rounded-xl" src={slide1} alt="slide1" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full h-full rounded-xl" src={slide2} alt="slide2" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full h-full rounded-xl" src={slide3} alt="slide3" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full h-full rounded-xl" src={slide4} alt="slide4" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="w-full h-full rounded-xl" src={slide5} alt="slide5" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
