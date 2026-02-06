import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Hero1 } from "./components/ui/Hero1";
import { Hero2 } from "./components/ui/Hero2";

export default function Home() {
  return (
    <div>
      {/* Hero section with gradient background */}
      <div
        className="
    bg-black
    bg-[url('/gradient-1.png'),url('/pattern.png')]
    bg-cover
    bg-no-repeat
    bg-center
  "
      >
        <Navbar />
        <Hero1 />
      </div>

      <Hero2 />

      {/* Footer section with pattern background */}
      <div className="bg-[url('/pattern.png')] bg-cover bg-repeat">
        <Footer />
      </div>
    </div>
  );
}
