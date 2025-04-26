"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import getSetData from "@/lib/getSets";
import { CardSet } from "@/types/cardSet";
import SetComponent from "@/components/set-component";

// Home Page By Dennis Chen
export default function Home() {
  // State to store the fetched list of card sets of CardSet datatype
  const [newCardSet, setNewCardSet] = useState<CardSet[]>([]);

  // Fetch the latest card sets on component mount (sorted by release date)
  useEffect(() => {
    const fetchData = async () => {
      const latest = await getSetData("-releaseDate");
      setNewCardSet(latest);
    };
    fetchData();
  }, []);

  return (
    // Flex for layout, margin and padding for whitespace, font + color classes for typography tweaks
    <div className="relative flex flex-col text-[#2E2E2E] h-full mt-30 items-center justify-start font-sans tracking-[-2px]">
      {/* Fixed animated background using fixed position relative to parent div, created separate div element for blur effect */}
      {/* Can't directly used background-image on main div since it would blur whole page - hence the need for seperate div */}
      <div className="fixed inset-0 bg-[url('/bg5.png')] bg-size-[100%_auto] blur-[10px] z-[-1] animate-bg-zoom"></div>
      {/* Main Heading */}
      <h1 className="text-[3.5rem] font-[500] capitalize">
        Discover <span className="italic tracking-[-2px]">legendary</span> cards, Start Collecting
      </h1>
      <h2 className="text-[3rem] font-sans font-[300]">
        Over <span className="font-mono underline">1000+</span> Cards From Different Sets
      </h2>
      {/* Clickable button with animations linking to the draw packs page */}
      <Link href="/draw">
        <button className="border cursor-pointer rounded-[60] text-[1.2rem] mt-10 py-3 px-10 tracking-[1.5px] font-[500] uppercase text-gray-900 hover:bg-sky-300/40 hover:-translate-y-1 transition delay-100 duration-300 ease-in-out">
          Open pack &#10132;
        </button>
      </Link>
      <Image
        src="/img1.png"
        alt="Picture drawing of 2 people playing cards."
        draggable={false}
        height={400}
        width={450}
      />
      {/* Set section - crediting Pokemon TCG API */}
      <div className="flex flex-col justify-center items-center text-[3rem] uppercase my-35">
        <h1 className="tracking-[1px] font-[500]">Recently Released Sets</h1>
        <p className="font-[300] tracking-[0.5px] text-[1.2rem]">
          Data and images provided by{" "}
          <a href="https://pokemontcg.io/" target="_blank" rel="noopener noreferrer" className="underline">
            Pokémon TCG API
          </a>
        </p>
      </div>
      {/* w-100% to equal width of parent for smooth animation, otherwise animation would break due to large width*/}
      <div className="flex justify-start w-[100%] pb-40 overflow-hidden">
        {/* Render the SetComponent, passing in the fetched card sets as props */}
        <SetComponent sets={newCardSet} />
      </div>
    </div>
  );
}
