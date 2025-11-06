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

        {/* About Section */}
        <section className="space-y-8 text-[17px] leading-relaxed">
          <h1
  className={clsx(
    "text-[22px] font-semibold mb-6",
    dark ? "text-[#F5F5F5]" : "text-[#1A1A1A]"
  )}
>
  about me
</h1>



          <p>
            I’m a Product Manager based in Bangalore. I like building products
            that make sense, look good, and actually work.
          </p>

          <p>
            My curiosity started early, flipping through{" "}
            Stuff magazine and obsessing over gadgets. That
            fascination with how things work (and why people use them) slowly
            turned into a career built around solving problems with design and
            product thinking.
          </p>

          <p>
            I’m interested in how businesses scale, how financial markets
            behave, and how technology quietly changes the world around us.
          </p>

          <p>
            Outside of work, I write, mostly about markets, work, and the
            strange ways people make decisions. I’m also a big Rafa Nadal fan and
            someone who knows far too much about trains for no useful reason.
          </p>
        </section>

        {/* Portrait */}
        <div className="my-24 text-center">
          <div className="relative mx-auto w-600px] h-[650px] overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/portrait.png"
              alt="Photo of Shreyans Joshi"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-sm text-neutral-400 mt-3">hi, it’s me.</p>
        </div>
      </div>
    </main>
  );
}
