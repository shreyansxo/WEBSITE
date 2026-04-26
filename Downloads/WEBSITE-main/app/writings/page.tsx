"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import clsx from "clsx";

const writings = [
  {
    date: "2025-09-07",
    title: "vanilla",
    slug: "vanilla",
  },
  {
    date: "2025-11-18",
    title: "buy less. buy better.",
    slug: "buy-better",
  },
];

export default function Writings() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light") setDark(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <main
      className={clsx(
        "min-h-screen transition-colors duration-300",
        dark ? "bg-[#0A0A0A] text-[#D4D4D4]" : "bg-[#FAFAF9] text-[#1A1A1A]"
      )}
    >
      <div className="max-w-2xl mx-auto px-8 py-12">
        {/* Header */}
        <header className="flex justify-between items-center mb-24 text-[15px] font-medium tracking-tight">
          <Link
            href="/"
            className={clsx(
              "text-[20px] font-semibold tracking-tight transition",
              dark ? "text-[#F0F0F0] hover:text-white" : "text-[#1A1A1A] hover:text-black"
            )}
          >
            shreyans joshi
          </Link>
          <nav className="flex items-center gap-8">
            <Link
              href="/"
              className={clsx(
                "transition-colors duration-200",
                dark ? "text-[#A0A0A0] hover:text-[#F0F0F0]" : "text-[#555] hover:text-[#1A1A1A]"
              )}
            >
              about
            </Link>
            <Link
              href="/writings"
              className={clsx(
                "transition-colors duration-200",
                dark ? "text-[#A0A0A0] hover:text-[#F0F0F0]" : "text-[#555] hover:text-[#1A1A1A]"
              )}
            >
              writings
            </Link>
            <button
              onClick={() => setDark(!dark)}
              aria-label="Toggle theme"
              className={clsx(
                "transition-colors duration-200",
                dark ? "text-[#A0A0A0] hover:text-[#F0F0F0]" : "text-[#555] hover:text-[#1A1A1A]"
              )}
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </nav>
        </header>

        {/* Writings list */}
        <section className="space-y-6">
          <h1
            className={clsx(
              "text-[20px] font-semibold mb-10",
              dark ? "text-[#F0F0F0]" : "text-[#1A1A1A]"
            )}
          >
            writings
          </h1>

          <ul className="space-y-5">
            {writings.map((post) => (
              <li key={post.slug} className="flex items-baseline gap-6">
                <span
                  className={clsx(
                    "text-sm tabular-nums shrink-0",
                    dark ? "text-[#606060]" : "text-[#999]"
                  )}
                >
                  {post.date}
                </span>
                <Link
                  href={`/writings/${post.slug}`}
                  className={clsx(
                    "text-[16px] hover:underline underline-offset-4 transition-colors duration-200",
                    dark ? "text-[#D4D4D4] hover:text-[#F0F0F0]" : "text-[#333] hover:text-[#1A1A1A]"
                  )}
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}