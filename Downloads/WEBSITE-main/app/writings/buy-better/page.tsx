"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import clsx from "clsx";

export default function BuyBetter() {
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
              buy less. buy better.
            </h1>
            <p className={clsx("text-sm", dark ? "text-[#606060]" : "text-[#999]")}>
              2025-09-07
            </p>
          </div>

          <p className={dark ? "text-[#C0C0C0]" : "text-[#333]"}>
            Every purchase is a bet. Not the gambling kind, but you're betting
            that you'll use it enough to justify the price. Most of the time,
            you lose that bet quietly. The thing sits in a drawer, or wears out
            faster than expected, and you buy it again.
          </p>

          <p className={dark ? "text-[#C0C0C0]" : "text-[#333]"}>
            The fix isn't spending more. It's thinking in cost per use.
          </p>

          <p className={dark ? "text-[#C0C0C0]" : "text-[#333]"}>
            Divide the price by how many times you'll actually use it. Not how many times you plan to, but how many times you actually use it. That number humbles most
            impulse buys fast.
          </p>

          {/* Table */}
          <div className="my-8 overflow-x-auto">
            <table className="w-full text-[15px] border-collapse">
              <thead>
                <tr className={clsx("border-b", dark ? "border-[#2A2A2A]" : "border-[#E0E0E0]")}>
                  {["Quality", "Price", "Wears", "Cost per wear"].map((h) => (
                    <th
                      key={h}
                      className={clsx(
                        "text-left py-3 pr-6 font-medium text-sm",
                        dark ? "text-[#606060]" : "text-[#999]"
                      )}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Cheap", "₹399", "30", "₹13.30"],
                  ["Mid", "₹1,499", "120", "₹12.49"],
                  ["Best", "₹2,499", "300", "₹8.33"],
                ].map(([quality, price, wears, cpw]) => (
                  <tr
                    key={quality}
                    className={clsx("border-b", dark ? "border-[#1A1A1A]" : "border-[#F0F0F0]")}
                  >
                    <td className={clsx("py-3 pr-6", dark ? "text-[#C0C0C0]" : "text-[#333]")}>{quality}</td>
                    <td className={clsx("py-3 pr-6", dark ? "text-[#C0C0C0]" : "text-[#333]")}>{price}</td>
                    <td className={clsx("py-3 pr-6", dark ? "text-[#C0C0C0]" : "text-[#333]")}>{wears}</td>
                    <td className={clsx("py-3 pr-6 font-medium", dark ? "text-[#F0F0F0]" : "text-[#1A1A1A]")}>{cpw}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={dark ? "text-[#C0C0C0]" : "text-[#333]"}>
            Let's say a cheap t-shirt costs ₹399. Sounds like a deal. But wash
            it thirty times, and it's faded, shapeless, gone. A good cotton tee
            costs ₹2,499, six times more. Wear it three hundred times over
            three years, and you're paying ₹8 per wear. The cheap shirt costs
            ₹13. The math flips fast.
          </p>

          <p className={dark ? "text-[#C0C0C0]" : "text-[#333]"}>
            I've started applying it to everything - clothes, electronics, even
            subscriptions. The question isn't "is this expensive?" It's "is
            this expensive per use?" A cheap thing you replace every year costs
            more than an expensive thing you keep for a decade. The math is
            simple. The habit is hard.
          </p>

          <p className={dark ? "text-[#C0C0C0]" : "text-[#333]"}>
            The best purchases eventually cost almost nothing per use. They just
            become part of your life. Reliable, invisible, there when you need
            them.
          </p>

          <p className={clsx("text-sm italic", dark ? "text-[#606060]" : "text-[#999]")}>
            (Buy Uniqlo. I'm not saying I'm suggesting it… but I'm also not not
            suggesting it.)
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