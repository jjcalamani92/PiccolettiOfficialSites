
import { NextPage } from 'next'
import { Layout } from '../src/component/layout'
import { HomeComponent } from '../src/component/page'



const HomePage:NextPage = () => {
  return (
    <Layout title={'Piccoletti - Home'} pageDescription={'Encuentra tu ropa favorita'}>
      <HomeComponent/>
    </Layout>
  )
}


export default HomePage
