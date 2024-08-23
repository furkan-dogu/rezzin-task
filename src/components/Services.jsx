import { useState } from "react";
import { Icon } from "../helpers/icons";
import dietician1 from "../assets/images/dietician1.jpeg";
import dietician2 from "../assets/images/dietician2.jpeg";
import dietician3and7 from "../assets/images/dietician3and7.jpeg";
import dietician4 from "../assets/images/dietician4.jpeg";
import dietician5and12 from "../assets/images/dietician5and12.jpeg";
import dietician6 from "../assets/images/dietician6.jpeg";
import dietician8 from "../assets/images/dietician8.jpeg";
import dietician9 from "../assets/images/dietician9.jpeg";
import dietician10 from "../assets/images/dietician10.jpeg";
import dietician11 from "../assets/images/dietician11.jpeg";

const Card = ({ image, label }) => {
  return (
    <div className="w-[286px] h-28 bg-[#F9FBFF] border border-[#E9F0FF] rounded-xl p-4 flex justify-start items-center gap-3 cursor-pointer">
      <img
        src={image}
        alt="Diyetisyen"
        className="w-20 h-20 object-cover rounded-xl"
      />
      <div className="h-full flex flex-col justify-between py-1">
        <div className="flex flex-col gap-1">
          <p className="font-rebond font-semibold text-lg leading-5 text-custom">
            Nazlı Demirbaş
          </p>
          <p className="font-beausite font-medium text-base leading-4 text-[#626C85]">
            {label}
          </p>
        </div>
        <div className="flex items-center gap-1">
          <span>
            <Icon name="Star" />
          </span>
          <span className="font-beausite font-semibold text-sm leading-4 text-custom">
            4.0/5
          </span>
        </div>
      </div>
    </div>
  );
};

const cardItems = [
  { id: 1, image: dietician1 },
  { id: 2, image: dietician2 },
  { id: 3, image: dietician3and7 },
  { id: 4, image: dietician4 },
  { id: 5, image: dietician5and12 },
  { id: 6, image: dietician6 },
  { id: 7, image: dietician3and7 },
  { id: 8, image: dietician8 },
  { id: 9, image: dietician9 },
  { id: 10, image: dietician10 },
  { id: 11, image: dietician11 },
  { id: 12, image: dietician5and12 },
];

const Services = () => {
  const [active, setActive] = useState("Sağlık");

  const items = {
    Sağlık: "Diyetisyen",
    "Kişisel Bakım": "Makyöz",
    Eğitim: "Öğretmen",
    Spor: "Fitness Eğitmeni",
    Eğlence: "Animatör",
    "Diğer Hizmetler": "Yaşam Koçu",
  };

  return (
    <div className="flex flex-col items-center pb-24">
      <div className="max-w-[921px] w-full h-20 bg-white border border-[#E9F0FF] rounded-100 -mt-10 flex justify-between p-3 z-10">
        {Object.keys(items).map((item) => (
          <button
            key={item}
            className={`flex items-center justify-center gap-2 py-4 px-6 rounded-100 text-base ${
              active === item
                ? "bg-myPurple text-white font-semibold"
                : "bg-white text-custom font-medium"
            }`}
            onClick={() => setActive(item)}
          >
            <span>
              {active === item ? (
                <Icon name="AktiveIcon" />
              ) : (
                <Icon name="PassiveIcon" />
              )}
            </span>
            <span>{item}</span>
          </button>
        ))}
      </div>
      <div className="mt-7 max-w-[1240px] w-full h-[400px] bg-white grid grid-cols-4 gap-[30px]">
        {cardItems.map(({ id, image }) => (
          <Card key={id} image={image} label={items[active]} />
        ))}
      </div>
      <button className="w-[196px] h-14 bg-custom rounded-100 flex justify-start items-center gap-2.5 p-3 mt-[30px]">
        <span>
          <Icon name="SeeMoreLight" />
        </span>
        <span className="font-beausite font-semibold text-base leading-4 text-white">
          Daha Fazla Gör
        </span>
      </button>
    </div>
  );
};

export default Services;
