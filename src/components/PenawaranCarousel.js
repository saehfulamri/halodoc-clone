import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation } from "swiper";

import penawaranMenarik1 from "./../assets/penawaranMenarik1.jpeg";
import penawaranMenarik2 from "./../assets/penawaranMenarik2.jpeg";
import penawaranMenarik3 from "./../assets/penawaranMenarik3.jpeg";
import Penawarancard from "./Penawarancard";

const PenawaranCarousel = () => {
    const [setSwiperRef] = useState(null);
    return (
        <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={3}
            centeredSlides={false}
            spaceBetween={25}
            pagination={{
                type: "fraction",
            }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper col-lg-12">
            <SwiperSlide>
                <a href="#">
                    <Penawarancard image={penawaranMenarik1} />
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="#">
                    <Penawarancard image={penawaranMenarik2} />
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="#">
                    <Penawarancard image={penawaranMenarik3} />
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="#">
                    <Penawarancard image={penawaranMenarik1} />
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="#">
                    <Penawarancard image={penawaranMenarik2} />
                </a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="#"></a>
                <Penawarancard image={penawaranMenarik3} />
            </SwiperSlide>
        </Swiper>
    );
};

export default PenawaranCarousel;
