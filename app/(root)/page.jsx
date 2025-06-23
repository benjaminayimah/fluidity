

import BannerSection from '../components/pages/home/BannerSection'
import HeroVideo from '../components/pages/home/HeroVideo'
import WhoWeAre from '../components/pages/home/WhoWeAre'
import Footer from "../components/Footer";

import SpinBadge from '../components/SpinBadge';

export default function Home() {
  
  // px-[10vw]

  return (
    <>
      <BannerSection />
      <HeroVideo />
      <WhoWeAre />
      <Footer /> 
      {/* <SpinBadge /> */}
    </>
  );
}
