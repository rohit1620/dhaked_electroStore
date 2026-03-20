import React from "react";

const product = () => {
  return (
    <div className="flex">
      <div className="border w-64 h-screen fixed left-0 top-15 z-50">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero ut rem
        aperiam exercitationem maiores aliquam nesciunt doloremque voluptas
        asperiores delectus earum nostrum minima, sit quod voluptatem quo
        tempora vel totam!
      </div>
      <div className="border  mx-64">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur debitis
        veniam ratione assumenda modi mollitia nesciunt consequatur fugiat.
        Suscipit dolorem vero doloribus ullam minima molestiae exercitationem
        eveniet repellat atque iste.
        <div className="h-[1000px] bg-amber-500 w-full"></div>
        <div className="h-[1000px] bg-red-500 w-full"></div>
      </div>
      <div className="border w-64 h-screen fixed right-0 top-15">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        pariatur magnam optio et aperiam amet velit mollitia, ratione temporibus
        quam explicabo voluptatum neque aliquid enim sunt sed placeat provident
        expedita.
      </div>
    </div>
  );
};

export default product;
