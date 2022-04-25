import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from 'swiper';
import { FC } from 'react';
interface Props {
	homes: any;
}


export const SwiperHome:FC<Props> = ({homes}) => {
	return (
    <>
      <Swiper
				slidesPerView={1}
				spaceBetween={30}
				loop={true}
				navigation={false}
				pagination={{
					clickable: true
				}}
				modules={[Navigation, Pagination]}
        className='image-display'
			>
				{homes.map((home, i) => (
					<SwiperSlide className="slide" key={i}>
						<div className="content">
							{/* <img src={`${data.imageBanner}`} alt="" /> */}
							<span>{home.content}</span>
							<h3>{home.title}</h3>
							<a href="#" className="btn">
								ver productos
							</a>
						</div>
						<div className="image">
							<img src={`${home.image}`} alt="" />
						</div>
						
					</SwiperSlide>
				))}
			</Swiper>
    </>
			
	);
};

