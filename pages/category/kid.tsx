import { NextPage } from 'next';
import { useProduct } from '../../hooks';
import { Layout } from '../../src/component/layout';
import { ProductComponent } from '../../src/component/page';
import { HeadingPrimary } from '../../src/component/ui';

const NiñoPage: NextPage = () => {
	const { products, isLoading } = useProduct('/wearproducts?category=kid');
	return (
		<Layout
			title={'Piccoletti - Niños'}
			pageDescription={'la mejor ropa para niños'}
		>
			<HeadingPrimary titleP="Niños" />
			{isLoading ? (
				<h1>Cargando....</h1>
			) : (
				<ProductComponent products={products} />
			)}
		</Layout>
	);
};

export default NiñoPage;
