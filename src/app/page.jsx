import BusBulletins from "@/components/Cards/BusBulletins";
import MagazineList from "@/components/Cards/magazineList";
import MagazineList2 from "@/components/Cards/magazineList2";
import VerticalCards from "@/components/Cards/verticalCards";
import Details from "@/components/Details/Details";
import Slider from "@/components/slider/Slider";

const page = () => {
  return (
    <div>
      <Slider />
      <VerticalCards />
      <MagazineList />
      <MagazineList2 />
      <BusBulletins />
      <Details />
    </div>
  );
};

export default page;
