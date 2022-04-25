export interface ICategory {
	id: string;
	line: string;
	category: string;
	subCategory: string;
	nameLine: string;
	nameCategory: string;
	nameSubCategory: string;
	image: string;
}

export interface ICategories {
	categories: ICategory[];
}
