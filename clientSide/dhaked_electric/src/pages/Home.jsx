import React, { useEffect, useState } from "react";
import data from "../db.json";
// import Swiper from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

let datas = data.electronics;

console.log(datas.length);

const Home = () => {
  const data_length = datas.length;
  const [index, setIndex] = useState(0);
  const handleNext = () => {
    setIndex((prev) => {
      if (prev == data_length - 1) {
        console.log("inside", prev);
        return 0;
      }
      console.log("outside", prev);
      return prev + 1;
    });
    // if (index == data_length - 1) {
    //   setIndex(0);
    // } else {
    //   setIndex(index + 1);
    // }
  };
  const handlePrev = () => {
    if (index == 0) {
      setIndex(data_length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  useEffect(() => {
    let intervalId = setInterval(handleNext, 2000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <div className="relative">
        <div
          onClick={handlePrev}
          className="absolute text-white bg-black p-2 top-[50%] left-5"
        >
          {"<"}
        </div>
        <img
          src={datas[index].image_url}
          alt="image not found"
          className="w-full h-screen"
        />
        <div
          onClick={handleNext}
          className="absolute text-white bg-black p-2 top-[50%] right-5"
        >
          {">"}
        </div>
      </div>
      {/* about store section */}
      <div className="md:flex px-8 md:my-10">
        <div className="md:w-1/2 pt-5">
          <h2 className="font-bold text-3xl text-center mb-2 italic">
            About Our Store
          </h2>
          <p className="text-justify italic pb-4 sm:pb-0">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
            rerum quasi sunt animi natus asperiores minus quaerat ad quas at
            eaque nisi fuga culpa voluptatem, eum, dolorum tempore consequuntur
            odio! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
            soluta vitae in ratione, laudantium, ab unde iusto accusantium, iste
            ipsam tempora nam veniam quo blanditiis facere voluptate? Vitae,
            provident repudiandae.
            <span className="hidden md:inline">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
              laborum, nostrum cupiditate iure enim officiis ipsum itaque minima
              error iste, excepturi delectus, eius rerum et? Obcaecati sapiente
              similique harum! Distinctio. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Possimus mollitia perferendis saepe
              nobis reprehenderit quidem corrupti necessitatibus illo
              repellendus id nemo praesentium modi, odit maxime, voluptatibus
              obcaecati, iste harum perspiciatis?
            </span>
          </p>
        </div>
        <div className="w-1/2 hidden md:block">
          <img
            src="https://3.imimg.com/data3/TB/KQ/MY-238885/videocon-ha-500x500.jpg"
            alt=""
            className="w-full h-[400px]"
          />
        </div>
      </div>
      {/* our services section  */}
      {/* className="bg-pink-100" */}
      <div className="bg-pink-100 pt-4">
        <div className="w-[85%] m-auto ">
          <h1 className="text-4xl font-bold italic text-center mb-8  ">
            Our Services
          </h1>
          <div className="grid  grid-cols-[repeat(1,1fr)] lg:grid-cols-[repeat(4,1fr)] sm:grid-cols-[repeat(2,1fr)] gap-x-5 gap-y-6 sm:gap-y-0">
            <div className="shadow-service bg-yellow-300">
              <img
                src="https://png.pngtree.com/background/20230808/original/pngtree-digital-devices-for-productivity-laptop-mobile-phone-and-tablet-pc-photo-picture-image_4512002.jpg"
                alt=""
                className="w-full h-[350px]"
              />
              <h3 className="text-center text-xl font-bold italic text-pink-600 mb-4 mt-2">
                Laptop & Mobiles
              </h3>
            </div>
            <div className="shadow-service bg-yellow-300">
              <img
                src="https://images.hindustantimes.com/tech/img/2024/03/23/1600x900/sgddxgfhhc_1711231456166_1711231463102.jpg"
                alt=""
                className="w-full h-[350px] "
              />
              <h3 className="text-center text-xl font-bold italic text-pink-600 mb-4 mt-2">
                Laptop & Mobiles
              </h3>
            </div>
            <div className="shadow-service bg-yellow-300">
              <img
                src="https://www.shutterstock.com/image-photo/home-appliances-tv-refrigerator-washing-260nw-2248825351.jpg"
                alt=""
                className="w-full h-[350px] "
              />
              <h3 className="text-center text-xl font-bold italic text-pink-600 mb-4 mt-2">
                Laptop & Mobiles
              </h3>
            </div>
            <div className="shadow-service bg-yellow-300">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSixzSyETiHkN2IjpHbF02yRQsU-oXtBk3Ujg&s"
                alt=""
                className="w-full h-[350px] "
              />
              <h3 className="text-center text-xl font-bold italic text-pink-600 mb-4 mt-2">
                Laptop & Mobiles
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-10">
        <Swiper
          navigation={true}
          pagination={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          speed={2000}
          loop={true}
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={3}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <div className="w-[400px]">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRA0_c4qiaq_l5K1M3dRVSX11cPtEOtFItWA&s"
                alt=""
                className="w-full h-[300px] "
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[400px]">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjN75Yp-tsy7f3A9C0XIwS8fIkRe_PgzQMyg&s"
                alt=""
                className="w-full h-[300px] "
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[400px]">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIrbinOldPCaoFrVtPiCm-btvi4ZqvG4U8HA&s"
                alt=""
                className="w-full h-[300px] "
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[400px]">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlD1dcE5geFrZEoziyaLbN_tbvlb_QPmXpyg&s"
                alt=""
                className="w-full h-[300px] "
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[400px]">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUs-Ae8WOix_w7ABGTrlAaFaL9PGARKXbhAQ&s"
                alt=""
                className="w-full h-[300px] "
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[400px]">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqJ5foUVi76SIkszzmZJANbXdxoBvJ3aoO2Q&s"
                alt=""
                className="w-full h-[300px] "
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[400px]">
              <img
                src="https://www.shutterstock.com/image-photo/home-appliances-tv-refrigerator-washing-260nw-2248825351.jpg"
                alt=""
                className="w-full h-[300px] "
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[400px]">
              <img
                src="https://www.intex.in/cdn/shop/files/LED-SHF3263.jpg?v=1750331049"
                alt=""
                className="w-full h-[300px] "
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[400px]">
              <img
                src="https://www.shutterstock.com/image-photo/home-appliances-tv-refrigerator-washing-260nw-2248825351.jpg"
                alt=""
                className="w-full h-[300px] "
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[400px]">
              <img
                src="https://thomsonhome.in//wp-content/uploads/2025/03/43505565771000x1000-500x500.webp"
                alt=""
                className="w-full h-[300px] "
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[400px]">
              <img
                src="https://www.shutterstock.com/image-photo/home-appliances-tv-refrigerator-washing-260nw-2248825351.jpg"
                alt=""
                className="w-full h-[300px] "
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[400px]">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSixzSyETiHkN2IjpHbF02yRQsU-oXtBk3Ujg&s"
                alt=""
                className="w-full h-[300px] "
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[400px]">
              <img
                src="https://www.shutterstock.com/image-photo/home-appliances-tv-refrigerator-washing-260nw-2248825351.jpg"
                alt=""
                className="w-full h-[300px] "
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[400px]">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSixzSyETiHkN2IjpHbF02yRQsU-oXtBk3Ujg&s"
                alt=""
                className="w-full h-[300px] "
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
