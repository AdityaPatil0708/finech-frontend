import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Hero1 } from "./components/ui/Hero1";
import { Hero2 } from "./components/ui/Hero2";
import { Hero3 } from "./components/ui/Hero3";
import { Hero4 } from "./components/ui/Hero4";
import { Hero5 } from "./components/ui/Hero5";
import { Hero6 } from "./components/ui/Hero6";
import { Hero7 } from "./components/ui/Hero7";

export default function Home() {
  return (
    <div>

      <div
        className="bg-black bg-[url('/gradient-1.png'),url('/pattern.png')] bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero1 />
      </div>

      <Hero2 />

      <div
        className="bg-black bg-[url('/gradient-2.png'),url('/pattern6.png')] bg-cover bg-no-repeat bg-center">
        <Hero3 />
      </div>

      <Hero4 />

      <div className="bg-gray-100 bg-[url('/pattern4.png')] bg-cover">
        <Hero5 />
      </div>

      <Hero6 />

      <Hero7 />

      <div className="bg-[url('/footer-pattern.png')] bg-cover">
        <Footer />
      </div>
    </div>
  );
}
