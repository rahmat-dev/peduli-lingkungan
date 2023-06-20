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
    <div className="h-90 flex flex-col items-center bg-[#F6F0E7] p-[100px]">
      <p className="text-[20px] leading-[30px] text-[#EE4A62]">Sponsor</p>
      <h1 className="text-[32px] leading-[48x]">
        Sponsor Kami <span className="text-[#EE4A62]">Berasal dari?</span>
      </h1>
      <hr className="mt-2 h-[6px] w-[141px] bg-[#1D9D84]" />

      <div className="mt-12">
        <ul className="flex flex-wrap items-center justify-center gap-16">
          <li className="flex-1">
            <img src={google} alt="google" />
          </li>
          <li className="flex-1">
            <img src={apple} alt="apple" />
          </li>
          <li className="flex-1">
            <img src={multikino} alt="multikino" />
          </li>
          <li className="flex-1">
            <img src={spotify} alt="spotify" />
          </li>
          <li className="flex-1">
            <img src={kfc} alt="kfc" />
          </li>
          <li className="flex-1">
            <img src={subway} alt="subway" />
          </li>
          <li className="flex-1">
            <img src={dunkin} alt="dunkin-donuts" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sponsor;
