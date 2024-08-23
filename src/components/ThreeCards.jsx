import { Icon } from "../helpers/icons";
import background from "../assets/images/background.svg";

const Card = ({ icon, title }) => {
  return (
    <div className="bg-white z-50 p-6 w-[344px] h-full rounded-2xl flex flex-col justify-between shadow-sm">
      <span>
        <Icon name={icon} />
      </span>
      <div className="h-[112px] flex flex-col justify-between">
        <p className="font-rebond font-semibold text-xl leading-6 text-custom">
          {title}
        </p>
        <p className="font-beausite font-[350] text-base text-pale">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit
          amet tellus et elit suscipit vehicula eu eget ex.{" "}
        </p>
      </div>
    </div>
  );
};

const CardItems = [
  {
    id: 1,
    icon: "ChooseService",
    title: "İstediğin hizmeti seç",
  },
  {
    id: 2,
    icon: "PointsRanking",
    title: "Fiyat ve puan sıralaması yap",
  },
  {
    id: 3,
    icon: "BestLocation",
    title: "Sana en uygun konumu bul",
  },
];

const ThreeCards = () => {
  return (
    <div className="flex flex-col items-center ">
      <div className="max-w-[1411px] w-full h-[737px] relative">
        <img
          src={background}
          alt="Background"
          className="absolute w-full h-full opacity-15 -z-10"
        />

        <div className="flex justify-center mt-[172px]">
          <div className="max-w-[1240px] w-full h-[248px] flex justify-between">
            {CardItems.map((item) => (
              <Card key={item.id} icon={item.icon} title={item.title} />
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-[148px]">
          <div className="w-full h-36 flex flex-col justify-between items-center text-center">
            <p className="font-rebond font-semibold text-5xl leading-[56px] text-custom">
              Rezz.in’in kullanıcılarına sunduğu hizmetler
            </p>
            <p className="font-beausite font-normal text-lg leading-8 text-pale max-w-[922px] w-full">
              Rezzin, hayatınızı kolaylaştırmak için geniş bir hizmet yelpazesi
              sunar. İhtiyacınız olan tüm randevuları, organizasyonları ve
              etkinlik planlamalarını tek bir uygulama üzerinden
              yönetebilirsiniz.
            </p>
          </div>
        </div>
      </div>
      <button className="py-5 px-8 bg-white rounded-100 font-beausite font-semibold text-[15px] leading-4 text-custom">
        Tümünü Gör
      </button>
    </div>
  );
};

export default ThreeCards;
