import { FC } from 'react';
import { IProduct } from '../../../interface';
import { Card } from '../../ui';

interface Props {
	products: IProduct[];
}

export const ProductComponent: FC<Props> = ({ products }) => {
	return (
		<>
			<section className="product">
				{products.map((product, i) => (
					<Card key={i} product={product} />
				))}
			</section>
		</>
	);
};
