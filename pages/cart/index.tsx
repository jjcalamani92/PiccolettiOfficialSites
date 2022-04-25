import { Layout } from "../../src/component/layout"
import { CartComponent } from "../../src/component/page"
import { HeadingPrimary } from "../../src/component/ui"

const CartPage = () => {
  return(
    <Layout title='Carrito - 3' pageDescription='Carrito de compras de la tienda'>
      <HeadingPrimary titleP='carrito de compras'/>
      <CartComponent/>
    </Layout>
  )
}
export default CartPage