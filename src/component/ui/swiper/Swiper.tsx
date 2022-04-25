import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Thumbs } from 'swiper';
import { FC } from 'react';
import { useState } from 'react';
interface Props {
	image: string[];
}


export const SwiperComponent:FC<Props> = ({image}) => {
const [activeThumb, setActiveThumb] = useState(null);
	return (
    <>
      <Swiper
				slidesPerView={1}
				spaceBetween={30}
				loop={true}
				navigation={true}
				pagination={{
					clickable: true
				}}
        grabCursor={true}
        thumbs={{swiper: activeThumb}}
				modules={[Navigation, Pagination, Thumbs]}
        className='image-display'
			>
				{image.map((images, i) => (
					<SwiperSlide className="slide" key={i}>
						<img src={`${images}`} alt="" />
						
					</SwiperSlide>
				))}
			</Swiper>
      
      <Swiper
        onSwiper={setActiveThumb}
				slidesPerView={4}
				spaceBetween={10}
				loop={true}
				navigation={false}
				
				modules={[Navigation, Pagination, Thumbs]}
        className='image-select'
			>
				{
          image.map((images, i) => (
					<SwiperSlide className="image-select-item" key={i}>
						<img src={`${images}`} alt="" />
						
					</SwiperSlide>
          
				))}
			</Swiper>
    </>
			
	);
};

