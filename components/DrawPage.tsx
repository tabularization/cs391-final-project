//Draw Page component by Alvin Zhu 
//This page handles logic for pulling data from the Pokemon TCG API and displaying the results accordingly  
"use client"

import { useState } from 'react'; 
import Image from "next/image";

export default function DrawPage(){
 // Store the cards in a list
  const [cards, setCards] = useState<string[]>([]);
  // Loading status 
  const [loading, setLoading] = useState(false);

  // Fetching data from API
  async function fetchCards() { 
    setLoading(true);
    const res = await fetch("https://api.pokemontcg.io/v2/cards?pageSize=50"); 
    const {data} = await res.json(); 
    

    // Select 5 random cards to put in our cards list
    const selectedCards = []; 
    for (let i = 0; i < 5; i++) {
      const randomInt = Math.floor(Math.random() * data.length); 
      selectedCards.push(data[randomInt].images.small);
    }
    
    // Change our cards list with our new cards so that we can display them and removes the loading animation 
    setCards(selectedCards); 
    setLoading(false);
  }

  return (
    //Kept same layout/background as landing page to maintain consistency in styling
    //Flex is used for the page layout with items centered, margin and padding for whitespace, font and color classes for text styling
    <div className="relative flex flex-col text-[#2E2E2E] h-full mt-30 items-center justify-start font-sans tracking-[-2px]">
      <div className="fixed inset-0 bg-[url('/bg5.png')] bg-size-[100%_auto] blur-[10px] z-[-1] animate-bg-zoom"></div>

      {/* Container for drawing page contents*/}

      <div className="flex flex-col items-center">
        {/* Clickable fetch cards button, same styles as landing page */}
        <button 
          onClick={fetchCards} 
          className="max-w-64 min-w-64 border cursor-pointer rounded-[60px] text-[1.2rem] mb-20 py-3 px-10 tracking-[1.5px] font-[500] uppercase text-gray-900 hover:bg-sky-300/40 hover:-translate-y-1 transition delay-100 duration-300 ease-in-out"
        >
          DRAW CARDS
        </button>

        {/* Display the cards if available, if data is fetching it will show loading*/}
        {loading ? ( // tracking-normal to reduce letter distance
        <div className = "flex flex-col">
          <p className="text-xl font-bold tracking-normal text-center mt-6">
            LOADING CARDS...
          </p>
          <img className = "w-64 mt-20 h-auto" src={"/pikachu.gif"} alt = "loading pikachu gif"></img>
          </div>
        ) : cards.length > 0 ? ( //Ternary operator, if there is cards that are ready to be displayed we show it 
            // container for the cards, flex-wrap for responsiveness, on smaller screens it will display one by one and user scrolls down to see more
          <div className="flex flex-wrap justify-center gap-10 mt-6">
            {cards.map((card, index) => (
              <Image 
                width = {240}
                height = {340}
                key={index} 
                src={card} 
                alt="Pokemon Card" 
                className="shadow-xl"
              />
            ))}
          </div>
        ) : ( //If there are no cards currently, instruct the user to click button, tracking-normal to spread out letters in words.
          <div>
            <p className="text-xl font-bold tracking-normal text-center mt-6">
                PRESS THE BUTTON TO DISPLAY CARDS
            </p>
            <img className ="mt-15" src="/gengar.gif" alt ="pokemon gif"/>
            
        </div>

        )}
      </div>
    </div>
  );
}; 
