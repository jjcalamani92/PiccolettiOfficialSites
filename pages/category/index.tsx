import { NextPage } from 'next';
import { Layout } from '../../src/component/layout';
import { HeadingPrimary } from '../../src/component/ui';

const CategoryPage: NextPage = () => {
	// const { productsw, isLoadingw } = useProduct('/wearproducts?category=woman');
	return (
		<Layout title={'Piccoletti - Ropa'} pageDescription={'la mejor ropa'}>
			<HeadingPrimary titleP="Ropa" />
		</Layout>
	);
};

export default CategoryPage;
