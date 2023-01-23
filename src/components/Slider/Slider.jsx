import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from "swiper";
import s from './Slider.module.scss';
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination]);

export default () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation={true}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            className={s.mySwiper}
        >
            <SwiperSlide><div><img className={s.slide} src="img/Ronald-card.png" alt=""></img></div></SwiperSlide>
            <SwiperSlide><div><img className={s.slide} src="img/Ronald-card.png" alt=""></img></div></SwiperSlide>
            <SwiperSlide><div><img className={s.slide} src="img/Ronald-card.png" alt=""></img></div></SwiperSlide>
        </Swiper>
    )
}

