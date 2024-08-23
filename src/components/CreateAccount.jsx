import { Icon } from "../helpers/icons";

const CreateAccount = () => {
  return (
    <div className="pt-[120px] flex justify-center -mb-[126px]">
      <div className="max-w-[1240px] w-full h-[200px] flex justify-between">
        <div className="max-w-[922px] w-full h-full flex flex-col justify-between">
          <p className="font-rebond font-semibold text-5xl leading-[56px] text-custom">
            Rezz.in ile hayatınızı kolaylaştırın zamandan tasarruf edin!
          </p>
          <p className="font-beausite font-normal text-lg leading-8 text-pale">
            Rezzin, hayatınızı daha verimli ve stressiz hale getirmek için
            tasarlandı. Tüm randevularınızı ve tek bir platformda yöneterek,
            zamanınızı en değerli şekilde kullanmanıza yardımcı olur.
          </p>
        </div>
        <div className="flex items-end mb-1">
          <button className="w-[190px] h-14 bg-myPurple rounded-100 flex items-center justify-evenly z-10">
            <span>
              <Icon name="CreateAccount" />
            </span>
            <span className="font-beausite font-semibold text-base leading-4 text-white">
              Hesap Oluştur
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
