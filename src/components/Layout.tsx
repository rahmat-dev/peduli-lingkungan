import Head from "next/head";

// import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";
import ScrollToTop from "~/components/ScrollToTop";

interface LayoutProps {
  title?: string;
  children: React.ReactNode;
  navbarClassName?: string;
  navbarFixed?: boolean;
}

const Layout = ({
  title = "Peduli Lingkungan",
  children,
  navbarClassName,
  navbarFixed,
}: LayoutProps) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <Navbar className={navbarClassName} fixed={navbarFixed} />
    <main>{children}</main>
    {/* <Footer /> */}
    <ScrollToTop />
  </>
);

export default Layout;
