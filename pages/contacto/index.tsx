import { NextPage } from 'next'
import { Layout } from '../../src/component/layout'
import { HeadingPrimary } from '../../src/component/ui'


const ContactoPage: NextPage = () => {
  return (
    <Layout title={'Choco - Contacto'} pageDescription={'Contacto'}>
      <HeadingPrimary titleP='Ponte en contacto'/>
    </Layout>
  )
}

export default ContactoPage