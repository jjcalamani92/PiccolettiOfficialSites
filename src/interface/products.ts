export interface IProduct {
	_id: string;
	title: string;
	mark: string;
	image: string[];
	description: string;
	inStock: number;
	sizes: ISizes[];
	slug: string;
	line: string;
	category: 'men' | 'women' | 'kid' | 'unisex';
	subCategory: ISubCategory;
	price: number;
	oldPrice: number;
	tags: string[];
	client: string;
	status: boolean;

	createdAt: string;
	updatedAt: string;
}
export type ISizes = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';
export type ISubCategory = 'chamarras' | 'pantalones' | 'poleras' | 'camisas';
