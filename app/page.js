import Header from "./components/header";
import ImageCarousel from "./components/ImageCarousel";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <ImageCarousel />
      <div className="donate-wrapper"><Image className="donate" src="/donate.svg" width={300} height={150} alt="donate" /></div>
    </div>
  );
}
