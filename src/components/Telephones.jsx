import { Icon } from "../helpers/icons";
import telephones from "../assets/images/telephones.png";
import background from "../assets/images/background.svg";

const Telephones = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-[1920px] w-full h-[604px] flex justify-around items-center relative">
        <img
          src={background}
          alt="Background"
          className="absolute opacity-50 w-full h-full -rotate-180"
        />
        <div className="max-w-[1020px] w-full h-full flex items-center justify-end">
          <div className="max-w-[604px] w-full h-[280px] flex flex-col justify-between">
            <p className="font-rebond font-semibold text-5xl leading-[56px] text-custom">
              Her anı daha verimli ve keyifli yaşamaya başlayın!
            </p>
            <p className="font-beausite font-normal text-lg leading-8 text-pale">
              Randevularınızı planlayın, favori mekanlarınızı keşfedin ve
              hayatın tadını çıkarın. Hepsi tek bir dokunuşla, cebinizde!
            </p>
            <div className="flex gap-4 z-10">
              <button className="w-[158px] h-14 rounded-xl bg-myPurple p-3 text-white flex items-center gap-3 font-beausite">
                <span>
                  <Icon name="AppStore" />
                </span>
                <div className="flex flex-col items-start gap-1">
                  <p className="font-medium text-[10px] leading-3">
                    Uygulamayı İndir
                  </p>
                  <p className="font-semibold text-xs">App Store</p>
                </div>
              </button>
              <button className="w-[158px] h-14 rounded-xl bg-myPurple p-3 text-white flex items-center gap-3 font-beausite">
                <span>
                  <Icon name="GooglePlay" />
                </span>
                <div className="flex flex-col items-start gap-1">
                  <p className="font-medium text-[10px] leading-3">
                    Uygulamayı İndir
                  </p>
                  <p className="font-semibold text-xs">Google Play</p>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-[900px] w-full h-full flex items-end justify-center">
          <img src={telephones} alt="Telephones" className="w-[760.12px]" />
        </div>
      </div>
    </div>
  );
};

export default Telephones;
