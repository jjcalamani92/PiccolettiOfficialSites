import { NextPage } from 'next';
import { useProduct } from '../../hooks';
import { Layout } from '../../src/component/layout';
import { ProductComponent } from '../../src/component/page';
import { HeadingPrimary } from '../../src/component/ui';

const MujerPage: NextPage = () => {
	const { products, isLoading } = useProduct('/wearproducts?category=women');
	return (
		<Layout
			title={'Piccoletti - Mujeres'}
			pageDescription={'la mejor ropa para mujer'}
		>
			<HeadingPrimary titleP="Mujeres" />
			{isLoading ? (
				<h1>Cargando....</h1>
			) : (
				<ProductComponent products={products} />
			)}
		</Layout>
	);
};

export default MujerPage;
