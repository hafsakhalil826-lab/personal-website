"use client";

import React from "react";
import Link from "next/link";
import { Dancing_Script } from "next/font/google";

const scriptFont = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
});

const RESEARCH_PAPERS = [
  {
    title: "Attention Is All You Need (Transformer Architecture)",
    authors: "Vaswani et al. (Google Brain / Google Research)",
    category: "Deep Learning & NLP",
    description: "Introduced the Transformer architecture relying entirely on self-attention mechanisms, replacing recurrent networks for sequence modeling.",
    pdfUrl: "/papers/NIPS-2017-attention-is-all-you-need-Paper.pdf",
  },
  {
    title: "MapReduce: Simplified Data Processing on Large Clusters",
    authors: "Jeffrey Dean and Sanjay Ghemawat (Google, Inc.)",
    category: "Distributed Systems & Data Engineering",
    description: "Introduced the MapReduce programming model and implementation for processing and generating large data sets on large clusters of commodity machines.",
    pdfUrl: "/papers/mapreduce.pdf",
  },
  {
    title: "Optimal Bounds for Open Addressing Without Reordering",
    authors: "Martín Farach-Colton, Andrew Krapivin, and William Kuszmaul",
    category: "Data Structures & Algorithms (Hash Tables)",
    description: "Revisits open-addressed hash tables, proving that it is possible to construct a hash table achieving far better expected search complexities than previously thought without element reordering.",
    pdfUrl: "/papers/hashtable.pdf",
  },
  {
    title: "Bitcoin: A Peer-to-Peer Electronic Cash System",
    authors: "Satoshi Nakamoto",
    category: "Cryptography & Distributed Systems",
    description: "Introduced a purely peer-to-peer version of electronic cash allowing online payments without going through a financial institution, introducing Proof-of-Work and blockchain consensus.",
    pdfUrl: "/papers/bitcoin.pdf",
  },
  {
    title: "Fast Inference from Transformers via Speculative Decoding",
    authors: "Yaniv Leviathan, Matan Kalman, and Yossi Matias (Google)",
    category: "LLM Optimization & Inference",
    description: "Introduced speculative decoding, an algorithm to sample from autoregressive models faster without changing model architecture or outputs by computing several tokens in parallel.",
    pdfUrl: "/papers/fastinference.pdf",
  },
  {
    title: "LoRA: Low-Rank Adaptation of Large Language Models",
    authors: "Edward Hu, Yelong Shen, Phillip Wallis, et al. (Microsoft Research)",
    category: "LLM Fine-Tuning & Efficiency",
    description: "Proposes freezing pre-trained model weights and injecting trainable rank decomposition matrices, drastically reducing trainable parameters and GPU memory during fine-tuning.",
    pdfUrl: "/papers/lora.pdf",
  },
];

export default function ResearchPage() {
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
            Essential Research Papers 
          </h1>
          <p className="text-slate-600 font-medium">
            A curated list of modern and informative research papers for students pursuing a degree or have graduated.
          </p>
        </header>

        {/* Papers List with Inline PDF Viewers */}
        <div className="space-y-8">
          {RESEARCH_PAPERS.map((paper, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border-2 border-[oklch(64.5%_0.246_16.439)]/30 bg-rose-50/40 hover:border-[oklch(64.5%_0.246_16.439)] transition-all shadow-sm space-y-4"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[oklch(64.5%_0.246_16.439)] text-white shadow-xs">
                  {paper.category}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {paper.authors}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-800">
                {paper.title}
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed">
                {paper.description}
              </p>

              {/* Action Button */}
              <div className="flex gap-4 pt-1">
                <a
                  href={paper.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-[oklch(64.5%_0.246_16.439)] text-white hover:opacity-90 transition-all font-semibold text-xs shadow-xs"
                >
                  Open PDF in New Tab ↗
                </a>
              </div>

              {/* Embedded PDF Viewer Below */}
              <div className="mt-4 pt-4 border-t border-[oklch(64.5%_0.246_16.439)]/20">
                <p className="text-xs font-bold text-[oklch(64.5%_0.246_16.439)] mb-2">
                  📖 Document Preview:
                </p>
                <div className="w-full h-[550px] rounded-xl overflow-hidden border border-slate-300 bg-white shadow-inner">
                  <iframe
                    src={`${paper.pdfUrl}#view=FitH`}
                    title={paper.title}
                    className="w-full h-full"
                  />
                </div>
              </div>

            </div>
          ))}
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