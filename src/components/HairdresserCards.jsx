import { useState } from "react";
import { Icon } from "../helpers/icons";

const HairdresserCards = () => {
  const [active, setActive] = useState(2);

  const items = ["Pet Kuaförü", "Erkek Kuaförü", "Bayan Kuaförü", "Berber"];

  return (
    <div className="flex justify-center mt-12 relative">
      <div className="max-w-[1240px] w-full h-[374px] flex flex-col items-center">
        <div className="w-full h-[193px] flex justify-between">
          {[0, 1, 2, 3].map((item) => (
            <div
              key={item}
              className="max-w-[286px] w-full h-full rounded-2xl border border-[#F1F3F8] shadow-hairdresserCard p-6 flex flex-col justify-between bg-white"
            >
              <span>
                <Icon name="Scissors" />
              </span>
              <p className="font-rebond font-semibold text-xl leading-6 text-custom">
                {items[active]}
              </p>
              <span className="w-full h-[1px] bg-[#D6DAE9]"></span>
              <div className="font-beausite">
                <p className="font-normal text-base leading-4 text-pale">
                  2345 firma arasından seçin!
                </p>
                <div className="flex items-center font-semibold gap-1 mt-1">
                  <span>
                    <Icon name="Star" />
                  </span>
                  <span className="text-sm leading-4 text-custom">4.0/5</span>
                  <span className="text-xs text-[#626C85]">
                    (ortalama değerlendirme)
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-24 h-1 flex justify-between mt-9">
          {[0, 1, 2, 3].map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`h-full rounded-100 ${
                active === item ? "w-6 bg-myPurple" : "w-4 bg-[#D6DAE9]"
              }`}
            ></button>
          ))}
        </div>
      </div>
      <div className="absolute -z-10 max-w-[1092px] w-full h-[302px] bg-[#F6F9FC] border border-[#E9F0FF] bottom-0"></div>
    </div>
  );
};

export default HairdresserCards;
