"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import clsx from "clsx";

export default function Vanilla() {
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

        {/* Essay */}
        <article className="space-y-6 text-[16px] leading-relaxed">
          <div className="mb-10">
            <h1
              className={clsx(
                "text-[20px] font-semibold mb-2",
                dark ? "text-[#F0F0F0]" : "text-[#1A1A1A]"
              )}
            >
              vanilla
            </h1>
            <p className={dark ? "text-[#606060] text-sm" : "text-[#999] text-sm"}>
              2026-09-07
            </p>
          </div>

          <p className={dark ? "text-[#C0C0C0]" : "text-[#333]"}>
            The word "vanilla" is shorthand for boring. Safe. Uninspired.
          </p>

          <p className={dark ? "text-[#C0C0C0]" : "text-[#333]"}>
            Vanilla beans come from a rare Mexican orchid. Each flower blooms
            for just one morning a year. If it isn't pollinated that morning, no
            bean. It's the second most expensive spice in the world, after
            saffron.
          </p>

          <p className={dark ? "text-[#C0C0C0]" : "text-[#333]"}>
            We throw the word around as an insult — vanilla routine, vanilla
            taste, vanilla life. But look closer, and the "boring" stuff is
            usually the hardest to get right. The most refined. The most
            dependable.
          </p>

          <p className={dark ? "text-[#C0C0C0]" : "text-[#333]"}>
            Nothing boring about that. People hear that and think it sounds
            dull. It's not. It's just quiet.
          </p>

          <p className={dark ? "text-[#C0C0C0]" : "text-[#333]"}>
            Vanilla isn't the absence of something interesting. It's what's
            left when you stop performing novelty and start actually doing
            things.
          </p>

          <p className={dark ? "text-[#C0C0C0]" : "text-[#333]"}>
            As once asked — Vanilla's universal appeal is why it's the default.
            Is your default as good as vanilla?
          </p>

          <div className="pt-8">
            <Link
              href="/writings"
              className={clsx(
                "text-sm hover:underline underline-offset-4",
                dark ? "text-[#606060] hover:text-[#A0A0A0]" : "text-[#999] hover:text-[#555]"
              )}
            >
              ← all writings
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}