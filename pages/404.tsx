import { Layout } from "../src/component/layout";

const Page404 = () => {
  return (
    <Layout title='Page Not Found' pageDescription='No hay nada que mostrar aqui'>
      <div
      style={{display:'flex', justifyContent:'center', alignItems:'center', height:'calc(100vh - 200px)' }}
      >
        <h1>404 |</h1>
        <h2> No encontramos ninguna página aqui</h2>
      </div>
    </Layout>
  )
} 

export default Page404;
