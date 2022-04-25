import { FooterLink } from './FooterLink';
import { FooterHorario } from './FooterHorario';
import { FooterContact } from './FooterContact';
import { FooterInfo } from './FooterInfo';

const initialData={
	date: {
		name: 'choco',
		domain: 'choco',
		logo:
			'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1649541738/pinturas/PUNTO_COLORS_EXPRESS_CHOCO_yoygoy.png',
		phoneNumber: 68125377,
		map:
			'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d478.12206819657405!2d-68.14811629921392!3d-16.527281696176196!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915edf63438207b7%3A0x32a48a41599e5d72!2sGran%20Plaza%2C%20Av.%20B%2C%20El%20Alto!5e0!3m2!1ses!2sbo!4v1646946478230!5m2!1ses!2sbo'
	}
}
export const Footer = () => {
	// const { date } = useSelector((state: State) => state.Start);
	const { date } = initialData;
	const { name, domain, logo, phoneNumber, map } = date;

	return (
		<>
			<section className="footer">
				<FooterLink />
				<FooterHorario />
				<FooterContact domain={domain} phoneNumber={phoneNumber} />
				<FooterInfo />
			</section>
		</>
	);
};
