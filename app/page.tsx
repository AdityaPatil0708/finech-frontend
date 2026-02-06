import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Hero1 } from "./components/ui/Hero1";

export default function Home() {
  return (
    <div>
      {/* Top section with gradient and pattern */}
      <div 
        className="bg-black"
        style={{ 
          backgroundImage: "url('./gradient.png'), url('./pattern.png')",
          backgroundSize: "cover, 90%",
          backgroundPosition: "bottom left, center",
          backgroundRepeat: "no-repeat, repeat"
        }}
      >
        <Navbar/>
        <Hero1/>
      </div>
      <div className="" style={{backgroundImage:"url(./pattern.png)",backgroundSize:"cover"}}>
        <Footer/>
      </div>
    </div>
  );
}