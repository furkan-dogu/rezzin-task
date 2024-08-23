import Doctor1 from "../assets/images/doctor1.png";
import Doctor2 from "../assets/images/doctor2.png";
import Coach from "../assets/images/coach.png";
import background from "../assets/images/background.svg";
import { Icon } from "../helpers/icons";

const Button = ({ title }) => {
  return (
    <button className="font-beausite font-medium text-sm leading-4 text-center text-pale bg-white bg-opacity-50 p-3 rounded-100 gap-2.5">
      {title}
    </button>
  );
};

const ButtonItems = [
  "Fizyoterapist",
  "Güzellik Salonu",
  "Özel Okul",
  "Avukat",
  "Diyetisyen",
];

const Appointment = () => {
  return (
    <div className="mt-5 flex justify-center">
      <div className="relative max-w-[1848px] w-full h-[633px] overflow-hidden rounded-[2rem] flex justify-center items-center">
        <img
          src={background}
          alt="Background"
          className="absolute w-full h-full"
        />

        <div className="absolute top-0 -left-[52px] h-[1012px] max-w-[302px] w-full">
          <img
            src={Doctor1}
            alt="Doctor1"
            className="h-full w-full object-cover object-right"
          />
        </div>
        <div className="absolute top-[133px] left-[95px] max-w-[454px] w-full h-[600px]">
          <img src={Doctor2} alt="Doctor2" className="w-full h-full" />
        </div>
        <div className="absolute max-w-[715px] w-full h-[647px] -bottom-[101px] -right-[101px]">
          <img src={Coach} alt="Coach" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-[960px] w-full h-[368px] z-10 flex flex-col items-center justify-between">
          <div className="text-center flex flex-col items-center">
            <p className="font-rebond font-bold text-[56px] leading-[56px] text-custom">
              Rezz.in ile anında
            </p>
            <p className="font-rebond font-bold text-[56px] leading-[56px] text-custom">
              ihtiyacın olan randevuyu yap!
            </p>
            <p className="font-beausite font-normal text-lg leading-6 w-[624px] px-1 text-center mt-[22px] text-pale">
              İhtiyacınız olan bütün randevu ve organizasyonları tek bir
              uygulama üzerinden hızlıca yapabilirsiniz. Rezzin ile hayatınızı
              kolaylaştırın.
            </p>
          </div>
          <div className="w-full h-[136px] flex flex-col items-center justify-between">
            <div className="max-w-[675px] w-full h-10 flex justify-between items-center">
              <p className="font-beausite font-medium text-sm leading-4 text-center text-pale">
                Popüler Aramalar:
              </p>
              <div className="h-full max-w-[532px] w-full flex items-center justify-between gap-3">
                {ButtonItems.map((item) => (
                  <Button key={item} title={item} />
                ))}
              </div>
            </div>
            <form className="w-full h-[72px] relative">
              <input
                type="text"
                placeholder="Hangi hizmeti arıyorsunuz?"
                className="w-full h-full rounded-100 pl-[72px] text-custom font-medium text-base leading-4 placeholder:text-custom focus:outline-none"
              />
              <span className="absolute left-5 top-1/2 -translate-y-1/2">
                <Icon name="Search" />
              </span>
              <button
                type="submit"
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-custom text-white p-4 rounded-100 font-normal text-[15px] leading-4"
              >
                Arama Yap
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
