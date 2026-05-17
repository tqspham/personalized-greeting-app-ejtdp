"use client";

import { useState, useEffect } from "react";
import { Trash2, RotateCcw } from "lucide-react";

export default function Home() {
  const [name, setName] = useState("");
  const [mounted, setMounted] = useState(false);

  // Load name from localStorage on mount
  useEffect(() => {
    const savedName = localStorage.getItem("userName");
    if (savedName) {
      setName(savedName);
    }
    setMounted(true);
  }, []);

  // Save name to localStorage whenever it changes
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("userName", name);
    }
  }, [name, mounted]);

  const handleClear = () => {
    setName("");
  };

  const handleReset = () => {
    setName("");
    localStorage.removeItem("userName");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <main className="min-h-screen bg-(--color-background) flex items-center justify-center px-4 py-8">
      <style>{`
        :root {
          --color-background: #FEF9F3;
          --color-surface: #FFFFFF;
          --color-primary: #2D5A4E;
          --color-secondary: #E8B4A8;
          --color-accent: #C97A6D;
          --color-text: #1F3A35;
          --color-muted-text: #7A8A84;
          --color-border: #E5D9CE;
          --color-success: #4A7C5E;
          --color-warning: #D4904B;
          --color-danger: #B85C52;
        }
      `}</style>
      <div className="w-full max-w-md">
        {/* Input Section */}
        <div className="mb-12">
          <label
            htmlFor="nameInput"
            className="block text-sm font-medium text-(--color-text) mb-3"
          >
            Enter your name
          </label>
          <input
            id="nameInput"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="What's your name?"
            className="w-full px-4 py-3 rounded-lg border border-(--color-border) bg-(--color-surface) text-(--color-text) placeholder:text-(--color-muted-text) focus:outline-none focus:border-(--color-primary) focus:ring-1 focus:ring-(--color-primary) focus:shadow-[0_2px_8px_rgba(45,90,78,0.1)] transition-all duration-200"
          />
        </div>

        {/* Greeting Section */}
        <div className="mb-16 min-h-24 flex items-center justify-center">
          {name ? (
            <p className="text-4xl md:text-5xl font-serif text-(--color-primary) text-center leading-tight animate-fade-in">
              Hello, <span className="font-bold">{name}</span>!
            </p>
          ) : (
            <p className="text-2xl text-(--color-muted-text) text-center italic">
              Enter your name above
            </p>
          )}
        </div>

        {/* Buttons Section */}
        <div className="flex gap-4 justify-center">
          <button
            onClick={handleClear}
            disabled={!name}
            className="flex items-center gap-2 px-4 py-2 text-(--color-text) hover:text-(--color-accent) disabled:text-(--color-muted-text) disabled:cursor-not-allowed transition-colors duration-200 active:scale-95"
            aria-label="Clear name input"
          >
            <Trash2 size={18} />
            <span>Clear</span>
          </button>
          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-4 py-2 text-(--color-text) hover:text-(--color-accent) transition-colors duration-200 active:scale-95"
            aria-label="Reset app to initial state"
          >
            <RotateCcw size={18} />
            <span>Reset</span>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-in-out;
        }
      `}</style>
    </main>
  );
}
