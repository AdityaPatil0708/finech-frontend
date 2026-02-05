import Link from "next/link";
import { Button } from "./ui/Button";
import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  return (
    <nav className=" max-w-7xl mx-auto flex items-center justify-between py-6">
      {/* Logo */}
      <div className="flex items-center gap-2 flex-1">
        <img src="/logo.png" alt="Finech logo" className="h-7 w-7" />
        <span className="font-bold text-2xl tracking-tight text-white">finech</span>
      </div>

      {/* Nav links - Centered */}
      <ul className="hidden md:flex items-center gap-5 flex-1 justify-center text-white text-sm">
        <li><Link href="">Home</Link></li>
        <li><Link href="">Solutions</Link></li>
        <li><Link href="">Integrations</Link></li>
        <li><Link href="">Pricing</Link></li>
        <li><Link href="">Resources</Link></li>
      </ul>

      {/* Actions - Right aligned */}
      <div className="flex items-center gap-4 flex-1 justify-end">
        <Link
          href="/login"
          className="text-sm text-white "
        >
          Login
        </Link>
        <Button text="Get Started" icon={ArrowUpRight} />
      </div>
    </nav>
  );
}