import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import NextLink from 'next/link';

import { FC } from 'react';
import { IProduct } from '../../../interface';

interface Props {
	product: IProduct;
}

export const Card: FC<Props> = ({ product }) => {
	return (
		<NextLink href={`/product/${product.slug}`} passHref prefetch={false}>
			<a className="card">
				<div className="image">
					<img src={`${product.image[0]}`} alt={`${product.title}`} />
				</div>
				<div className="content">
					<h3>{product.title}</h3>
					<div className="stars">
						<FontAwesomeIcon className="icon" icon={faStar} />
						<FontAwesomeIcon className="icon" icon={faStar} />
						<FontAwesomeIcon className="icon" icon={faStar} />
						<FontAwesomeIcon className="icon" icon={faStar} />
						<FontAwesomeIcon className="icon" icon={faStarHalfAlt} />
					</div>
					<div className="price">
						Bs {product.price} <span>Bs {product.oldPrice}</span>
					</div>
				</div>
			</a>
		</NextLink>
	);
};
