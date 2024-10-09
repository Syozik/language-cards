"use client";

import styles from "@/app/page.module.css";
import { useState } from "react";

function getWords() {
  return {
    en: "to meet",
    dk: "at møde",
  };
}

export default function Card() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className={`w-full [perspective:1000px]`}>
      <div
        className={`${
          styles.card
        } relative w-full h-full cursor-pointer transition-transform duration-500 [transform-style:preserve-3d] ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className="absolute w-full h-full flex justify-center items-center [backface-visibility:hidden] shadow-xl">
          <div className={`${styles.cardWord}`}>{getWords().en}</div>
          <div className="absolute right-[10px] top-[10px] text-[#7c2d12] italic">en</div>
        </div>
        <div className="absolute w-full h-full flex justify-center items-center [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-xl">
          <div className={styles.cardWord}>{getWords().dk}</div>
          <div className="absolute right-[10px] top-[10px] text-[#7c2d12] italic">dk</div>
        </div>
      </div>
    </div>
  );
}
