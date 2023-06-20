/* eslint-disable */
const google = "/assets/sponsor/google.png";
const apple = "/assets/sponsor/apple.png";
const dunkin = "/assets/sponsor/dunkin.png";
const multikino = "/assets/sponsor/Group.png";
const kfc = "/assets/sponsor/kfc.png";
const spotify = "/assets/sponsor/spotify.png";
const subway = "/assets/sponsor/subway-12.png";

const Sponsor = () => {
  return (
    <div className="h-90 flex flex-col items-center bg-[#F6F0E7] p-10 lg:p-20 xl:p-28">
      <p className="text-[20px] leading-[30px] text-[#EE4A62]">Sponsor</p>
      <h1 className="text-center text-[32px] leading-[48x]">
        Sponsor Kami <span className="text-[#EE4A62]">Berasal dari?</span>
      </h1>
      <hr className="mt-2 h-[6px] w-[141px] bg-[#1D9D84]" />

      <div className="mt-12">
        {/* <ul className="flex flex-wrap items-center justify-center gap-16"> */}
        <ul className="grid grid-cols-2 items-center justify-items-center gap-16 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7">
          <li>
            <img src={google} alt="google" />
          </li>
          <li>
            <img src={apple} alt="apple" />
          </li>
          <li>
            <img src={multikino} alt="multikino" />
          </li>
          <li>
            <img src={spotify} alt="spotify" />
          </li>
          <li>
            <img src={kfc} alt="kfc" />
          </li>
          <li>
            <img src={subway} alt="subway" />
          </li>
          <li>
            <img src={dunkin} alt="dunkin-donuts" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sponsor;
