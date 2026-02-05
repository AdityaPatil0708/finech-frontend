import Navbar from "./components/Navbar";
import { Hero1 } from "./components/ui/Hero1";

export default function Home() {
  return (
    <div 
      className="bg-zinc-950"
      style={{ 
        backgroundImage: "url('./gradient.png'), url('./pattern.png')",
        backgroundSize: "cover",
        backgroundPosition: "center, center",
        backgroundRepeat: "no-repeat, repeat"
      }}
    >
      <Navbar/>
      <main>
        <Hero1/>
      </main>
    </div>
  );
}