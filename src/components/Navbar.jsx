import { useState, useEffect } from "react";
import { Icon } from "../helpers/icons";

const menuItems = [
  { name: "Sağlık" },
  { name: "Kişisel Bakım" },
  { name: "Eğitim" },
  { name: "Spor" },
  { name: "Eğlence" },
];

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [close, setClose] = useState(false);

  const handleMenuClick = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  const handleClickOutside = (event) => {
    if (
      !event.target.closest(".menu-button") &&
      !event.target.closest(".menu-dropdown")
    ) {
      setOpenMenu(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav>
      <div
        className={`max-w-[1920px] w-full h-10 flex justify-center items-center relative ${
          close && "hidden"
        }`}
      >
        <div className="absolute inset-0 -z-10">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1920 40"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="100%" height="100%" fill="#F5DBFB" />
            <rect width="100%" height="100%" fill="url(#paint0_linear_1_825)" />
            <defs>
              <linearGradient
                id="paint0_linear_1_825"
                x1="1920"
                y1="20"
                x2="0"
                y2="20"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.19614" stopColor="#667FFF" />
                <stop offset="0.500389" stopColor="#CEA2FF" />
                <stop offset="0.860908" stopColor="#FF85B1" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="max-w-[1280px] w-full flex justify-between items-center">
          <div className="max-w-[635px] w-full h-5 flex items-center justify-between">
            <span className="cursor-pointer">
              <Icon name="Apple" />
            </span>
            <span className="cursor-pointer">
              <Icon name="PlayStore" />
            </span>
            <p className="font-beausite font-semibold text-xs text-white">
              İhtiyacınız olan bütün randevu ve organizasyonları tek bir
              uygulama üzerinden hızlıca yapabilirsiniz.
            </p>
          </div>
          <span className="cursor-pointer" onClick={() => setClose(true)}>
            <Icon name="NavbarClose" />
          </span>
        </div>
      </div>

      <div className="max-w-[1920px] w-full h-20 flex justify-center items-center">
        <div className="max-w-[1280px] w-full h-12 flex items-center justify-between">
          <div className="max-w-[705.63px] w-full h-full flex items-center justify-between">
            <span>
              <Icon name="Rezzin" />
            </span>
            <div className="max-w-[532px] w-full flex justify-between items-center font-beausite">
              {menuItems.map((item, index) => (
                <div key={item.name} className="relative text-custom">
                  <button
                    className="menu-button focus:outline-none flex items-center justify-center p-4 gap-1 font-normal text-[15px] leading-4"
                    onClick={() => handleMenuClick(index)}
                  >
                    {item.name}
                    <span>
                      <Icon name="DownArrow" />
                    </span>
                  </button>
                  {openMenu === index && (
                    <div className="menu-dropdown absolute left-0 w-40 bg-white shadow-md z-10">
                      <ul>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          Alt Menü 1
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          Alt Menü 2
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          Alt Menü 3
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="max-w-[281px] w-full h-full flex items-center justify-between">
            <button className="bg-myPurple text-white p-4 gap-1 flex items-center justify-center rounded-100">
              <span>
                <Icon name="NavbarCreateAccount" />
              </span>
              <span className="font-beausite font-normal text-[15px] leading-4">
                Hesap Oluştur
              </span>
            </button>
            <button className="flex items-center justify-center p-4 gap-1 rounded-100 border border-[#D6DAE9] text-custom">
              <span>
                <Icon name="SignIn" />
              </span>
              <span className="font-beausite font-normal text-[15px] leading-4">
                Giriş Yap
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
