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
  );
};

export default Home;
