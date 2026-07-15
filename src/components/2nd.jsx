import React from "react";
import { useNavigate } from "react-router-dom";
import './second.css'
function SecondPage() {
  const navigate=useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100 flex items-center justify-center p-6">

      <div className="max-w-3xl w-full bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-10">

        <h1 className="text-5xl font-bold text-center text-pink-600 mb-4">
          Why You're So Special? 💖
        </h1>

        <p className="text-center text-gray-600 text-lg mb-8">
          There are a million reasons why you make my world brighter...
          Here are just a few. 🌸
        </p>

        <div className="space-y-5">

          <div className="bg-pink-50 border-l-4 border-pink-500 rounded-xl p-5 hover:scale-105 transition duration-300 shadow">
            😊 Your smile can make even the darkest day feel beautiful.
          </div>

          <div className="bg-pink-50 border-l-4 border-pink-500 rounded-xl p-5 hover:scale-105 transition duration-300 shadow">
            💕 Talking to you is my favorite part of every day.
          </div>

          <div className="bg-pink-50 border-l-4 border-pink-500 rounded-xl p-5 hover:scale-105 transition duration-300 shadow">
            🌹 Your kindness is one of the most beautiful things about you.
          </div>

          <div className="bg-pink-50 border-l-4 border-pink-500 rounded-xl p-5 hover:scale-105 transition duration-300 shadow">
            ✨ You inspire me to become a better person.
          </div>

          <div className="bg-pink-50 border-l-4 border-pink-500 rounded-xl p-5 hover:scale-105 transition duration-300 shadow">
            ❤️ Every moment spent with you becomes a memory I cherish.
          </div>

        </div>

        <div className="flex justify-center mt-10">
          <button onClick={()=> navigate('/third')}  className='continue'>
            Continue ➜
          </button>
          
          
        </div>

      </div>

    </div>
    
  );
}

export default SecondPage;