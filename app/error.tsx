"use client";
import React from "react";
import "tailwindcss/tailwind.css"; // Tailwind CSS stillerini içe aktar

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Something went wrong!</h2>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"
          onClick={() => reset()}
        >
          Try again
        </button>
      </div>
    </div>
  );
}
