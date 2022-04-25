import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import NextLink from 'next/link';

const dates = ['men', 'women', 'kid'];

export const NavLink = () => {
	return (
		<ul>
			<li className="nav-link">
				<NextLink href="/category" passHref prefetch={false}>
					<a>
						ropas
						<FontAwesomeIcon className="icon" icon={faCaretDown} />
					</a>
				</NextLink>
				<div className="dropdown">
					<ul>
						{dates.map((data, i) => (
							<li className="dropdown-link" key={i}>
								<Link href={`/category/${data}`}>
									<a>{data}</a>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</li>

			<li className="nav-link">
				<Link href="/servicios">
					<a>servicios</a>
				</Link>
			</li>
			<li className="nav-link">
				<Link href="/contacto">
					<a>contacto</a>
				</Link>
			</li>
			<li className="nav-link">
				<Link href="/productos">
					<a>productos</a>
				</Link>
			</li>
		</ul>
	);
};
