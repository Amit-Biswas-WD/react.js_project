import BannerSection from "./components/section/Banner";
import ExploreProgramsSection from './components/section/ExplorePrograms';
import UnoSicurezzaSection from './components/section/UnoSicurezza';
import UltimeNotizieSection from './components/section/UltimeNotizie';
import CondividiSection from './components/section/Condividi';

const HomeView = () => {
  return (
    <>
      <BannerSection />
      <ExploreProgramsSection />
      <UnoSicurezzaSection />
      <UltimeNotizieSection />
      <CondividiSection />
    </>
  );
};

export default HomeView;
