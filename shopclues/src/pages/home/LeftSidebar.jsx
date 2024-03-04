import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y ,Autoplay ,EffectFade } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';



// Images imports 
import slider1 from '../../assets/slider1.jpg'
import slider2 from '../../assets/slider2.jpg'
import slider3 from '../../assets/slider3.jpg'
import slider4 from '../../assets/slider4.jpg'
import slider5 from '../../assets/slider5.jpg'

const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
      {/* <h1>Left Side bar</h1> */}
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y ,Autoplay ,EffectFade]}
      spaceBetween={50}
      slidesPerView={1}
      // navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      autoplay = {{autoplay : true}}
      effect="fade"
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}

      className='swiper'
    >
      <SwiperSlide> <img src={slider1} alt="" style={{width :"100%", height: "50vh"}} /></SwiperSlide>
      <SwiperSlide><img src={slider2} alt="" style={{width :"100%", height: "50vh"}} /></SwiperSlide>
      <SwiperSlide><img src={slider3} alt=""style={{width :"100%", height: "50vh"}} /></SwiperSlide>
      <SwiperSlide><img src={slider4} alt="" style={{width :"100%", height: "50vh"}}/></SwiperSlide>
      <SwiperSlide><img src={slider5} alt="" style={{width :"100%", height: "50vh"}}/></SwiperSlide>
    </Swiper>
    </div>
  )
}

export default LeftSidebar
