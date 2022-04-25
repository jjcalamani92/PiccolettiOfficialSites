import { HeaderIcon } from "./HeaderIcon";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderNavbar } from "./HeaderNavbar";


export const Header= ({date}) => {
  
	return (
			<header>
        <HeaderLogo logo={date.logo}/>
        <HeaderNavbar />
        <HeaderIcon/>
			</header>
	);
};
