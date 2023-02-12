import Link from "next/link";
import { Inter } from "@next/font/google";

const inter = Inter({
  weight: ["700", "700"],
  subsets: ["latin"],
});

export default function MyNavbar() {
  return (
    <nav className={`text-2xl font-medium z-20 relative ${inter}`}>
      <ul className="flex gap-8">
        <Link href={"/"}>
          <li>Home</li>
        </Link>
        <Link href={"/services"}>
          <li>Services</li>
        </Link>
        <Link href={"/contact"}>
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}
