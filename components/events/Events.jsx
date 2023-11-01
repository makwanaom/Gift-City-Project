import React from "react";

const Events = () => {
  const data = [
    {
      id: 1,
      title:"Vande Gujarat Event",
      location: "Gujarat, India",
      date: "Oct 29 2023",
      price: "IDR800.000",
      img: "https://www.giftgujarat.in/assets/updates/1.webp",
      description: ""
    },
    {
      id: 2,
      title:" Google Webinar",
      location: "Gujarat, India",
      date: "Oct 29 2023",
      price: "IDR800.000",
      img: "https://www.giftgujarat.in/assets/updates/1.webp",
      description: ""
    },
  
    {
      id: 3,
      title:"Hack-holick Event",
      location: "Gujarat, India",
      date: "Oct 29 2023",
      price: "IDR800.000",
      img: "https://www.giftgujarat.in/assets/updates/1.webp"
    },
    {
      id: 4,
      title:"First Event",
      location: "Gujarat, India",
      date: "Oct 29 2023",
      price: "IDR800.000",
      img: "https://www.giftgujarat.in/assets/updates/1.webp",
      description: ""
    },
    {
      id: 5,
      title:"First Event",
      location: "Gujarat, India",
      date: "Oct 29 2023",
      price: "IDR800.000",
      img: "https://www.giftgujarat.in/assets/updates/1.webp",
      description: ""
    },
    {
      id: 6,
      title:"First Event",
      location: "Gujarat, India",
      date: "Oct 29 2023",
      price: "IDR800.000",
      img: "https://www.giftgujarat.in/assets/updates/1.webp",
      description: ""
    },

    // Add more data items as needed
  ];
  return (
    <div id="Events">
      <div className="text-2xl font-medium py-4 underline ">Events</div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4 ">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col  text-start p-4 border-gray-300 border   py-4  gap-3 m-4 shadow-2xl rounded-sm ">
            <img src={item.img} alt="" />
            <h2 className="text-black font-semibold">
              {item.title}
            </h2>
            <h4 className="text-base font-medium">{item.location}</h4>
            <h5>{item.date}</h5>
            <div className="mt-6 flex items-center justify-between gap-20">
              <p className="text-red-800 text-xs">{item.price}</p>
              <button className="bg-black rounded-md text-white px-8 py-3">
                Know More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
