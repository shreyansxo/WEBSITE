"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import clsx from "clsx";

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
        "min-h-screen transition-colors duration-300 font-inter",
        dark ? "bg-[#0A0A0A] text-[#E0E0E0]" : "bg-[#F8F6EE] text-[#1A1A1A]"
      )}
    >
      <div className="max-w-3xl mx-auto px-8 py-12">
        {/* Header */}
        <header
          className={clsx(
            "flex justify-between items-center mb-28 text-[16px] font-medium tracking-tight leading-snug",
            dark ? "text-[#E0E0E0]" : "text-[#1A1A1A]"
          )}
        >
          <Link
            href="/"
            className="text-[22px] font-semibold tracking-tight hover:text-[#A6BFFA] transition"
          >
            shreyans joshi
          </Link>

          <nav
  className={clsx(
    "flex items-center gap-10",
    dark ? "text-[#E0E0E0]" : "text-[#1A1A1A]"
  )}
>

            <Link
              href="/"
              className="hover:text-[#A6BFFA] transition-colors duration-200"
            >
              about
            </Link>
            <Link
              href="/writings"
              className="hover:text-[#A6BFFA] transition-colors duration-200"
            >
              writings
            </Link>
            <button
              onClick={() => setDark(!dark)}
              aria-label="Toggle theme"
              className="hover:text-[#A6BFFA] transition-colors duration-200"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </nav>
        </header>

        {/* Writings Section */}
        <section className="space-y-8 text-[17px] leading-relaxed">
         <h1
  className={clsx(
    "text-[22px] font-semibold mb-6",
    dark ? "text-[#F5F5F5]" : "text-[#1A1A1A]"
  )}
>
  Writings
</h1>


          <p className="text-neutral-400">
            Essays, notes, and reflections — soon.
          </p>
        </section>
      </div>
    </main>
  );
}
