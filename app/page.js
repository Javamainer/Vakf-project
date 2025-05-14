import { ResponsiveHeader } from './components/header';
import { ResponsiveSwiper } from './components/swiper';
import Donate from "./components/Donate.jsx";

export default function Home() {
  return (
    <div>
      <ResponsiveHeader />
      <ResponsiveSwiper />
      <Donate />
    </div>
  );
}
