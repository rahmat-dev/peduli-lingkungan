/* eslint-disable */
import { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";
import { cn } from "~/utils/ui";

const hero1 = "/assets/img/Rectangle 37.jpg";
const hero2 = "/assets/img/Rectangle 38.jpg";
const hero3 = "/assets/img/Rectangle 39.jpg";
const hero4 = "/assets/img/Rectangle 40.jpg";

const CarouselItem = ({
  title,
  description,
  className,
  img,
}: {
  title: string;
  description: string;
  className: string;
  img: string;
}) => (
  <div
    className={cn(
      "swiper-slide items-center gap-16 rounded-3xl p-8 lg:!flex lg:p-20 xl:p-28",
      className
    )}
  >
    <div className="flex-1">
      <h4 className="swiper-bold">{title}</h4>
      <p className="swiper-thin mt-8">{description}</p>
    </div>
    <div className="mt-6 flex-1">
      <img
        className="rounded-3xl object-cover object-center"
        src={img}
        alt=""
      />
    </div>
  </div>
);

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
        <CarouselItem
          title="Bagaimana perubahan iklim dapat mempengaruhi flora dan fauna, dan apa yang bisa dilakukan untuk melindungi mereka?"
          description="Peningkatan suhu global dan perubahan pola curah hujan dapat mengakibatkan pergeseran habitat alami."
          img={hero1}
          className="bg-[#3B9BDB]"
        />
        <CarouselItem
          title="Bagaimana pentingnya menjaga habitat alami dalam menjaga keberlanjutan flora dan fauna?"
          description="Habitat alami adalah lingkungan tempat flora dan fauna berkembang biak, mencari makanan, berlindung, dan memenuhi kebutuhan hidup lainnya. Setiap spesies memiliki kebutuhan khusus terkait habitat, seperti jenis tanah, suhu, kelembaban, dan vegetasi tertentu."
          img={hero2}
          className="bg-[#FF8049]"
        />
        <CarouselItem
          title="Bagaimana pentingnya menjaga keseimbangan ekosistem dalam melindungi flora dan fauna?"
          description="Flora dan fauna memiliki hubungan erat dengan habitat alami di mana mereka tinggal. Keseimbangan ekosistem yang sehat memastikan tersedianya habitat yang memadai bagi flora dan fauna untuk berkembang biak."
          img={hero3}
          className="bg-[#152C5B]"
        />
        <CarouselItem
          title="Bagaimana pendekatan rehabilitasi dan reintroduksi digunakan dalam upaya pelestarian flora dan fauna yang dilindungi?"
          description="Rehabilitasi melibatkan upaya pemulihan dan perawatan terhadap individu flora atau fauna yang terluka, sakit, atau terancam punah."
          img={hero3}
          className="bg-[#397813]"
        />
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
