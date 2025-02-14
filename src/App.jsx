"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 25;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are You Sure?",
      "What If I Asked Really Nicely?",
      "Cutie Please",
      "With a Chipsu With Noodles",
      "What About Bhakarwadi",
      "What about a Kittu Kattu",
      "PLEASE PENTOLU",
      "But :*(",
      "I am Going To Die",
      "Yess Im Dead",
      "Okk ur Talking To Mr.Bhoot",
      "Please Cutie",
      ":((((",
      "PRETTY PLEASE",
      "Pentoluuu",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold text-center">Yeeeaaaa💗💗💗 I Love You Sooo Much Pentolu 💝💞💘 ;))</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl text-center">Will You Be My Valentine?</h1>
          <div className="flex items-center flex-col lg:flex-row  gap-4">
            <button
              className={`rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
