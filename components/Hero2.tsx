import Link from 'next/link';
import React from 'react'

export const metadata= {
  title: "Hero",
};

export default function Hero2() {
  return (
    <div>
      <div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 animate-gradientBG flex items-center justify-center min-h-screen overflow-hidden relative">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white opacity-30 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-30 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-30 rounded-full filter blur-3xl animate-blob animation-delay-6000"></div>
        <div className="relative z-10 text-center p-8">
          <h1 className="text-6xl font-bold text-white mb-4">
            Welcome to the Future
          </h1>
          <p className="text-xl text-white">
            Experience innovation and technology like never before.
          </p>
          <Link
            href="#learn-more"
            className="inline-block bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
