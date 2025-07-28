import React from "react";

export const metadata = {
  title : "Not Found",
};

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-slate-300">
        <div className=" bg-red-700 p-6 rounded-xl">
          <div className="text-white text-lg">Data Not Found!</div>
        </div>
    </div>
  );
}
