"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import clsx from "clsx";
import Image from "next/image";

export default function About() {
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

        {/* About Section */}
        <section className="space-y-6 text-[16px] leading-relaxed">
          <h1
            className={clsx(
              "text-[20px] font-semibold mb-4",
              dark ? "text-[#F0F0F0]" : "text-[#1A1A1A]"
            )}
          >
            about me
          </h1>

          <p className={dark ? "text-[#C0C0C0]" : "text-[#333]"}>
            I'm a product manager based in bangalore. I like building products
            that make sense, look good, and actually work.
          </p>

          <p className={dark ? "text-[#C0C0C0]" : "text-[#333]"}>
            My curiosity started early, flipping through Stuff magazine and
            obsessing over gadgets. That fascination with how things work (and
            why people use them) slowly turned into a career built around
            solving problems with design and product thinking.
          </p>

          <p className={dark ? "text-[#C0C0C0]" : "text-[#333]"}>
            I'm interested in how businesses scale, how financial markets
            behave, and how technology quietly changes the world around us.
          </p>

          <p className={dark ? "text-[#C0C0C0]" : "text-[#333]"}>
            Outside of work, I write, mostly about markets, work, and the
            strange ways people make decisions. I'm also a big Rafa Nadal fan
            and someone who knows far too much about trains for no useful reason. 
          </p>
        </section>

        {/* Portrait */}
        <div className="my-20 text-center">
          <div className="relative mx-auto w-full max-w-[560px] overflow-hidden rounded-lg shadow-md">
            <Image
              src="/Portrait.png"
              alt="Photo of Shreyans Joshi"
              width={560}
              height={0}
              sizes="560px"
              style={{ width: "100%", height: "auto" }}
              className="rounded-lg"
            />
          </div>
          <p className={clsx("text-sm mt-3", dark ? "text-[#606060]" : "text-[#999]")}>
            hi, it's me.
          </p>
        </div>
      </div>
    </main>
  );
}