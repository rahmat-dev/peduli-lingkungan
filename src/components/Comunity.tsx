/* eslint-disable */
const comunity = "/assets/img/Image Komunitas.jpg";

const Comunity = () => {
  return (
    <div className="flex flex-col items-center p-[100px]">
      <h1 className="text-[32px] leading-[48x]">
        Memiliki <span className="text-[#EE4A62]">Komunitas</span> yang Banyak
      </h1>
      <hr className="mt-2 h-[6px] w-[141px] bg-[#1D9D84]" />
      <div className="mt-11 flex items-center gap-x-8">
        <div className="flex-1">
          <img src={comunity} alt="" className="" />
        </div>
        <div className="flex-1">
          <h2 className="mb-[30px] text-center text-3xl font-bold">
            Komunitas Perlindungan Flora dan Fauna
          </h2>
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
      <h1 className="mt-11 text-[32px] leading-[48x]">
        Populasi <span className="text-[#EE4A62]">Flora</span> dan{" "}
        <span className="text-[#EE4A62]">Fauna</span>
      </h1>
      <hr className="mt-2 h-[6px] w-[141px] bg-[#1D9D84]" />
      <div className="mt-[40px] flex w-1/2 gap-x-4">
        <div className="flex flex-1 flex-col items-center">
          <h1 className="text-[32px] leading-[48px]">
            <span className="font-bold">300 K</span> (17%)
          </h1>
          <p>Fauna di Indonesia</p>
          <hr className="mt-2 h-[6px] w-[69px] bg-[#1D9D84]" />
        </div>
        <div className="flex flex-1 flex-col items-center">
          <h1 className="text-[32px] leading-[48px]">
            <span className="font-bold">625 K</span> (35%)
          </h1>
          <p>Flora di Indonesia</p>
          <hr className="mt-2 h-[6px] w-[69px] bg-[#1D9D84]" />
        </div>
      </div>
    </div>
  );
};

export default Comunity;
