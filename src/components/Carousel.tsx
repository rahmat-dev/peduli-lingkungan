/* eslint-disable */
import { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";

const hero1 = "/assets/img/Rectangle 37.jpg";
const hero2 = "/assets/img/Rectangle 38.jpg";
const hero3 = "/assets/img/Rectangle 39.jpg";
const hero4 = "/assets/img/Rectangle 40.jpg";

const Carousel = () => {
  let swiper: any;

  const handlePaginationClick = (index: any) => {
    swiper.slideTo(index);
  };

  useEffect(() => {
    swiper = new Swiper(".swiper", {
      speed: 400,
      spaceBetween: 0,
      direction: "horizontal",
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        el: ".swiper-scrollbar",
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <div className="swiper text-white">
      <div className="swiper-wrapper">
        {/* Slides */}
        <div className="swiper-slide !flex items-center gap-16 rounded-3xl bg-[#3B9BDB] px-[100px] py-[60px]">
          <div className="flex-1">
            <p className="swiper-bold">
              Bagaimana perubahan iklim dapat mempengaruhi flora dan fauna, dan
              apa yang bisa dilakukan untuk melindungi mereka?
            </p>
            <p className="swiper-thin mt-8">
              Peningkatan suhu global dan perubahan pola curah hujan dapat
              mengakibatkan pergeseran habitat alami.
            </p>
          </div>
          <div className="flex-1">
            <img className="object-cover object-center" src={hero1} alt="" />
          </div>
        </div>
        <div className="swiper-slide !flex items-center gap-16 rounded-3xl bg-[#FF8049] px-[100px] py-[60px]">
          <div className="flex-1">
            <p className="swiper-bold">
              Bagaimana pentingnya menjaga habitat alami dalam menjaga
              keberlanjutan flora dan fauna?
            </p>
            <p className="swiper-thin mt-8">
              Habitat alami adalah lingkungan tempat flora dan fauna berkembang
              biak, mencari makanan, berlindung, dan memenuhi kebutuhan hidup
              lainnya. Setiap spesies memiliki kebutuhan khusus terkait habitat,
              seperti jenis tanah, suhu, kelembaban, dan vegetasi tertentu.
            </p>
          </div>
          <div className="flex-1">
            <img src={hero2} alt="" />
          </div>
        </div>
        <div className="swiper-slide !flex items-center gap-16 rounded-3xl bg-[#152C5B] px-[100px] py-[60px]">
          <div className="flex-1">
            <p className="swiper-bold">
              Bagaimana pentingnya menjaga keseimbangan ekosistem dalam
              melindungi flora dan fauna?
            </p>
            <p className="swiper-thin mt-8">
              Flora dan fauna memiliki hubungan erat dengan habitat alami di
              mana mereka tinggal. Keseimbangan ekosistem yang sehat memastikan
              tersedianya habitat yang memadai bagi flora dan fauna untuk
              berkembang biak.
            </p>
          </div>
          <div className="flex-1">
            <img src={hero3} alt="" />
          </div>
        </div>
        <div className="swiper-slide !flex items-center gap-16 rounded-3xl bg-[#397813] px-[100px] py-[60px]">
          <div className="flex-1">
            <p className="swiper-bold">
              Bagaimana pendekatan rehabilitasi dan reintroduksi digunakan dalam
              upaya pelestarian flora dan fauna yang dilindungi?
            </p>
            <p className="swiper-thin mt-8">
              Rehabilitasi melibatkan upaya pemulihan dan perawatan terhadap
              individu flora atau fauna yang terluka, sakit, atau terancam
              punah.
            </p>
          </div>
          <div className="flex-1">
            <img src={hero4} alt="" />
          </div>
        </div>
      </div>
      <div className="swiper-pagination">
        {/* Menampilkan swiper-pagination dengan titik-titik */}
        {[1, 2, 3, 4].map((index) => (
          <span
            key={index}
            onClick={() => handlePaginationClick(index - 1)}
            className="swiper-pagination-bullet"
          ></span>
        ))}
      </div>
      <div className="swiper-scrollbar hidden"></div>
    </div>
  );
};

export default Carousel;
