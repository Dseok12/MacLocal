import React from 'react';
import './Body.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';

function Body() {
  return (
    <div className='BodyWrap'>
      <main className='topVi'>
        <div className='inner'>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          navigation
          pagination={{
            clickable: true,
          }}
          Navigation={true}
          className="top_slider"
        >
          <SwiperSlide>
            <div className='slide_txt_01'>
              <p>
                안녕하세요.
                <span>저는 정원석입니다.</span>
              </p>
              <img src='../../assets/img/logo.png' className='ani_turn'/>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slide_txt_01'>
              <p>
                안녕하세요.
                <span>저는 정원석입니다.</span>
              </p>
              <img src='../../assets/img/logo.png'/>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slide_txt_01'>
              <p>
                안녕하세요.
                <span>저는 정원석입니다.</span>
              </p>
              <img src='../../assets/img/logo.png'/>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slide_txt_01'>
              <p>
                안녕하세요.
                <span>저는 정원석입니다.</span>
              </p>
              <img src='../../assets/img/logo.png'/>
            </div>
          </SwiperSlide>
        </Swiper>
        </div>
      </main>
    </div>
  )
}

export default Body