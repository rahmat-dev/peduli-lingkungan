import Layout from "~/components/Layout";

export default function Home() {
  return (
    <Layout navbarFixed>
      <div className="grid min-h-screen place-items-center bg-hero-pattern bg-cover bg-right-bottom bg-no-repeat">
        <div className="mx-auto max-w-4xl p-6 text-center">
          <h1 className="text-4xl font-light leading-[3rem] text-white drop-shadow-md">
            Kami ada untuk melindungi keragaman kehidupan di Bumi. Untuk
            kelangsungan hidup Flora dan Fauna di Indonesia
          </h1>
        </div>
      </div>
    </Layout>
  );
}
