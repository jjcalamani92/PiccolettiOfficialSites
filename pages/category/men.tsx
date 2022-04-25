import { NextPage } from 'next';
import { useProduct } from '../../hooks';
import { Layout } from '../../src/component/layout';
import { ProductComponent } from '../../src/component/page';
import { HeadingPrimary } from '../../src/component/ui';

const HombrePage: NextPage = () => {
	const { products, isLoading } = useProduct('/wearproducts?category=men');
	return (
		<Layout
			title={'Piccoletti - Hombres'}
			pageDescription={'la mejor ropa para hombre'}
		>
			<HeadingPrimary titleP="hombres" />
			{isLoading ? (
				<h1>Cargando....</h1>
			) : (
				<ProductComponent products={products} />
			)}
		</Layout>
	);
};

export default HombrePage;
