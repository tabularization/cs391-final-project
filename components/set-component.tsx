import { CardSet } from "@/types/cardSet";
import Image from "next/image";

export default function SetComponent({ sets }: { sets: CardSet[] }) {
  const duplicated = [...sets, ...sets];

  return (
    <div>
      <ul className="flex w-max animate-scroll-x">
        {duplicated.map((set, i) => (
          <li key={i} className="relative h-[130px] w-[230px] mx-6 drop-shadow-lg drop-shadow-gray-900/40">
            <Image src={set.images.logo} alt={`Logo for ${set.name}`} fill draggable={false} />
          </li>
        ))}
      </ul>
    </div>
  );
}
