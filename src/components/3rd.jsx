import { useState } from "react";
import "./third.css";

function ThirdPage() {
  const noTexts = [
    "No 💔",
    "Are you sure? 🥺",
    "Think Again ❤️",
    "Please? 🥹",
    "Really? 😭",
    "Last Chance 😂",
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [move, setMove] = useState(false);

  const [position, setPosition] = useState({
    top: "68%",
    left: "58%",
  });

  const moveButton = () => {
    setMove(true);

    const randomTop = Math.random() * 75 + 10;
    const randomLeft = Math.random() * 75 + 10;

    setPosition({
      top: `${randomTop}%`,
      left: `${randomLeft}%`,
    });

    setTextIndex((prev) => (prev + 1) % noTexts.length);
  };

  const handleYes = () => {
    alert("Yay!! ❤️ You just made me the happiest person alive! 🌹");
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100">

      {/* Floating Hearts */}
      <div className="absolute inset-0 overflow-hidden">
        <span className="absolute left-10 top-20 text-4xl animate-bounce">💖</span>
        <span className="absolute right-16 top-40 text-3xl animate-pulse">💕</span>
        <span className="absolute left-1/4 bottom-28 text-5xl animate-bounce">💗</span>
        <span className="absolute right-1/3 bottom-16 text-4xl animate-pulse">💞</span>
      </div>

      {/* Main Card */}
      <div className="z-10 w-[90%] max-w-2xl rounded-3xl bg-white/80 p-10 text-center shadow-2xl backdrop-blur-md">

        <h1 className="mb-6 text-5xl font-bold text-pink-600">
          One Last Question... ❤️
        </h1>

        <p className="mb-4 text-lg leading-8 text-gray-700">
          Every conversation with you has made my days brighter,
          and every smile of yours has become my favorite.
        </p>

        <p className="mb-6 text-lg leading-8 text-gray-700">
          I don't know what the future holds,
          but I'd love to make beautiful memories with you.
        </p>

        <h2 className="mb-10 text-3xl font-bold text-rose-500">
          Will you be my girlfriend? 🌹❤️
        </h2>

        {/* Buttons */}
        <div className="flex justify-center items-center gap-6">
          <button className="yes-btn" onClick={handleYes}>
            Yes ❤️
          </button>

          {!move && (
            <button className="no-btn" onClick={moveButton}>
              {noTexts[textIndex]}
            </button>
          )}
        </div>
      </div>

      {/* Moving No Button */}
      {move && (
        <button
          className="no-btn moving"
          onClick={moveButton}
          style={{
            top: position.top,
            left: position.left,
          }}
        >
          {noTexts[textIndex]}
        </button>
      )}
    </div>
  );
}

export default ThirdPage;