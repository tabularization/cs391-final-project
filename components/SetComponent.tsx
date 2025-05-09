// Set Component by Dennis Chen - displays a horizontally scrolling list of card set logos fetched via Pokemon TCG APi
import { CardSet } from "@/types/cardSet";
import Image from "next/image";

export default function SetComponent({ sets }: { sets: CardSet[] }) {
  // Duplicate the sets to create a seamless scrolling loop since one set is not enough for a smooth effect.
  // The animation will end preemptively without the duplicated data to fill in blank space - making the animation look like it teleported
  const duplicated = [...sets, ...sets];

  return (
    <div>
      {/* Flex for layout + max width for scroll animation to not break due to spacing*/}
      <ul className="flex w-max animate-scroll-x">
        {/* Use map to create an Image element that displays the set logo for each element in the sets array */}
        {duplicated.map((set, i) => (
          <li key={i} className="relative h-[130px] w-[230px] mx-6 drop-shadow-lg drop-shadow-gray-900/40">
            <Image src={set.images.logo} alt={`Logo for ${set.name}`} fill draggable={false} />
          </li>
        ))}
      </ul>
    </div>
  );
}
