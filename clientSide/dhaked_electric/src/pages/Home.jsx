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
  // ######## Custom slide make
  // const data_length = datas.length;
  // const [index, setIndex] = useState(0);
  // const handleNext = () => {
  //   setIndex((prev) => {
  //     if (prev == data_length - 1) {
  //       console.log("inside", prev);
  //       return 0;
  //     }
  //     console.log("outside", prev);
  //     return prev + 1;
  //   });
  //   // if (index == data_length - 1) {
  //   //   setIndex(0);
  //   // } else {
  //   //   setIndex(index + 1);
  //   // }
  // };
  // const handlePrev = () => {
  //   if (index == 0) {
  //     setIndex(data_length - 1);
  //   } else {
  //     setIndex(index - 1);
  //   }
  // };

  // useEffect(() => {
  //   let intervalId = setInterval(handleNext, 2000);
  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, []);

  return (
    <div>
      {/* custom slide make
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
          className="w-full h-screen "
          // style={{ transform: `translateX(-${index * 100}%)` }}
        />
        <div
          onClick={handleNext}
          className="absolute text-white bg-black p-2 top-[50%] right-5"
        >
          {">"}
        </div>
      </div> */}

      <Swiper
        navigation={true}
        pagination={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        // effect="fade"
        modules={[Navigation, Pagination, Autoplay]}
        speed={2000}
        slidesPerView={1}
        loop={true}
        direction="horizontal"
        // modules={[EffectFade]}
      >
        <SwiperSlide>
          <img
            src="https://www.atlanticdelhi.com/flash_images/5699banner1.png"
            alt="image not found"
            className="w-full h-screen "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://thumbs.dreamstime.com/b/washing-machine-colorful-clothes-spilling-out-showcasing-laundry-day-modern-open-door-revealing-mix-image-371138609.jpg"
            alt="image not found"
            className="w-full h-screen "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&q=80"
            alt="image not found"
            className="w-full h-screen "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://3.imimg.com/data3/TB/KQ/MY-238885/videocon-ha-500x500.jpg"
            alt="image not found"
            className="w-full h-screen "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://5.imimg.com/data5/SELLER/Default/2025/11/557761819/KY/GN/PA/253575770/plywood-tv-unit-500x500.jpg"
            alt="image not found"
            className="w-full h-screen "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2025-03/Mixer%20grinder.jpg"
            alt="image not found"
            className="w-full h-screen "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnruxkS_C-PUdr74zxSYpEWUPzZ0Eyvvsaog&s"
            alt="image not found"
            className="w-full h-screen "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&q=80"
            alt="image not found"
            className="w-full h-screen "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSndqL4EUuGrAKHtoEP9lGr8E_qbO5NXBpKQw&s"
            alt="image not found"
            className="w-full h-screen "
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.maytag.com/is/image/content/dam/business-unit/maytag/en-us/marketing-content/site-assets/page-content/oc-articles/types-of-refrigerators/Types-of-Refrigerators-Image4M_v2.jpg?$atomic-mobile$&fit=constrain&fmt=webp-alpha&qlt=100&bfc=off"
            alt="image not found"
            className="w-full h-screen "
          />
        </SwiperSlide>
      </Swiper>
      {/* about store section */}
      <div className="md:flex px-8  py-16">
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
      <div className="bg-pink-100 py-12 ">
        <div className="w-[80%] m-auto ">
          <h1 className="text-4xl font-bold italic text-center mb-10  ">
            Our Services
          </h1>
          {/* grid  grid-cols-[repeat(1,1fr)] lg:grid-cols-[repeat(4,1fr)] sm:grid-cols-[repeat(2,1fr)] gap-x-5 gap-y-6 sm:gap-y-0 */}
          <div className="md:flex gap-5  ">
            <div className="shadow-service bg-yellow-300 md:w-1/4 rounded-2xl">
              <img
                src="https://png.pngtree.com/background/20230808/original/pngtree-digital-devices-for-productivity-laptop-mobile-phone-and-tablet-pc-photo-picture-image_4512002.jpg"
                alt=""
                className="w-full h-[350px] rounded-t-2xl"
              />
              <h3 className="text-center text-xl font-bold italic text-pink-600 mb-4 mt-2">
                Laptop & Mobiles
              </h3>
            </div>
            <div className="shadow-service bg-yellow-300 md:w-1/4 rounded-2xl">
              <img
                src="https://images.hindustantimes.com/tech/img/2024/03/23/1600x900/sgddxgfhhc_1711231456166_1711231463102.jpg"
                alt=""
                className="w-full h-[350px] rounded-t-2xl"
              />
              <h3 className="text-center text-xl font-bold italic text-pink-600 mb-4 mt-2">
                Laptop & Mobiles
              </h3>
            </div>
            <div className="shadow-service bg-yellow-300 md:w-1/4 rounded-2xl">
              <img
                src="https://www.shutterstock.com/image-photo/home-appliances-tv-refrigerator-washing-260nw-2248825351.jpg"
                alt=""
                className="w-full h-[350px] rounded-t-2xl"
              />
              <h3 className="text-center text-xl font-bold italic text-pink-600 mb-4 mt-2">
                Laptop & Mobiles
              </h3>
            </div>
            <div className="shadow-service bg-yellow-300 md:w-1/4 rounded-2xl">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSixzSyETiHkN2IjpHbF02yRQsU-oXtBk3Ujg&s"
                alt=""
                className="w-full h-[350px] rounded-t-2xl"
              />
              <h3 className="text-center text-xl font-bold italic text-pink-600 mb-4 mt-2">
                Laptop & Mobiles
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="p-12">
        <h1 className="text-4xl font-bold italic text-center my-5 text-green-600  ">
          Product Offers
        </h1>
        <div className="pt-12">
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
                <p className="text-center text-bold italic text-xl text-green-700">
                  Price:
                  <span className="text-red-400 line-through"> 45354 </span>
                  <span className="text-green-500"> 25455 </span>
                  <span className="text-yellow-600"> 30%-off </span>
                </p>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRA0_c4qiaq_l5K1M3dRVSX11cPtEOtFItWA&s"
                  alt=""
                  className="w-full h-[300px] "
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[400px]">
                <p className="text-center text-bold italic text-xl text-green-700">
                  Price:
                  <span className="text-red-400 line-through"> 45354 </span>
                  <span className="text-green-500"> 25455 </span>
                  <span className="text-yellow-600"> 30%-off </span>
                </p>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjN75Yp-tsy7f3A9C0XIwS8fIkRe_PgzQMyg&s"
                  alt=""
                  className="w-full h-[300px] "
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[400px]">
                <p className="text-center text-bold italic text-xl text-green-700">
                  Price:
                  <span className="text-red-400 line-through"> 45354 </span>
                  <span className="text-green-500"> 25455 </span>
                  <span className="text-yellow-600"> 30%-off </span>
                </p>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIrbinOldPCaoFrVtPiCm-btvi4ZqvG4U8HA&s"
                  alt=""
                  className="w-full h-[300px] "
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[400px]">
                <p className="text-center text-bold italic text-xl text-green-700">
                  Price:
                  <span className="text-red-400 line-through"> 45354 </span>
                  <span className="text-green-500"> 25455 </span>
                  <span className="text-yellow-600"> 30%-off </span>
                </p>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlD1dcE5geFrZEoziyaLbN_tbvlb_QPmXpyg&s"
                  alt=""
                  className="w-full h-[300px] "
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[400px]">
                <p className="text-center text-bold italic text-xl text-green-700">
                  Price:
                  <span className="text-red-400 line-through"> 45354 </span>
                  <span className="text-green-500"> 25455 </span>
                  <span className="text-yellow-600"> 30%-off </span>
                </p>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUs-Ae8WOix_w7ABGTrlAaFaL9PGARKXbhAQ&s"
                  alt=""
                  className="w-full h-[300px] "
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[400px]">
                <p className="text-center text-bold italic text-xl text-green-700">
                  Price:
                  <span className="text-red-400 line-through"> 45354 </span>
                  <span className="text-green-500"> 25455 </span>
                  <span className="text-yellow-600"> 30%-off </span>
                </p>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqJ5foUVi76SIkszzmZJANbXdxoBvJ3aoO2Q&s"
                  alt=""
                  className="w-full h-[300px] "
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[400px]">
                <p className="text-center text-bold italic text-xl text-green-700">
                  Price:
                  <span className="text-red-400 line-through"> 45354 </span>
                  <span className="text-green-500"> 25455 </span>
                  <span className="text-yellow-600"> 30%-off </span>
                </p>
                <img
                  src="https://www.shutterstock.com/image-photo/home-appliances-tv-refrigerator-washing-260nw-2248825351.jpg"
                  alt=""
                  className="w-full h-[300px] "
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[400px]">
                <p className="text-center text-bold italic text-xl text-green-700">
                  Price:
                  <span className="text-red-400 line-through"> 45354 </span>
                  <span className="text-green-500"> 25455 </span>
                  <span className="text-yellow-600"> 30%-off </span>
                </p>
                <img
                  src="https://www.intex.in/cdn/shop/files/LED-SHF3263.jpg?v=1750331049"
                  alt=""
                  className="w-full h-[300px] "
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[400px]">
                <p className="text-center text-bold italic text-xl text-green-700">
                  Price:
                  <span className="text-red-400 line-through"> 45354 </span>
                  <span className="text-green-500"> 25455 </span>
                  <span className="text-yellow-600"> 30%-off </span>
                </p>
                <img
                  src="https://www.shutterstock.com/image-photo/home-appliances-tv-refrigerator-washing-260nw-2248825351.jpg"
                  alt=""
                  className="w-full h-[300px] "
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[400px]">
                <p className="text-center text-bold italic text-xl text-green-700">
                  Price:
                  <span className="text-red-400 line-through"> 45354 </span>
                  <span className="text-green-500"> 25455 </span>
                  <span className="text-yellow-600"> 30%-off </span>
                </p>
                <img
                  src="https://thomsonhome.in//wp-content/uploads/2025/03/43505565771000x1000-500x500.webp"
                  alt=""
                  className="w-full h-[300px] "
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[400px]">
                <p className="text-center text-bold italic text-xl text-green-700">
                  Price:
                  <span className="text-red-400 line-through"> 45354 </span>
                  <span className="text-green-500"> 25455 </span>
                  <span className="text-yellow-600"> 30%-off </span>
                </p>
                <img
                  src="https://www.shutterstock.com/image-photo/home-appliances-tv-refrigerator-washing-260nw-2248825351.jpg"
                  alt=""
                  className="w-full h-[300px] "
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[400px]">
                <p className="text-center text-bold italic text-xl text-green-700">
                  Price:
                  <span className="text-red-400 line-through"> 45354 </span>
                  <span className="text-green-500"> 25455 </span>
                  <span className="text-yellow-600"> 30%-off </span>
                </p>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSixzSyETiHkN2IjpHbF02yRQsU-oXtBk3Ujg&s"
                  alt=""
                  className="w-full h-[300px] "
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[400px]">
                <p className="text-center text-bold italic text-xl text-green-700">
                  Price:
                  <span className="text-red-400 line-through"> 45354 </span>
                  <span className="text-green-500"> 25455 </span>
                  <span className="text-yellow-600"> 30%-off </span>
                </p>
                <img
                  src="https://www.shutterstock.com/image-photo/home-appliances-tv-refrigerator-washing-260nw-2248825351.jpg"
                  alt=""
                  className="w-full h-[300px] "
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[400px]">
                <p className="text-center text-bold italic text-xl text-green-700">
                  Price:
                  <span className="text-red-400 line-through"> 45354 </span>
                  <span className="text-green-500"> 25455 </span>
                  <span className="text-yellow-600"> 30%-off </span>
                </p>
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
    </div>
  );
};

export default Home;
