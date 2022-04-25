import { faCartPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import NextLink from "next/link"
import { Layout } from "../../src/component/layout"

const EmptyPage = () => {
  return(
    <Layout title='Carrito Vació' pageDescription='No hay artículos en el carrito de compras'>
      <section className='cartShopping'>
        <FontAwesomeIcon className="icon" icon={faCartPlus} />
        <h1>Su carrito está vació</h1>
        <NextLink href="/"  passHref>
					<a className='btn'>Volver a inicio</a>
				</NextLink>
      </section>
    </Layout>
  )
}
export default EmptyPage