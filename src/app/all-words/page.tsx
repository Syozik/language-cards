"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Word {
  en_word: string;
  dk_word: string;
  '"right"': number;
  wrong: number;
}

const AllWordsPage: React.FC = () => {
  const [words, setWords] = useState<Word[]>([]);
  const [filteredWords, setFilteredWords] = useState<Word[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWords = async () => {
      try {
        const response = await fetch("/api/words");
        if (!response.ok) {
          throw new Error("Failed to fetch words");
        }
        const data = await response.json();
        setWords(data);
        setFilteredWords(data); // Initialize filteredWords with the full word list
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchWords();
  }, []);

  useEffect(() => {
    const filtered = words.filter(
      (word) =>
        word.en_word.toLowerCase().includes(searchQuery.toLowerCase()) ||
        word.dk_word.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredWords(filtered);
  }, [searchQuery, words]);

  if (loading) {
    return <p className="mt-[40px]">Loading words...</p>;
  }

  if (error) {
    return <p className="mt-[40px]">Error: {error}</p>;
  }

  return (
    <div className="flex flex-col">
      <div className="mt-[40px] rounded-xl text-black bg-gray-100 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-3 mt-4">All Words</h1>

        <input
          type="text"
          placeholder="Search words..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mb-6 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300 w-full max-w-2xl"
        />
        <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg overflow-auto max-h-[55vh]">
          <table className="table-auto w-full min-w-[700px] hidden md:table">
            <thead>
              <tr>
                <th className="px-4 py-2">English</th>
                <th className="px-4 py-2">Danish</th>
                <th className="px-4 py-2">Right</th>
                <th className="px-4 py-2">Wrong</th>
              </tr>
            </thead>
            <tbody>
              {filteredWords.length > 0 ? (
                filteredWords.map((word, index) => (
                  <tr key={index} className="border-b border-gray-300">
                    <td className="px-4 py-2">{word.en_word}</td>
                    <td className="px-4 py-2">{word.dk_word}</td>
                    <td className="px-4 py-2">{word['"right"']}</td>
                    <td className="px-4 py-2">{word.wrong}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="text-center py-4 h-[50px]">
                    No matching words found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          {/* Card view for mobile screens */}
          <div className="block md:hidden">
            {filteredWords.length > 0 ? (
              filteredWords.map((word, index) => (
                <div
                  key={index}
                  className="mb-4 p-4 border rounded-lg shadow-sm bg-gray-50"
                >
                  <p className="font-semibold">
                    English: <span className="font-normal">{word.en_word}</span>
                  </p>
                  <p className="font-semibold">
                    Danish: <span className="font-normal">{word.dk_word}</span>
                  </p>
                  <p className="font-semibold">
                    Right:{" "}
                    <span className="font-normal">{word['"right"']}</span>
                  </p>
                  <p className="font-semibold">
                    Wrong: <span className="font-normal">{word.wrong}</span>
                  </p>
                </div>
              ))
            ) : (
              <p className="text-center py-4 h-[50px]">
                No matching words found.
              </p>
            )}
          </div>
        </div>
      </div>
      <Link
        href="/"
        className="flex w-[120px] self-center mt-[20px] items-center px-4 py-2 bg-[#C6FCFF] text-black font-semibold rounded-lg shadow-md hover:bg-[#ace8e1] hover:shadow-lg transition duration-200 ease-in-out gap-[12px] transform hover:scale-[1.02]"
      >
        Home
        <img src="/home.svg" className="mb-[4px]" width={20} height={20} />
      </Link>
    </div>
  );
};

export default AllWordsPage;
