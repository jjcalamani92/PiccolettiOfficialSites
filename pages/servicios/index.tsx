import { NextPage } from 'next'
import { Layout } from '../../src/component/layout'
import { HeadingPrimary } from '../../src/component/ui'


const ServiciosPage: NextPage = () => {
  return (
    <Layout title={'Choco - Servicios'} pageDescription={'Nuestros Servicios'}>
      <HeadingPrimary titleP='Nuestros Servicios'/>
    </Layout>
  )
}

export default ServiciosPage
