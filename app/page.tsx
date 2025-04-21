import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex flex-col text-[#2E2E2E] h-full mt-30 items-center justify-start font-sans tracking-[-2px]">
      <div className="fixed inset-0 bg-[url('/bg5.png')] bg-size-[100%_auto] blur-[10px] z-[-1] animate-bg-zoom"></div>
      <h1 className="text-[3.5rem] font-[500] capitalize">
        Discover <span className="italic tracking-[-2px]">legendary</span> cards, Start Collecting
      </h1>
      <h2 className="text-[3rem] font-sans font-[300]">
        Over <span className="font-mono underline">1000+</span> Cards From Different Sets
      </h2>
      <Link href="/sets">
        <button className="border cursor-pointer rounded-[60] text-[1.2rem] mt-10 py-3 px-10 tracking-[1.5px] font-[500] uppercase text-gray-900 hover:bg-sky-300/40 hover:-translate-y-1 transition delay-100 duration-300 ease-in-out">
          Open pack &#10132;
        </button>
      </Link>
      <Image
        src="/img1.png"
        alt="Picture drawing of 2 people playing cards."
        draggable={false}
        height={400}
        width={600}
      />
    </div>
  );
}
