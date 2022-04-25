
import { initialData } from "../../../../data";
import { SwiperHome } from "../../ui/swiper/SwiperHome";

export const HomeComponent = () => {
	const { homeSliders } = initialData;
	return (
		<section className="home">
			<SwiperHome homes={homeSliders}/>
		</section>
	);
};
