import Head from "next/head";

import Navbar from "~/components/Navbar";

interface LayoutProps {
  title?: string;
  children: React.ReactNode;
}

const Layout = ({ title = "Peduli Lingkungan", children }: LayoutProps) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <Navbar />
    <main>{children}</main>
  </>
);

export default Layout;
