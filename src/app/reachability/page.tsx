import React from "react";
import Link from "next/link";
import NavBar from "@/components/navbar";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Over Ons", href: "/about", current: false },
  { name: "Bereikbaarheid", href: "/reachability", current: true },
  { name: "Contact", href: "/contact", current: false },
  {
    name: "Tickets",
    href: "https://shop.paylogic.com/6eeb0cd29b59437d9ece3a9d843ec88f/tickets-tussen-mos-en-bos",
    current: false,
  },
];

export default function Home() {
  return (
    <>
      <NavBar navigation={navigation} className="font-alice" />
      <div className="h-[calc(100svh-65px)] overflow-y-scroll">
        <section className="h-[calc(100svh-65px)] flex flex-col items-center">
          <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl 3xl:text-9xl font-veryberry text-orange-400 mt-6 sm:mt-10 md:mt-12 lg:mt-8 3xl:mt-20 4xl:mt-32">
            Bereikbaarheid
          </h1>
          <div className="w-11/12 grid grid-cols-3 mt-6 sm:mt-10 md:mt-12 lg:mt-8 3xl:mt-20 4xl:mt-32 gap-x-2 md:gap-x-12 pb-12 sm:pb-0">
            <div>
              <h1 className="text-center font-alice font-semibold text-lg lg:text-xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl">
                Openbaar vervoer
              </h1>
              <p className="text-center mt-12 lg:text-lg xl:text-xl 3xl:text-2xl">
                Bus 36 halte Hof Ter Schelde
              </p>
            </div>
            <div>
              <h1 className="text-center font-alice font-semibold text-lg lg:text-xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl">
                Auto
              </h1>
              <p className="text-center mt-12 lg:text-lg xl:text-xl 3xl:text-2xl">
                In de buurt van het Sint-Annabos kan je langs verschillende straten gratis parkeren.
                <br />
                Neem zeker een kijk op{" "}
                <Link
                  href="https://map.seety.co/August%20Vermeylenlaan%202,%202050%20Antwerpen/15?lang=nl"
                  className="underline"
                >
                  Seety.
                </Link>
              </p>
              <h2 className="text-center mt-8 font-alice font-semibold">Let op!</h2>
              <p className="text-center mt-2 lg:text-lg xl:text-xl 3xl:text-2xl">
                Linkeroever is een lage-emissiezone. Controleer tijdig of jouw voertuig toegelaten
                is.
              </p>
            </div>
            <div>
              <h1 className="text-center font-alice font-semibold text-lg lg:text-xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl">
                Fiets
              </h1>
              <p className="text-center mt-12 lg:text-lg xl:text-xl 3xl:text-2xl">Velo Antwerpen</p>
              <ul className="list-disc lg:text-lg xl:text-xl 3xl:text-2xl">
                <li>144- August Vermeylenlaan</li>
                <li>142- Esmoreitlaan</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
