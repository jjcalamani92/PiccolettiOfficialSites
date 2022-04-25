import NextLink  from 'next/link';

export const HeaderLogo  = ({logo}) => {
  	return (
		<div className="logo">
			<NextLink href='/' passHref>
        <img src={`${logo}`} alt="logo"/>
      </NextLink>
		</div>
	);
};
