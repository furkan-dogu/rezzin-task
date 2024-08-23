import { useState } from "react";
import { Icon } from "../helpers/icons";

const PartnerComponent = ({ title, content }) => {
  const [active, setActive] = useState(2);

  const items = [
    "Glamour Hair Lounge",
    "Radiance Hair & Beauty",
    "Dreamer Beauty Saloon",
    "Chic Hair Boutique",
  ];

  return (
    <div className="flex justify-center">
      <div className="max-w-[1920px] w-full h-[704px] bg-[#F6F9FC] flex justify-center items-center">
        <div className="max-w-[1240px] w-full h-[560px] flex flex-col items-center justify-between">
          <div className="w-full h-36 flex justify-between items-end">
            <div className="max-w-[923px] h-full flex flex-col justify-between">
              <p className="font-rebond font-semibold text-5xl leading-[56px] text-custom">
                {title}
              </p>
              <p className="font-beausite font-normal text-lg leading-8 text-pale pr-10">
                {content}
              </p>
            </div>
            <button className="w-[196px] h-14 bg-white rounded-100 border border-[#F1F3F8] shadow-seeMoreButton flex justify-start items-center gap-2.5 p-3">
              <span>
                <Icon name="SeeMoreDark" />
              </span>
              <span className="font-beausite font-semibold text-base leading-4 text-myPurple">
                Daha Fazla Gör
              </span>
            </button>
          </div>
          <div className="flex justify-between w-full h-[322px] mt-1">
            {[0, 1, 2].map((item) => (
              <div
                key={item}
                className="w-[392px] h-full rounded-2xl flex flex-col justify-between"
              >
                <div className="w-full h-[210px] bg-[#D9D9D9] rounded-t-2xl"></div>
                <div className="w-full h-28 p-4 flex flex-col justify-between rounded-b-2xl bg-white">
                  <div className="flex flex-col gap-1.5">
                    <p className="font-rebond font-semibold text-xl leading-6 text-custom">
                      {items[active]}
                    </p>
                    <div className="flex items-center font-semibold gap-1">
                      <span>
                        <Icon name="Star" />
                      </span>
                      <span className="text-sm leading-4 text-custom">
                        4.0/5
                      </span>
                      <span className="text-xs text-[#626C85]">
                        (2.365 Değerlendirme)
                      </span>
                    </div>
                  </div>
                  <p className="font-beausite font-medium text-sm leading-4 text-pale">
                    Pendik, İstanbul
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-32 h-1.5 flex items-center justify-between">
            {[0, 1, 2, 3].map((item) => (
              <button
                key={item}
                onClick={() => setActive(item)}
                className={`h-full rounded-100 ${
                  active === item ? "w-8 bg-myPurple" : "w-6 bg-[#D6DAE9]"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerComponent;
