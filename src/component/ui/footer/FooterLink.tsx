
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


const links = ['tienda', 'linea automotriz', 'servicios', 'contacto'];
export const FooterLink = () => {
	return (
		<div className="box">
			<h3>Links directos</h3>
			{links.map((link: any, i: number) => (
				<a href={`/${link}`} key={i}>
					<FontAwesomeIcon className="icon" icon={faChevronRight} />
					{link}
				</a>
			))}
		</div>
	);
};
