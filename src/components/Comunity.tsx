/* eslint-disable */
const comunity = "/assets/img/Image Komunitas.jpg";

const Comunity = () => {
  return (
    <div className="flex flex-col items-center p-10 lg:p-20 xl:p-28">
      <h2 className="text-center text-[32px] leading-[48x]">
        Memiliki <span className="text-[#EE4A62]">Komunitas</span> yang Banyak
      </h2>
      <hr className="mt-2 h-[6px] w-[141px] bg-[#1D9D84]" />
      <div className="mt-11 flex flex-col items-center gap-x-8 md:flex-row">
        <div className="mb-4 flex-1">
          <img src={comunity} alt="" className="" />
        </div>
        <div className="flex-1">
          <h3 className="mb-[30px] text-center text-3xl font-bold md:text-left">
            Komunitas Perlindungan Flora dan Fauna
          </h3>
          <p className="text-xl">
            Komunitas perlindungan flora dan fauna adalah kelompok atau
            organisasi yang berkomitmen untuk melindungi, melestarikan, dan
            mempromosikan keberlanjutan flora dan fauna di suatu wilayah atau
            secara global. Tujuan utama dari komunitas ini adalah untuk menjaga
            keanekaragaman hayati, mencegah kepunahan spesies, dan mempromosikan
            kehidupan yang seimbang antara manusia dan alam.
          </p>
        </div>
      </div>
      <h2 className="mt-11 text-[32px] leading-[48x]">
        Populasi <span className="text-[#EE4A62]">Flora</span> dan{" "}
        <span className="text-[#EE4A62]">Fauna</span>
      </h2>
      <hr className="mt-2 h-[6px] w-[141px] bg-[#1D9D84]" />
      <div className="mt-[40px] flex w-1/2 gap-x-4 text-center">
        <div className="flex flex-1 flex-col items-center">
          <h3 className="text-[32px] leading-[48px]">
            <span className="font-bold">300 K</span> (17%)
          </h3>
          <p>Fauna di Indonesia</p>
          <hr className="mt-2 h-[6px] w-[69px] bg-[#1D9D84]" />
        </div>
        <div className="flex flex-1 flex-col items-center">
          <h3 className="text-[32px] leading-[48px]">
            <span className="font-bold">625 K</span> (35%)
          </h3>
          <p>Flora di Indonesia</p>
          <hr className="mt-2 h-[6px] w-[69px] bg-[#1D9D84]" />
        </div>
      </div>
    </div>
  );
};

export default Comunity;
