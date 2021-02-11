import Link from "next/link";
import Head from "next/head";

export const Layout = ({children, title = 'Next app'}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <header className='container'>
        <Link href={'/'}><a>Home</a></Link>
      </header>
      <main className='container'>
        {children}
      </main>
    </>
  )
};