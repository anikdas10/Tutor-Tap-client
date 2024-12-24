
import { SwiperSlide,Swiper } from "swiper/react"
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
;
import Slide from "../Slide/Slide";

import bgimg1 from "./../../assets/images/slider1.png"
import bgimg2 from "./../../assets/images/slider2.png"
import bgimg3 from "./../../assets/images/slider3.jpeg"
import bgimg4 from "./../../assets/images/slider4.jpg"
const Slider = () => {
    return (
      <div className="container pt-12 md:pt-16 lg:pt-24">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper rounded-md"
        >
          <SwiperSlide>
            <Slide
              image={bgimg1}
              text="Get Your Web Development Projects Done in minutes"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide
              image={bgimg2}
              text="Get Your Graphics Design Projects Done in minutes"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide
              image={bgimg3}
              text="Start Your Digital Marketing Campaigns up n running"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide
              image={bgimg4}
              text="Start Your Digital Marketing Campaigns up n running"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    );
};

export default Slider;