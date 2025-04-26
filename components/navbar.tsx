import Link from "next/link";

// Navbar Component By Dennis Chen - renders the site's main navigation bar with all links
export default function Navbar() {
  return (
    // Flex for styling + margin and padding for whitespace
    <nav className="font-sans tracking-[1px] font-[300] flex justify-between items-center mx-25 pt-10 mb-30 text-[1.2rem] uppercase">
      <Link href="/">
        {/* Website logo styled as button (no functionality)*/}
        <p className="border rounded-[60] border-red py-2 px-4 font-[500] bg-gray-900/10 tracking-[-1px]">
          TCG Simulator
        </p>
      </Link>
      <ul className="flex gap-x-18">
        {/* Navigation links using NextJS link */}
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li className="border cursor-pointer rounded-[60] px-5 tracking-[1.5px] bg-sky-300/40">
          <Link href="/draw">Start</Link>
        </li>
      </ul>
    </nav>
  );
}
