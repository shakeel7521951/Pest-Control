import Certificate from "./components/home/Certificate";
import Header from "./components/home/Header";
import LatestNews from "./components/home/LatestNews";
import PetControl from "./components/home/PetControl";
import PickAPet from "./components/home/PickAPet";
import Services from "./components/home/Services";




export default function Home() {
  return (
    <div>
      <Header />
      <PetControl />
      <Services />
      <LatestNews />
      <PickAPet />
      <Certificate/>
    </div>
  );
}
