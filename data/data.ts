import nextId from 'react-id-generator';

export const initialData = {
	homeSliders: [
		{
			id: nextId(),
			title: 'Venta Hasta 50% De Descuento',
			content: 'oferta especial',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647097427/piccoletti/home/home-img_hiqbzl.png'
		},
		{
			id: nextId(),
			title: 'Venta Hasta 40% De Descuento',
			content: 'oferta especial',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647615130/piccoletti/home/1-handsome-man-portrait-wearing-sunglasses-PGXE2JY_vvqt3d.png'
		},
		{
			id: nextId(),
			title: 'Venta Hasta 30% De Descuento',
			content: 'oferta especial',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647615214/piccoletti/home/portrait-of-hipster-male-in-striped-t-shirt-wears-7NQKBD2_i1tjwe.png'
		}
	],
	homeBanners: [
		{
			id: nextId(),
			title: 'Hasta el 30% de descuento',
			content: 'oferta limitada',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647098140/piccoletti/banner/cat-1_hq8iu2.jpg'
		},
		{
			id: nextId(),
			title: 'Hasta el 20% de descuento',
			content: 'oferta limitada',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647098139/piccoletti/banner/cat-2_cgsu0w.jpg'
		},
		{
			id: nextId(),
			title: 'Hasta el 10% de descuento',
			content: 'oferta limitada',
			image:
				'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647615331/piccoletti/banner/3sideways-shot-of-ginger-male-with-trendy-haircut-t-TSVU2BJ_kbsjxu.jpg'
		}
	],
	date: {
		name: 'piccoletti',
		domain: 'piccoletti.com',
		database: 'paintworkproducts',
		logo:
			'https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647095547/piccoletti-logo_j6hxbw.jpg',
		phoneNumber: 68125377,
		map:
			'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d478.12206819657405!2d-68.14811629921392!3d-16.527281696176196!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915edf63438207b7%3A0x32a48a41599e5d72!2sGran%20Plaza%2C%20Av.%20B%2C%20El%20Alto!5e0!3m2!1ses!2sbo!4v1646946478230!5m2!1ses!2sbo'
	}
};
