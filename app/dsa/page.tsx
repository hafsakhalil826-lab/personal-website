"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Dancing_Script } from "next/font/google";

const scriptFont = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
});

const FLASHCARDS = [

  // --- OOP Flashcards ---
  {
    category: "OOP",
    question: "What are the four pillars of Object-Oriented Programming?",
    answer: "Encapsulation, Abstraction, Inheritance, and Polymorphism.",
  },
  {
    category: "OOP",
    question: "What is the difference between Method Overloading and Method Overriding?",
    answer: "Overloading happens at compile-time (same method name, different parameters in the same class). Overriding happens at runtime (subclass overrides a parent class method).",
  },
  {
    category: "OOP",
    question: "What is the difference between an Abstract Class and an Interface?",
    answer: "An abstract class can have instance variables, constructors, and both abstract/concrete methods (single inheritance). An interface contains only method signatures/constants and supports multiple implementation.",
  },
  {
    category: "OOP",
    question: "What is the Diamond Problem in Multiple Inheritance and how is it resolved?",
    answer: "It occurs when a class inherits two classes that share a common base class, causing ambiguity. In C++, it is resolved using virtual inheritance.",
  },

    // --- DSA Flashcards ---
  {
    category: "DSA",
    question: "What is the time complexity of searching in a Balanced Binary Search Tree (BST)?",
    answer: "O(log n) because the tree is balanced, cutting the search space in half at each step.",
  },
  {
    category: "DSA",
    question: "When should you use BFS vs DFS in graph traversal?",
    answer: "Use BFS for shortest path in unweighted graphs. Use DFS for exploring all paths, cycle detection, or topological sorting.",
  },
  {
    category: "DSA",
    question: "What is the primary difference between Two Sum solutions using Hash Maps vs Brute Force?",
    answer: "Brute Force checks every pair in O(n²) time. Using a Hash Map allows tracking complements in O(n) time with O(n) space complexity.",
  },
  {
    category: "DSA",
    question: "How do you detect a cycle in a Linked List?",
    answer: "Use Floyd's Cycle-Finding Algorithm (Tortoise and Hare pointer): a slow pointer moves 1 step while a fast pointer moves 2 steps. If they meet, a cycle exists.",
  },
  // --- SQL Flashcards ---
  {
    category: "SQL",
    question: "What is the difference between INNER JOIN and LEFT JOIN?",
    answer: "INNER JOIN returns only matching rows in both tables. LEFT JOIN returns all rows from the left table, plus matched rows from the right table (or NULLs if no match).",
  },
  {
    category: "SQL",
    question: "What is a SQL Window Function and give an example?",
    answer: "A window function performs a calculation across table rows related to the current row without collapsing them (e.g., ROW_NUMBER(), RANK(), SUM() OVER(PARTITION BY ...)).",
  },
  {
    category: "SQL",
    question: "What is the difference between WHERE and HAVING clauses?",
    answer: "WHERE filters rows *before* aggregation (grouping). HAVING filters groups *after* aggregation has taken place.",
  },
  {
    category: "SQL",
    question: "What are CTEs (Common Table Expressions) and why are they used?",
    answer: "A CTE is a temporary result set defined within the execution scope of a single SELECT, INSERT, UPDATE, or DELETE statement. They improve query readability and allow recursive queries.",
  },
];

export default function FlashcardsPage() {
  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({});

  const toggleCard = (index: number) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[oklch(64.5%_0.246_16.439)] selection:text-white flex flex-col justify-between">
      
      {/* Top Header Bar */}
      <header className="bg-[oklch(64.5%_0.246_16.439)] text-white py-4 px-6 md:px-12 shadow-md">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="text-white hover:underline text-sm font-semibold flex items-center gap-1"
          >
            ← Back to Portfolio
          </Link>
          <span className={`${scriptFont.className} text-2xl text-white`}>
            Hafsa Khalil
          </span>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-6 md:px-0 py-10 space-y-8 w-full flex-grow">
        
        {/* Header */}
        <header className="border-b border-rose-200 pb-6 space-y-2">
          <h1 className={`${scriptFont.className} text-5xl text-[oklch(64.5%_0.246_16.439)]`}>
            OOP, DSA & SQL Flashcards 
          </h1>
          <p className="text-slate-600 font-medium">
            Click any card to flip and reveal the core concept explanation! Perfect for technical interviews.
          </p>
        </header>

        {/* Flashcards Grid with Pastel Pink Backgrounds & Borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FLASHCARDS.map((card, index) => {
            const isFlipped = flippedCards[index];
            return (
              <div
                key={index}
                onClick={() => toggleCard(index)}
                className="h-64 p-6 rounded-2xl border-2 border-[oklch(64.5%_0.246_16.439)]/30 bg-rose-50/50 hover:bg-rose-100/40 hover:border-[oklch(64.5%_0.246_16.439)] hover:shadow-md cursor-pointer transition-all duration-300 flex flex-col justify-between shadow-sm relative group select-none"
              >
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-[oklch(64.5%_0.246_16.439)] text-white shadow-xs">
                      {card.category}
                    </span>
                    <span className="text-xs text-[oklch(64.5%_0.246_16.439)] font-bold group-hover:scale-105 transition-transform">
                      {isFlipped ? "💡 Show Question" : "🔄 Click to Flip"}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-slate-800 mt-4 leading-relaxed">
                    {isFlipped ? card.answer : card.question}
                  </h3>
                </div>

                <div className="text-xs text-[oklch(64.5%_0.246_16.439)] font-bold pt-4 border-t border-[oklch(64.5%_0.246_16.439)]/20 flex justify-between items-center">
                  <span>{isFlipped ? "Answer View" : "Question View"}</span>
                  <span>Card #{index + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lower Footer Bar */}
      <footer className="bg-[oklch(64.5%_0.246_16.439)] text-white py-6 px-6 md:px-12 mt-12 text-center text-sm font-medium">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <p>© 2026 Hafsa Khalil. Built with Next.js & Tailwind CSS.</p>
        </div>
      </footer>

    </main>
  );
}