
import "./home.css";

import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate=useNavigate();

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-pink-100 from-pink-100 via-rose-50 to-purple-100">

      {/* Floating Hearts */}
      <div className="absolute inset-0 overflow-hidden">
        <span className="absolute left-10 top-20 text-4xl animate-bounce">💖</span>
        <span className="absolute right-16 top-40 text-3xl animate-pulse">💕</span>
        <span className="absolute left-1/4 bottom-32 text-5xl animate-bounce delay-300">💗</span>
        <span className="absolute right-1/3 bottom-16 text-4xl animate-pulse">💞</span>
      </div>

      {/* Main Card */}
      <div className="z-10 w-[90%] max-w-xl rounded-3xl bg-white/70 p-10 text-center shadow-2xl backdrop-blur-md">

        <p className="mb-3 text-lg font-medium text-pink-600">
          Hey Beautiful ❤️
        </p>

        <h1 className="mb-6 text-5xl font-bold text-gray-800">
          I Have Something
          <br />
          Special For You...
        </h1>

        <p className="mb-8 text-lg leading-8 text-gray-600">
          There are some feelings that are difficult to express with words...
          <br />
          So, I made this little website just for you. 🌸
        </p>

      <button     className="proposal-btn" onClick={()=> navigate('/secondpage')}>
  Open My Heart 💌
</button>
<p>~dev mishra</p>
      </div>

    </div>
  );
}

export default Home;