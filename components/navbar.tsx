import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="font-sans tracking-[1px] font-[300] flex justify-between items-center mx-25 pt-10 mb-30 text-[1.2rem] uppercase">
      <Link href="/">
        <p className="border rounded-[60] border-red py-2 px-4 font-[500] bg-gray-800/20 tracking-[-1px]">
          TCG Simulator
        </p>
      </Link>
      <ul className="flex gap-x-18">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">About</Link>
        </li>
        <li>
          <Link href="/">Start</Link>
        </li>
      </ul>
    </nav>
  );
}
