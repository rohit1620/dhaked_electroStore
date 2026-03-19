import React, { useEffect, useState } from "react";
import data from "../db.json";

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
      <div className="md:flex px-8 md:my-12 h-screen">
        <div className="md:w-1/2 pt-5">
          <h2 className="font-bold text-3xl text-center mb-2 italic">
            About Our Store
          </h2>
          <p className="text-justify italic">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
            rerum quasi sunt animi natus asperiores minus quaerat ad quas at
            eaque nisi fuga culpa voluptatem, eum, dolorum tempore consequuntur
            odio! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
            soluta vitae in ratione, laudantium, ab unde iusto accusantium, iste
            ipsam tempora nam veniam quo blanditiis facere voluptate? Vitae,
            provident repudiandae. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Natus laborum, nostrum cupiditate iure enim
            officiis ipsum itaque minima error iste, excepturi delectus, eius
            rerum et? Obcaecati sapiente similique harum! Distinctio. Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Possimus
            mollitia perferendis saepe nobis reprehenderit quidem corrupti
            necessitatibus illo repellendus id nemo praesentium modi, odit
            maxime, voluptatibus obcaecati, iste harum perspiciatis?
          </p>
        </div>
        <div className="w-1/2 hidden md:block">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfIKZtg95BcJfA5z8NbBD1Bl-rAuMPVWKXfQ&s"
            alt=""
            className="w-full h-[400px]"
          />
        </div>
      </div>
      <div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
