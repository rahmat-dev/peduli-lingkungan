import Link from "next/link";

/* eslint-disable */
const logo = "/assets/logo/Icon.png";

const Footer = () => {
  return (
    <footer className="bg-black p-10 lg:p-20 xl:p-28">
      <div className="grid grid-cols-1 gap-10 bg-black md:grid-cols-2 lg:grid-cols-4 lg:gap-4">
        <div className="flex flex-col">
          {/* <img src={logo} alt="logo" className=" w-32 cursor-pointer lg:w-64" /> */}

          <div className="w-min">
            <Link
              href="/"
              className="flex flex-col text-right text-2xl font-semibold leading-none text-white drop-shadow-md"
            >
              <span className="text-4xl">Peduli</span>
              <span>Lingkungan</span>
            </Link>
          </div>
          {/* <ul className="mt-4 flex gap-x-[12px]">
            <li className="icon">
              <a href=""></a>
            </li>
            <li className="icon">
              <a href=""></a>
            </li>
            <li className="icon">
              <a href=""></a>
            </li>
            <li className="icon">
              <a href=""></a>
            </li>
          </ul> */}
        </div>
        <div className="flex flex-col">
          <h2 className="mb-4 text-teal-400">ABOUT APP</h2>
          <ul className="font-light leading-[29px] text-white">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/donation">Donasi</Link>
            </li>
            <li>
              <Link href="/petition">Petisi</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h2 className="mb-4 text-teal-400">CONTACT</h2>
          <ul className="font-light leading-[29px] text-white">
            <li>faunafoundation@gmail.id</li>
            <li>+62 813 2208 - 1996</li>
            <li>Medan, Indonesia</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h2 className="mb-4 text-teal-400">INFORMATION</h2>
          <ul className="font-light text-white">
            <li>
              Ada banyak fauna di Indonesia membutuhkan perlindungan. Berikut 3
              upaya konservasi satwa langka di Indonesia :{" "}
            </li>
            <li className="mt-4 text-sm leading-[28px]">
              Memberikan edukasi dan sosialisasi
            </li>
            <li className="text-sm leading-[28px]">Membuat penangkaran</li>
            <li className="text-sm leading-[28px]">
              Mendukung upaya pelestarian
            </li>
          </ul>
        </div>
      </div>
      <p className="mt-32 w-full text-center font-bold text-white">
        Copy Right 2023 ~{" "}
        <span className="mb-4 text-teal-400">Peduli.Lingkungan</span> All rights
        reserved
      </p>
    </footer>
  );
};

export default Footer;
