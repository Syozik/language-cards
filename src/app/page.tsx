"use client";
import Card from "@/app/components/card";
import { useState, useEffect } from "react";
import Link from "next/link";

async function getWord() {
  try {
    const res = { en: "", dk: "" };
    const response = await fetch("/api/getWord", {
      cache: "no-store",  // Add this line
      headers: {
        'Cache-Control': 'no-cache'  // Add this line
      }
    });
    const word = await response.json();
    res.en = word["en_word"];
    res.dk = word["dk_word"];
    console.log(res);
    return res;
  } catch (err) {
    console.log("Error fetching data: ", err);
    return { en: "", dk: "" };
  }
}

export default function Home() {
  const [word, setWord] = useState({ en: "", dk: "" });

  useEffect(() => {
    const fetchWord = async () => {
      const newWord = await getWord();
      setWord(newWord);
    };
    fetchWord();
  }, []);

  const handleNextWord = async () => {
    const newWord = await getWord();
    setWord(newWord);
  };

  return (
    <>
      <Card key={word.en + word.dk} word={word} />

      <div className="buttons flex gap-[20px]">
        <Link href="/add-word" className="px-4 py-2 bg-[rgb(25,25,25)] text-white font-semibold rounded-lg shadow-md hover:bg-black hover:shadow-lg transition duration-200 ease-in-out transform hover:scale-[1.03]">
          Add new word
        </Link>
        <Link href="all-words" className="px-4 py-2 bg-[rgb(205,205,205)] text-black font-semibold rounded-lg shadow-md hover:bg-white hover:shadow-lg transition duration-200 ease-in-out transform hover:scale-[1.03]">
          All words
        </Link>
        <button
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg transition duration-200 ease-in-out transform hover:scale-[1.03]"
          onClick={handleNextWord}
        >
          Next word &rarr;
        </button>
      </div>
    </>
  );
}
