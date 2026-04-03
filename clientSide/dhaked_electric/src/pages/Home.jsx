import React, { useEffect, useState } from "react";
import data from "../db.json";
// import Swiper from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

let datas = data.electronics;

console.log(datas.length);

const Home = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about",
        start: "top 90%",
        end: "top 40%",
        // scrub: 1,
        // markers: true,
      },
    });
    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".service",
        start: "top 70%",
        end: "top 40%",
        // scrub: 1,
        // markers: true,
      },
    });
    tl.from(".about h2", {
      y: 50,
      opacity: 0,
      duration: 0.5,
    })
      .from(
        ".about p",
        {
          y: 50,
          opacity: 0,
          duration: 1,
        },
        "rohit",
      )
      .from(
        ".about img",
        {
          rotate: 360,
          duration: 1,
          clipPath:
            "polygon(10% 25%, 35% 25%, 35% 0%, 65% 0%, 65% 25%, 90% 25%, 90% 50%, 65% 50%, 65% 100%, 35% 100%, 35% 50%, 10% 50%)",
          opacity: 0,
        },
        "rohit",
      );

    t2.from(".service>h1", {
      y: 50,
      opacity: 0,
      duration: 0.5,
    }).from(".service>div>div", {
      y: 50,
      opacity: 0,
      stagger: 0.3,
      duration: 1,
    });
  }, []);
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
      <div className="hidden lg:block">
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
              src="https://www.coolcareservice.in/public/assets/frontend/images/coolcare-banner-1920x685.jpg"
              alt="image not found"
              className="w-full h-[400px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.agoanelectronics.in/wp-content/uploads/2023/03/Top-Air-cooler-banner.webp"
              alt="image not found"
              className="w-full h-[400px] "
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.extrahypermarket.com/assets/images/electronics-items-3.jpg"
              alt="image not found"
              className="w-full h-[400px] "
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://image.slidesdocs.com/responsive-images/background/a-modern-white-store-with-various-electronic-products-powerpoint-background_43e72063cd__960_540.jpg"
              className="w-full h-[400px] "
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://shop.haierindia.com/blog/wp-content/uploads/2025/01/Know-your-Double-Door-Refrigerator-Dimensions-2-1116x628.jpg.webp"
              alt="image not found"
              className="w-full h-[400px] "
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2025-03/Mixer%20grinder.jpg"
              alt="image not found"
              className="w-full h-[400px] "
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://png.pngtree.com/thumb_back/fh260/background/20230704/pngtree-office-essentials-and-tech-gadgets-mobile-phone-laptop-printer-camera-headphones-image_3748460.jpg"
              alt="image not found"
              className="w-full h-[400px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i05.appmifile.com/958_operator_uk/01/04/2026/0fb7ce7fbfd88eb2c60bb01be8ad2473.jpg?thumb=1&w=2560&q=85"
              alt="image not found"
              className="w-full h-[400px] "
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.shutterstock.com/image-illustration/group-home-appliances-consumer-electronics-600nw-2231569777.jpg"
              alt="image not found"
              className="w-full h-[400px] "
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.bajajelectricals.com/cdn/shop/files/GOOD_DESIGN_BANNER.jpg?v=1743600154&width=1400"
              alt="image not found"
              className="w-full h-[400px] "
            />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* mobile ke liye */}
      <div className="lg:hidden">
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
              src="https://i.pinimg.com/736x/d7/cd/14/d7cd14b1244b7c86898b9ba6b1283704.jpg"
              alt="image not found"
              className="w-full h-[65vh] "
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://st3.depositphotos.com/4475215/16107/i/1600/depositphotos_161072886-stock-photo-home-appliances-group-of-white.jpg"
              alt="image not found"
              className="w-full h-[65vh] "
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ09WYmGNUZ6olROqodIlIS51_VeQLWbm-tRw&s"
              alt="image not found"
              className="w-full h-[65vh] "
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://sansuiworld.com/cdn/shop/files/JSWG43CSFHD_RPD_1.webp?v=1753076465&width=2000"
              alt="image not found"
              className="w-full h-[65vh] "
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://st3.depositphotos.com/4475215/37469/i/1600/depositphotos_374693064-stock-photo-home-appliances-commerce-online-shopping.jpg"
              alt="image not found"
              className="w-full h-[65vh] "
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://img.freepik.com/free-vector/broken-washing-machine-realistic-indoor-composition-with-clothes-washer-water-pouring-out-door_1284-33057.jpg?semt=ais_incoming&w=740&q=80"
              alt="image not found"
              className="w-full h-[65vh] "
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.unsplash.com/photo-1767448747239-6b0df47b8ab0?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="image not found"
              className="w-full h-[65vh] "
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://image.made-in-china.com/2f0j00RPtBkNCIYUcL/Second-Hand-Cellphone-for-A15-Original-Used-Mobile-Phones-Unlock-Mobile-Phone-Smart-Phone.webp"
              alt="image not found"
              className="w-full h-[65vh]"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src="https://cpimg.tistatic.com/11095022/b/4/split-ac..jpg"
              className="w-full h-[65vh] "
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://www.maytag.com/is/image/content/dam/business-unit/maytag/en-us/marketing-content/site-assets/page-content/oc-articles/types-of-refrigerators/Types-of-Refrigerators-Image4M_v2.jpg?$atomic-mobile$&fit=constrain&fmt=webp-alpha&qlt=100&bfc=off"
              alt="image not found"
              className="w-full h-[65vh] "
            />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* about store section */}
      <div className="md:flex px-8  pb-10 md:pb-20 pt-7 md:pt-8 lg:pt-10 about">
        <div className="md:w-1/2 pt-5">
          <h2 className="font-bold text-3xl text-center mb-3 italic">
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
            className="w-full h-[400px] rohit"
          />
        </div>
      </div>
      {/* our services section  */}
      {/* className="bg-pink-100" */}
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 pb-12 pt-10">
        <div className="w-[80%] m-auto service">
          <h1 className="text-4xl font-bold italic text-center mb-10   ">
            Our Services
          </h1>
          {/* grid  grid-cols-[repeat(1,1fr)] lg:grid-cols-[repeat(4,1fr)] sm:grid-cols-[repeat(2,1fr)] gap-x-5 gap-y-6 sm:gap-y-0 */}
          <div className="md:flex gap-5  flex-wrap">
            <div className="shadow-service bg-yellow-300 md:w-[calc(50%-10px)] lg:w-[calc(25%-15px)]  rounded-2xl">
              <Link to="/product">
                <img
                  src="https://png.pngtree.com/background/20230808/original/pngtree-digital-devices-for-productivity-laptop-mobile-phone-and-tablet-pc-photo-picture-image_4512002.jpg"
                  alt=""
                  className="w-full h-[350px] rounded-t-2xl"
                />

                <h3 className="text-center text-xl font-bold italic text-pink-600 mb-4 mt-2 pb-3 lg:pb-0">
                  Laptop & Mobiles
                </h3>
              </Link>
            </div>

            <div className="shadow-service bg-yellow-300 md:w-[calc(50%-10px)] lg:w-[calc(25%-15px)] rounded-2xl">
              <Link to="/product">
                <img
                  src="https://images.hindustantimes.com/tech/img/2024/03/23/1600x900/sgddxgfhhc_1711231456166_1711231463102.jpg"
                  alt=""
                  className="w-full h-[350px] rounded-t-2xl"
                />
                <h3 className="text-center text-xl font-bold italic text-pink-600 mb-4 mt-2 pb-3 lg:pb-0">
                  Cooler & Fan
                </h3>
              </Link>
            </div>
            <div className="shadow-service bg-yellow-300 md:w-[calc(50%-10px)] lg:w-[calc(25%-15px)] rounded-2xl">
              <Link to="/product">
                <img
                  src="https://www.shutterstock.com/image-photo/home-appliances-tv-refrigerator-washing-260nw-2248825351.jpg"
                  alt=""
                  className="w-full h-[350px] rounded-t-2xl"
                />
                <h3 className="text-center text-xl font-bold italic text-pink-600 mb-4 mt-2 pb-3 lg:pb-0">
                  Freeze & Tv
                </h3>
              </Link>
            </div>
            <div className="shadow-service bg-yellow-300 md:w-[calc(50%-10px)] lg:w-[calc(25%-15px)] rounded-2xl">
              <Link to="/product">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSixzSyETiHkN2IjpHbF02yRQsU-oXtBk3Ujg&s"
                  alt=""
                  className="w-full h-[350px] rounded-t-2xl"
                />
                <h3 className="text-center text-xl font-bold italic text-pink-600 mb-4 mt-2 pb-3 lg:pb-0">
                  Mixer & other
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="p-12">
        <h1 className="text-4xl font-bold italic text-center pb-7 pt-3 text-green-600  ">
          Product Offers
        </h1>
        <div className="pt-12">
          <Swiper
            navigation={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            speed={2000}
            loop={true}
            modules={[Navigation, Autoplay]}
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
