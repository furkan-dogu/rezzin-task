import CreateAccount from "../components/CreateAccount";
import Services from "../components/Services";
import HairdresserCards from "../components/HairdresserCards";
import Navbar from "../components/Navbar";
import Appointment from "../components/Appointment";
import ThreeCards from "../components/ThreeCards";
import PartnerComponent from "../components/PartnerComponent";
import background from "../assets/images/background.svg";
import Telephones from "../components/Telephones";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Appointment />
      <div className="max-w-[1920px] w-full h-full relative">
        <img
          src={background}
          alt="Background"
          className="absolute opacity-15 -z-20 w-full h-full"
        />
        <CreateAccount />
        <ThreeCards />
        <HairdresserCards />
        <Services />
      </div>
      <PartnerComponent
        title="Rezz.in’e yeni eklenenler"
        content="Her gün yenilenen içerikler ve hizmetlerle Rezz.in deneyiminizi daha da zenginleştiriyoruz! Yeni eklenen kategoriler, mekanlar ve fırsatlarla, hayatınızı kolaylaştıracak daha fazla seçenek artık parmaklarınızın ucunda."
      />
      <PartnerComponent
        title="Güzellik salonları"
        content="Rezzin ile size en yakın ve en popüler güzellik salonlarını kolayca bulun ve randevunuzu hızla oluşturun. Kişisel bakımınıza zaman ayırmak artık çok daha pratik!"
      />
      <Telephones />
      <Footer />
    </>
  );
};

export default Home;
