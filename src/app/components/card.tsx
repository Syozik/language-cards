"use client";

import styles from "@/app/page.module.css";
import { useEffect, useState } from "react";

function isEqual(word1: string, word2: string): boolean {
  return word1.toLowerCase() == word2.toLowerCase();
}

export default function Card(props: { word: { en: string; dk: string } }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [answer, setAnswer] = useState("");
  useEffect(()=>{
    setAnswer("");
    setIsFlipped(false);
  }, [props.word])
  const { en, dk } = props.word;
  const handleClick = () => {
    setIsFlipped(!isFlipped);
    fetch("/api/result", {
      method: "POST",
      body: JSON.stringify({ en_word: en, res: isEqual(answer, dk) ? 1 : -1 }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const isLoading = !en && !dk;

  return (
    <div className={`w-full [perspective:1000px]`}>
      <div
        className={`${
          styles.card
        } relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {isLoading ? (
          <div className="flex justify-center items-center w-full h-full">
            <div className="loader"></div>
          </div>
        ) : (
          <>
            <div className="absolute w-full h-full flex justify-center items-center [backface-visibility:hidden] shadow-xl">
              <div className={`${styles.cardWord}`}>{en}</div>
              <div className="absolute right-[10px] top-[10px] text-[#7c2d12] italic">
                en
              </div>
              <div className="absolute bottom-[100px]">
                <input
                  className="rounded-lg shadow-xl text-black text-center ml-10"
                  onClick={(e) => e.stopPropagation()}
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  placeholder="Translation"
                ></input>
                <button
                  className="px-2 rounded-lg ml-3 bg-[rgba(0,120,20,0.5)]"
                  onClick={handleClick}
                >
                  ✓
                </button>
              </div>
            </div>

            <div
              className="absolute w-full h-full flex justify-center items-center [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-xl"
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <div className={styles.cardWord}>{dk}</div>
              <div className="absolute right-[10px] top-[10px] text-[#7c2d12] italic">
                dk
              </div>
              <div
                className={`absolute bottom-[130px] px-[15px] text-white rounded-xl text-lg ${
                  answer == dk ? "bg-green-500" : "bg-red-500"
                }`}
              >
                Your answer: <b>{answer}</b>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
