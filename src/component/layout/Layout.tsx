import Head from "next/head";
import { FC } from "react";
import { initialData } from "../../../data";
import { Footer, Header, Sidenav } from "../ui";

interface Props {
  title: string;
  pageDescription: string;
  imageFullUrl?: string;
  children: any;
}

export const Layout: FC<Props> = ({ title, children,  pageDescription, imageFullUrl}) => {
  const client = initialData
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="keywords"/>
        <meta name="description" content={pageDescription} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="og:product"/>
        {
          imageFullUrl && (
              <meta property="og:image" content={imageFullUrl}/>
          )
        }
      </Head>
      <Header date={client.date}/>
      <Sidenav/>
      <main
      >
        { children }
      </main>
      <Footer/>
    </>
  )
}
