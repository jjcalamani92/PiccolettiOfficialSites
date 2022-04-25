import { Counter } from '../../ui';


	const cart = [{
      id: 'gfh545',
      title: "Chamarra Para Hombre Akiral - Gris",
      mark:'adidas',
      image: [
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647449150/piccoletti/products/chamarras/item01/RA41589-2120-G03_2_lg4nzn.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647449156/piccoletti/products/chamarras/item01/RA41589-2120-G03_3_jxv7lq.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647449163/piccoletti/products/chamarras/item01/RA41589-2120-G03_8_jleyts.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647449150/piccoletti/products/chamarras/item01/RA41589-2120-G03_2_lg4nzn.jpg"
      ],
      description:
        "¡Cómoda y ligera! Esta Chamarra acolchada cuello alto, tiene bolsillos con cremallera para llevar tus objetos personales, además, cuenta con salida de audio y abertura en manga para mayor comodidad. Su relleno es en RPET, material reciclado de botellas plásticas.",
      inStock: 7,
      sizes: ['XS','S','M','L','XL','XXL'],
      slug: "chamarra_para_hombre_akiral_gris",
      line:'ropa',
      category: "men",
      subCategory: 'chamarras',
      tags: ['sweatshirt'],
      oldPrice: 560,
      price: 649,
      quantity: 1
    },
    {
      id: 'gfh545',
      title: "Chamarra Para Hombre Akiral - Gris",
      mark:'adidas',
      image: [
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647449150/piccoletti/products/chamarras/item01/RA41589-2120-G03_2_lg4nzn.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647449156/piccoletti/products/chamarras/item01/RA41589-2120-G03_3_jxv7lq.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647449163/piccoletti/products/chamarras/item01/RA41589-2120-G03_8_jleyts.jpg",
        "https://res.cloudinary.com/dvcyhn0lj/image/upload/v1647449150/piccoletti/products/chamarras/item01/RA41589-2120-G03_2_lg4nzn.jpg"
      ],
      description:
        "¡Cómoda y ligera! Esta Chamarra acolchada cuello alto, tiene bolsillos con cremallera para llevar tus objetos personales, además, cuenta con salida de audio y abertura en manga para mayor comodidad. Su relleno es en RPET, material reciclado de botellas plásticas.",
      inStock: 7,
      sizes: ['XS','S','M','L','XL','XXL'],
      slug: "chamarra_para_hombre_akiral_gris",
      line:'ropa',
      category: "men",
      subCategory: 'chamarras',
      tags: ['sweatshirt'],
      oldPrice: 560,
      price: 649,
      quantity: 1
    },
    ]


export const CartComponent = () => {
	const deleteItemCart = () => {
		console.log('deleteItemCart');
	};
	const clearCart = () => {
		console.log('clearCart');
	};

	return (
		<>
			<section className="checkout">
				<div className="row">
					<h2>tu carrito</h2>
					{cart.map((data: any, index: number) => (
						<div className="cart-item" key={index}>
							
							<a className='image' href={`/${data.category}/${data.subCategory}/${data.id}`}>
								<img src={`${data.image[0]}`} alt={`${data.title}`} />
							</a>

							<div className="content">
								<h3>{data.title}</h3>
								<div className="price">
									{' '}
									<p>Precio:</p> Bs {data.price}
								</div>
                <Counter/>
                <br/>
                <div onClick={clearCart} className="btn">
      						eliminar producto
      					</div>
							</div>
						</div>
					))}
				</div>

				<div className="row">
					<h2>tu orden</h2>
					<div className="orders">
						<div className="order">
							<h3>Nro de productos</h3>
							<p> 19 Items</p>
						</div>
						<div className="order">
							<h3>Subtotal</h3>
							<p> 19 </p>
						</div>
						<div className="order">
							<h3>Impuestos</h3>
							<p> 19 </p>
						</div>
						<div className="order">
							<h3>Total</h3>
							<p> 19 </p>
						</div>
					</div>

					<button className="btn">Realizar pedido por whatsapp</button>
					<button onClick={clearCart} className="btn">
						Limpiar carrito
					</button>
				</div>
			</section>
		</>
	);
};
