import Link from "next/link";
import Head from "next/head";

export const Layout = ({children, title = 'Next app'}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <div className="container">
          <Link href={'/'}><a>Events</a></Link>
          <Link href={'/users'}><a>Users</a></Link>
          <Link href={'/gists'}><a>Gists</a></Link>
        </div>
      </header>
      <main className='container'>
        {children}
      </main>
    </>
  )
};