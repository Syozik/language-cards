"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Link from "next/link";

export default function AddWordPairPage() {
  const [englishWord, setEnglishWord] = useState("");
  const [danishWord, setDanishWord] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (!englishWord || !danishWord) {
      setError("Please enter both English and Danish words.");
      return;
    }

    try {
      const response = await fetch("/api/addWord", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ en_word: englishWord, dk_word: danishWord }),
      });

      if (response.ok) {
        setMessage("Word pair added successfully!");
        setEnglishWord("");
        setDanishWord("");
      } else {
        const data = await response.json();
        setError(data.error || "Failed to add word pair.");
      }
    } catch (err) {
        console.log(err);
    }
  };

  return (
    <>
      <div className="container mt-[40px] mx-auto p-4 w-[350px]">
        <Card className="w-full max-w-md mx-auto">
          <CardHeader>
            <CardTitle>Add New Word Pair</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  value={englishWord}
                  onChange={(e) => setEnglishWord(e.target.value)}
                  placeholder="Enter English word"
                  className="w-full"
                />
              </div>
              <div>
                <Input
                  type="text"
                  value={danishWord}
                  onChange={(e) => setDanishWord(e.target.value)}
                  placeholder="Enter Danish word"
                  className="w-full"
                />
              </div>
              <Button type="submit" className="w-full">
                Add Word Pair
              </Button>
            </form>

            {message && (
              <Alert className="mt-4">
                <AlertDescription>{message}</AlertDescription>
              </Alert>
            )}

            {error && (
              <Alert variant="destructive" className="mt-4">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>
      </div>
      <Link
        href="/"
        className="flex items-center px-4 py-2 bg-[#C6FCFF] text-black font-semibold rounded-lg shadow-md hover:bg-[#ace8e1] hover:shadow-lg transition duration-200 ease-in-out gap-[12px] transform hover:scale-[1.02]"
      >
        Home 
        <img src="/home.svg" className="mb-[4px]" width={20} height={20}/>
      </Link>
    </>
  );
}
