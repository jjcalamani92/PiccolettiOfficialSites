import { ICategories } from '../src/interface/category';
import nextId from 'react-id-generator';

export const initialDataCategory: ICategories = {
	categories: [
		{
			id: nextId(),
			line: 'ropa',
			category: 'hombre',
			subCategory: 'poleras',
			nameLine: 'ropa',
			nameCategory: 'hombre',
			nameSubCategory: 'poleras',
			image:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647102547/piccoletti/catetgory/1867565_zxlevb.png"
		},
		{
			id: nextId(),
			line: 'ropa',
			category: 'hombre',
			subCategory: 'camisetas',
			nameLine: 'ropa',
			nameCategory: 'hombre',
			nameSubCategory: 'camisetas',
			image:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647099576/piccoletti/catetgory/2957379_dqbaud.png"
		},
		{
			id: nextId(),
			line: 'ropa',
			category: 'mujer',
			subCategory: 'vestidos',
			nameLine: 'ropa',
			nameCategory: 'mujer',
			nameSubCategory: 'vestidos',
			image:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647099598/piccoletti/catetgory/1785375_ync0oq.png"
		},
		{
			id: nextId(),
			line: 'ropa',
			category: 'hombre',
			subCategory: 'camisas',
			nameLine: 'ropa',
			nameCategory: 'hombre',
			nameSubCategory: 'camisas',
			image:
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647099613/piccoletti/catetgory/1749000_u8wcue.png"
		},
		
	]
};
