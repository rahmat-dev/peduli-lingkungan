import Image from "next/image";
import Carousel from "~/components/Carousel";
import Comunity from "~/components/Comunity";
import Footer from "~/components/Footer";
import Layout from "~/components/Layout";
import Sponsor from "~/components/Sponsor";

const Home = () => {
  return (
    <Layout navbarFixed>
      <div className="grid min-h-screen place-items-center bg-hero-pattern bg-cover bg-right-bottom bg-no-repeat">
        <div className="mx-auto max-w-4xl p-6 text-center">
          <h1 className="text-4xl font-semibold leading-[3rem] text-white drop-shadow-md">
            Kami ada untuk melindungi keragaman kehidupan di Bumi. Untuk
            kelangsungan hidup Flora dan Fauna di Indonesia
          </h1>
        </div>
      </div>

      <div className="h-[672px] w-full p-[100px]">
        <div className="flex h-[472px] w-full">
          <div className="h-full flex-1 pr-4">
            <p className="mb-[20px] text-[40px] font-semibold leading-[45px]">
              Mulai langkah pertama dalam melestarikan{" "}
              <span className="font-bold text-teal-500">Flora</span> dan{" "}
              <span className="font-bold text-teal-500">Fauna</span> yang
              dilindungi di Indonesia
            </p>
            <p className="mb-[35px] text-[25.5px]">
              Ayo ajak masyarakat untuk mendukung peringatan ini supaya mereka
              lebih peduli lagi terhadap kelestarian satwa-satwa liar yang ada
              di dunia.
            </p>
            <button className="text-default rounded-lg bg-[#1D9D84] px-[50px] py-[10px] text-white transition duration-300 ease-in-out hover:scale-105 hover:bg-teal-700">
              Hubungi Kami
            </button>
          </div>
          <div className="flex h-full flex-1 items-center justify-center pl-4">
            <div
              className="relative h-auto w-full xl:w-3/4"
              style={{ aspectRatio: 1575 / 1416 }}
            >
              <Image fill src="/assets/img/hero.png" alt="img" />
            </div>
          </div>
        </div>
      </div>

      <Carousel />

      <Comunity />

      <Sponsor />

      <div className="p-[100px]">
        <div>
          <h1 className="mb-4 text-[32px] font-semibold leading-[48px]">
            Pelestarian Flora Di Indonesia
          </h1>
          <p className="mb-8 text-[24px] leading-[36px] tracking-[1px]">
            Pelestarian flora di Indonesia adalah upaya untuk melindungi,
            memelihara, dan mengelola keanekaragaman tumbuhan yang ada di
            wilayah Indonesia. Indonesia merupakan salah satu negarayang
            memiliki kekayaan flora yang sangat besar, dengan ribuan spesies
            tumbuhan yang endemik dan unik.
          </p>
          <p className="mb-8 text-[24px] leading-[36px] tracking-[1px]">
            Salah satu aspek penting dalam pelestarian flora di Indonesia adalah
            konservasi habitat. Habitat alami tumbuhan perlu dijaga dan
            dipulihkan agar flora dapat tumbuh dan berkembang dengan baik. Hal
            ini melibatkan upaya dalam melestarikan hutan-hutan alami, lahan
            basah, padang rumput, terumbu karang, dan berbagai ekosistem lainnya
            yang menjadi rumah bagi flora Indonesia.
          </p>
          <p className="text-[24px] leading-[36px] tracking-[1px]">
            Selain itu, upaya pelestarian flora juga melibatkan identifikasi,
            pemetaan, dan penelitian terhadap spesies tumbuhan yang ada di
            Indonesia. Ini membantu memahami keberadaan dan keunikan flora serta
            memastikan bahwa spesies yang terancam punah atau langka mendapatkan
            perlindungan khusus.
          </p>
        </div>
        <div>
          <h1 className="mb-4 mt-[60px] text-[32px] font-semibold leading-[48px]">
            Pelestarian Fauna Di Indonesia
          </h1>
          <p className="mb-8 text-[24px] leading-[36px] tracking-[1px]">
            Pelestarian fauna di Indonesia melibatkan upaya untuk melindungi,
            memelihara, dan mengelola keanekaragaman hewan yang ada di wilayah
            Indonesia. Indonesia merupakan salah satu negara yang kaya akan
            keanekaragaman hayati dengan ribuan spesies hewan yang unik dan
            endemik.
          </p>
          <p className="mb-8 text-[24px] leading-[36px] tracking-[1px]">
            Salah satu aspek penting dalam pelestarian fauna di Indonesia adalah
            konservasi habitat. Habitat alami hewan perlu dijaga dan dipulihkan
            agar fauna dapat hidup dan berkembang dengan baik. Hal ini
            melibatkan upaya dalam pelestarian hutan-hutan alami, lahan basah,
            sungai, dan berbagai ekosistem lainnya yang menjadi rumah bagi fauna
            Indonesia.
          </p>
          <p className="text-[24px] leading-[36px] tracking-[1px]">
            Pelestarian fauna juga melibatkan upaya dalam menjaga populasi hewan
            yang terancam punah atau langka. Ini melibatkan pengawasan ketat
            terhadap perdagangan ilegal hewan liar, perburuan liar, dan
            pengrusakan habitat yang mengancam keberlangsungan hidup mereka.
            Perlindungan khusus diberikan kepada spesies yang terancam punah
            dengan melarang penangkapan, memulihkan populasi, dan menyediakan
            kawasan konservasi yang aman.
          </p>
        </div>
      </div>

      <Footer />
    </Layout>
  );
};

export default Home;
