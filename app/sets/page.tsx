"use client";
import { useState, useEffect } from "react";
import getSetData from "@/lib/getSets";
import { CardSet } from "@/types/cardSet";
import SetComponent from "@/components/set-component";

export default function SetPage() {
  const [newCardSet, setNewCardSet] = useState<CardSet[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const latest = await getSetData("-releaseDate");
      setNewCardSet(latest);
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col h-full overflow-hidden">
        <div className="flex justify-center items-center text-[3rem] uppercase">
            <h1 className="tracking-[2px] font-[200] mb-30">Choose a set</h1>
        </div>
          <SetComponent sets={newCardSet}/>
    </div>
  );
}
