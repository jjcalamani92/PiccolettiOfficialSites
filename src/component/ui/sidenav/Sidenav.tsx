import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import NextLink from 'next/link';

import 'react-modern-drawer/dist/index.css';
import Drawer from 'react-modern-drawer';
import { useContext } from 'react';
import { UiContext } from '../../../context';
import { initialData } from '../../../../data'
import { NavLink } from '../navlink/NavLink';


export const Sidenav = () => {
  const { date } = initialData
	const { isMenuOpen, toggleSideMenu } = useContext(UiContext);

	return (
		<>
			<Drawer
				open={isMenuOpen}
				onClose={toggleSideMenu}
				direction="left"
				size={300}
				className="drawer"
			>
				<div className="logo-navbars" onClick={toggleSideMenu}>
					<NextLink href="/" passHref>
						<img src={date.logo} alt="" />
					</NextLink>
				</div>

				<form action="" className="search active">
					<input
						type="search"
						name=""
						placeholder="Busca aquí..."
						id="search-box"
					/>
					<label>
						<FontAwesomeIcon className="icon" icon={faSearch} />
					</label>
				</form>

				<div className="nav-links">
          <NavLink/>
          
					// {/*<ul>
					// 	<li className="nav-link">
					// 		<a onClick={handleClose} href="tienda">
					// 			Tienda
					// 		</a>
					// 	</li>
					// 	<li className="nav-link">
					// 		<a onClick={handleClose} href="linea_automotriz">
					// 			linea automotriz
					// 			<FontAwesomeIcon className="icon" icon={faCaretDown} />
					// 		</a>
					// 		 <div className="dropdown">
					// 			<ul>
					// 				{getProductByCategory(categories, 'linea_automotriz').map(
					// 					(data: ICategory, index: number) => (
					// 						<li className="dropdown-link" key={index}>
					// 							<a
					// 								onClick={handleClose}
					// 								href={`${data.category}/${data.subCategory}`}
					// 							>
					// 								{data.nameSubCategory}
					// 							</a>
					// 						</li>
					// 					)
					// 				)}

					// 				<div className="arrow"></div>
					// 			</ul>
					// 		</div>
					// 	</li>
					// 	<li className="nav-link">
					// 		<a href="#">
					// 			servicios
					// 			<FontAwesomeIcon className="icon" icon={faCaretDown} />
					// 		</a>
					// 		<div className="dropdown">
					// 			<ul>
					// 				<li className="dropdown-link">
					// 					<a href="#">Link 1</a>
					// 				</li>
					// 				<li className="dropdown-link">
					// 					<a href="#">Link 2</a>
					// 				</li>
					// 				<li className="dropdown-link">
					// 					<a href="#">
					// 						Link 3
					// 						<FontAwesomeIcon className="icon" icon={faCaretDown} />
					// 					</a>
					// 					<div className="dropdown second">
					// 						<ul>
					// 							<li className="dropdown-link">
					// 								<a href="#">Link 1</a>
					// 							</li>
					// 							<li className="dropdown-link">
					// 								<a href="#">Link 2</a>
					// 							</li>
					// 							<li className="dropdown-link">
					// 								<a href="#">Link 3</a>
					// 							</li>
					// 							<li className="dropdown-link">
					// 								<a href="#">
					// 									More
					// 									<FontAwesomeIcon
					// 										className="icon"
					// 										icon={faCaretDown}
					// 									/>
					// 								</a>
					// 								<div className="dropdown second">
					// 									<ul>
					// 										<li className="dropdown-link">
					// 											<a href="#">Link 1</a>
					// 										</li>
					// 										<li className="dropdown-link">
					// 											<a href="#">Link 2</a>
					// 										</li>
					// 										<li className="dropdown-link">
					// 											<a href="#">Link 3</a>
					// 										</li>
					// 										<div className="arrow"></div>
					// 									</ul>
					// 								</div>
					// 							</li>
					// 							<div className="arrow"></div>
					// 						</ul>
					// 					</div>
					// 				</li>
					// 				<li className="dropdown-link">
					// 					<a href="#">Link 4</a>
					// 				</li>
					// 				<div className="arrow"></div>
					// 			</ul>
					// 		</div>
					// 	</li>
					// 	<li className="nav-link">
					// 		<a onClick={handleClose} href="contacto">
					// 			Contacto
					// 		</a>
					// 	</li>
					// </ul> */}
				</div>
			</Drawer>
		</>
	);
};
