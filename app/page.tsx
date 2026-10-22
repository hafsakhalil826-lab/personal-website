"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Dancing_Script } from "next/font/google";
import StarryBackground from "./StarryBackground";

const scriptFont = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Home() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  const quotes = [
    { text: "Simplicity is prerequisite for reliability.", author: "Edsger W. Dijkstra" },
    { text: "If you can't explain it simply, you don't understand it well enough.", author: "Albert Einstein" },
    { text: "An unexamined life is not worth living.", author: "Socrates" },
    { text: "You can never cross the ocean until you have the courage to lose sight of the shore.", author: "Christopher Columbus" },
    { text: "Sometimes good things fall apart so better things could fall together.", author: "Marilyn Monroe" },
    { text: "Problems are part of life, and facing them with a smile is ART OF LIFE.", author: "Unknown" },
    { text: "The day you stop racing, is the day you win the race.", author: "Bob Marley" },
    { text: "Life is too short to spend it at war with yourself. Be kind to yourself.", author: "Unknown" },
    { text: "Knowing yourself is the beginning of all wisdom.", author: "Aristotle" },
    { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "If you believe in yourself, anything is possible.", author: "Unknown" },
    { text: "Every saint has a past, and every sinner has a future.", author: "Oscar Wilde" },
    { text: "Man is the only creature who refuses to be what he is.", author: "Albert Camus" },
    { text: "Take a deep breath, acknowledge your strength, and keep showing up. Your time is coming. Your efforts are not in vain.", author: "Unknown" },
    { text: "Don't spend time beating on a wall, hoping to transform it into a door.", author: "Coco Chanel" },
    { text: "There is no need to be perfect to inspire others. Let people get inspired by how you deal with your imperfections.", author: "Unknown" },
    { text: "Opportunity follows struggle. It follows effort. It follows hard work. It doesn't come before.", author: "Shelby Steele" },
    { text: "Hustle in silence and let your success make the noise.", author: "Unknown" }
  ];

  const nextQuote = () => {
    setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
  };

  const prevQuote = () => {
    setCurrentQuoteIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[oklch(64.5%_0.246_16.439)] selection:text-white flex flex-col justify-between relative overflow-hidden">
      
      {/* Live Animated Starry Background */}
      <StarryBackground />

      {/* Top Header Bar */}
      <header className="bg-[oklch(64.5%_0.246_16.439)] text-white py-4 px-6 md:px-12 shadow-md relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className={`${scriptFont.className} text-4xl tracking-wide text-white`}>
              Hafsa Khalil
            </h1>
            <p className="text-white/90 text-sm font-medium tracking-wide">
              Computer Science Graduate and a lifelong learner.
            </p>
          </div>
          <div className="flex items-center gap-6 text-sm font-medium">
            <a
              href="https://github.com/hafsakhalil826-lab"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline transition-colors"
            >
              GitHub ↗
            </a>
            <a
              href="https://linkedin.com/in/syeda-hafsa-khalil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline transition-colors"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Body (z-10 keeps cards above stars) */}
      <div className="max-w-4xl mx-auto px-6 md:px-0 py-12 space-y-10 w-full flex-grow relative z-10">
        
        {/* Introduction Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center bg-rose-50/70 backdrop-blur-xs p-8 rounded-2xl border-2 border-[oklch(64.5%_0.246_16.439)]/30 shadow-sm">
          
          {/* Fully Round Panda Avatar */}
          <div className="flex justify-center">
            <div className="w-56 h-56 relative rounded-full overflow-hidden border-2 border-[oklch(64.5%_0.246_16.439)]/40 bg-white group flex items-center justify-center shadow-md">
              <Image
                src="/panda.png"
                alt="Hafsa Cartoon Avatar"
                width={224}
                height={224}
                className="object-cover w-full h-full rounded-full group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Bio Introduction & Navigation Buttons */}
          <div className="md:col-span-2 space-y-5">
            <div>
              <h2 className={`${scriptFont.className} text-4xl text-[oklch(64.5%_0.246_16.439)]`}>
                Hi, I'm Hafsa! 
              </h2>
              <p className="text-slate-700 leading-relaxed text-base mt-2">
                Welcome to my digital space! I'm a Computer Science graduate, AI research enthusiast, and curious by nature, currently enhancing my skills and actively seeking opportunities in industry or research within AI and ML. Whether I'm training models, building end-to-end production-ready software, exploring LLM safety alignment, or building interactive tools, I focus on first principles to craft scalable solutions using optimized code.
              </p>
            </div>

            <p className="text-slate-500 text-sm italic border-l-2 border-[oklch(64.5%_0.246_16.439)] pl-3">
              "Keen to work hard and motivated by the belief that practice makes a man expert"
            </p>

            {/* Action Buttons Hub */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/dsa"
                className="px-4 py-2 rounded-xl bg-[oklch(64.5%_0.246_16.439)] text-white hover:opacity-90 transition-all shadow-md font-semibold text-sm"
              >
                OOP, DSA and SQL Flashcards 
              </Link>
              
              <Link
                href="/research"
                className="px-4 py-2 rounded-xl bg-[oklch(64.5%_0.246_16.439)] text-white hover:opacity-90 transition-all shadow-md font-semibold text-sm"
              >
                Read Research Papers 
              </Link>

            </div>
          </div>
        </section>

        {/* Best Final Year Project Award Section */}
        <section className="bg-rose-50/70 backdrop-blur-xs p-8 rounded-2xl border-2 border-[oklch(64.5%_0.246_16.439)]/30 shadow-sm space-y-4 relative overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="space-y-1">
              <h3 className={`${scriptFont.className} text-4xl text-[oklch(64.5%_0.246_16.439)] mt-2`}>
                NeuroScan: AI-Based Brain Tumor Segmentation
              </h3>
            </div>

            {/* Fully Round Trophy Graphic */}
            <div className="flex-shrink-0 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[oklch(64.5%_0.246_16.439)]/40 bg-white flex items-center justify-center shadow-sm">
                <Image
                  src="/trophy.jfif"
                  alt="FYP Winner 2026 Trophy"
                  width={48}
                  height={48}
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
              <span className="text-[10px] font-bold text-[oklch(64.5%_0.246_16.439)] mt-1 uppercase tracking-wider">
                FYP Winner 2026
              </span>
            </div>
          </div>

          <p className="text-slate-700 leading-relaxed text-base">
            Engineered an advanced deep learning brain tumor segmentation pipeline utilizing a custom <strong>3D Attention Residual U-Net architecture built in TensorFlow/Keras</strong> trained on the BraTS dataset across multimodal MRI modalities (T1, T1ce, T2, FLAIR). The system precisely isolates sub-regions including active tumor core, edema, and necrosis to assist radiologists with fast, deterministic AI diagnostics.
          </p>

          <div className="flex flex-wrap gap-2 pt-2 text-xs font-medium text-slate-600">
            <span className="bg-white px-3 py-1 rounded-md border border-[oklch(64.5%_0.246_16.439)]/30">TensorFlow / Keras</span>
            <span className="bg-white px-3 py-1 rounded-md border border-[oklch(64.5%_0.246_16.439)]/30">3D Attention U-Net</span>
            <span className="bg-white px-3 py-1 rounded-md border border-[oklch(64.5%_0.246_16.439)]/30">BraTS Dataset</span>
            <span className="bg-white px-3 py-1 rounded-md border border-[oklch(64.5%_0.246_16.439)]/30">2D/3D View of MRI Scans</span>
            <span className="bg-white px-3 py-1 rounded-md border border-[oklch(64.5%_0.246_16.439)]/30">PDF Report Generation</span>
          </div>
        </section>

        {/* Interactive Quotes Carousel Section */}
        <section className="bg-rose-50/70 backdrop-blur-xs p-8 rounded-2xl border-2 border-[oklch(64.5%_0.246_16.439)]/30 shadow-sm space-y-6">
          <div className="flex justify-between items-center">
            <h3 className={`${scriptFont.className} text-4xl text-[oklch(64.5%_0.246_16.439)]`}>
              Words That Inspire Me 
            </h3>
            
            {/* Navigation Arrows */}
            <div className="flex gap-2">
              <button
                onClick={prevQuote}
                className="w-10 h-10 rounded-full border-2 border-[oklch(64.5%_0.246_16.439)]/40 bg-white text-[oklch(64.5%_0.246_16.439)] hover:bg-[oklch(64.5%_0.246_16.439)] hover:text-white transition-all flex items-center justify-center font-bold shadow-xs cursor-pointer"
                aria-label="Previous Quote"
              >
                ←
              </button>
              <button
                onClick={nextQuote}
                className="w-10 h-10 rounded-full border-2 border-[oklch(64.5%_0.246_16.439)]/40 bg-white text-[oklch(64.5%_0.246_16.439)] hover:bg-[oklch(64.5%_0.246_16.439)] hover:text-white transition-all flex items-center justify-center font-bold shadow-xs cursor-pointer"
                aria-label="Next Quote"
              >
                →
              </button>
            </div>
          </div>

          {/* Active Quote Card */}
          <div className="p-8 rounded-xl bg-white border-2 border-[oklch(64.5%_0.246_16.439)]/30 shadow-xs space-y-4 flex flex-col justify-between min-h-[140px] transition-all duration-300">
            <p className="text-slate-700 italic text-lg leading-relaxed">
              "{quotes[currentQuoteIndex].text}"
            </p>
            <div className="flex justify-between items-center pt-2 border-t border-slate-100">
              <span className="text-xs text-slate-400 font-medium">
                Quote {currentQuoteIndex + 1} of {quotes.length}
              </span>
              <p className="text-xs font-bold text-[oklch(64.5%_0.246_16.439)] uppercase tracking-wider">
                — {quotes[currentQuoteIndex].author}
              </p>
            </div>
          </div>
        </section>

      </div>

      {/* Lower Footer Bar */}
      <footer className="bg-[oklch(64.5%_0.246_16.439)] text-white py-6 px-6 md:px-12 mt-12 text-center text-sm font-medium relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <p>© 2026 Hafsa Khalil. Built with Next.js & Tailwind CSS.</p>
        </div>
      </footer>

    </main>
  );
}