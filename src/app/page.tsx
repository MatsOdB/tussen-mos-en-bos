import React from "react";
import { CalendarDays, Footprints, MapPin, Baby } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import NavBar from "@/components/navbar";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Over Ons", href: "/about", current: false },
  { name: "Bereikbaarheid", href: "/reachability", current: false },
  { name: "Contact", href: "/contact", current: false },
  {
    name: "Tickets",
    href: "https://shop.paylogic.com/6eeb0cd29b59437d9ece3a9d843ec88f/tickets-tussen-mos-en-bos",
    current: false,
  },
];

const sponsors = [
  {
    name: "4 Events",
    href: "https://www.4-events.be",
    src: "/assets/img/sponsors/4events.jpeg",
  },
  {
    name: "Asekuro",
    href: "https://asekuro.be/",
    src: "/assets/img/sponsors/asekuro.jpeg",
  },
  {
    name: "Cools - De Cat",
    href: "https://www.kantoorcdc.be/nl-be",
    src: "/assets/img/sponsors/cdc.jpeg",
  },
  {
    name: "Energy 4 Business",
    href: "https://energy-4-business.webflow.io/",
    src: "/assets/img/sponsors/energy4business.jpeg",
  },
  {
    name: "GWN",
    href: "#",
    src: "/assets/img/sponsors/gwn.jpeg",
  },
  {
    name: "Lardenoit",
    href: "https://www.kantoorlardenoit.be/nl-be",
    src: "/assets/img/sponsors/lardenoit.jpeg",
  },
  {
    name: "Lovi",
    href: "https://www.lovi.be/",
    src: "/assets/img/sponsors/lovi.jpeg",
  },
  {
    name: "Patrick De Ruisseaux",
    href: "https://www.zakenkantoor-deruisseaux.be/nl-be",
    src: "/assets/img/sponsors/pdr.jpeg",
  },
  {
    name: "Pleegzorg",
    href: "https://www.pleegzorg.be/antwerpen",
    src: "/assets/img/sponsors/pleegzorg.jpeg",
  },
];

export default function Home() {
  return (
    <>
      <NavBar navigation={navigation} className="font-alice" />
      <div className="h-[calc(100svh-65px)] overflow-y-scroll">
        <section className="h-[calc(100svh-65px)] items-center justify-center">
          <div className="bg-[url('/assets/img/header/01.png')] bg-center bg-cover h-full w-full">
            <div className="bg-orange-50 bg-opacity-60 h-full w-full">
              <div className="h-full flex lg:items-end items-center justify-center">
                <div className="h-full lg:h-auto flex flex-col lg:flex-row lg:mb-32 justify-between sm:w-4/5">
                  <div className="mt-8 sm:mt-16 lg:mt-auto lg:w-1/2">
                    <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-6xl xl:text-7xl 2xl:text-8xl 4xl:text-9xl font-veryberry text-custom_brown">
                      Tussen mos en bos
                    </h1>
                    <p className="font-alice text-sm sm:text-base md:text-2xl lg:text-base xl:text-lg 2xl:text-2xl 4xl:text-3xl font-bold text-custom_light_brown">
                      Een verhalende wandeling voor jonge speurneuzen
                    </p>
                  </div>
                  <div className="h-40 sm:h-64 lg:h-auto mb-14 sm:mb-16 lg:mb-auto lg:w-1/2 2xl:w-5/12 4xl:w-1/3 flex justify-between">
                    <div className="w-14 sm:w-20 md:w-24 lg:w-16 xl:w-20 3xl:w-24 flex flex-col gap-2 items-center">
                      <div className="size-14 sm:size-20 md:size-24 lg:size-16 xl:size-20 3xl:size-24 bg-custom_brown rounded-full flex items-center justify-center">
                        <CalendarDays
                          size={64}
                          className="size-10 sm:size-14 md:size-16 lg:size-11 xl:size-14 3xl:size-16 text-orange-50"
                        />
                      </div>
                      <p className="text-center text-base sm:text-xl md:text-2xl lg:text-lg xl:text-xl 2xl:text-2xl sm:text-nowrap text-custom_brown font-alice font-bold">
                        2 - 3 <br />
                        mei
                      </p>
                    </div>
                    <div className="w-14 sm:w-20 md:w-24 lg:w-16 xl:w-20 3xl:w-24 flex flex-col gap-2 items-center">
                      <div className="size-14 sm:size-20 md:size-24 lg:size-16 xl:size-20 3xl:size-24 bg-custom_brown rounded-full flex items-center justify-center">
                        <MapPin
                          size={64}
                          className="size-10 sm:size-14 md:size-16 lg:size-11 xl:size-14 3xl:size-16 text-orange-50"
                        />
                      </div>
                      <p className="text-center text-base sm:text-xl md:text-2xl lg:text-lg xl:text-xl 2xl:text-2xl sm:text-nowrap text-custom_brown font-alice font-bold">
                        Sint-Annabos
                      </p>
                    </div>
                    <div className="w-14 sm:w-20 md:w-24 lg:w-16 xl:w-20 3xl:w-24 flex flex-col gap-2 items-center">
                      <div className="size-14 sm:size-20 md:size-24 lg:size-16 xl:size-20 3xl:size-24 bg-custom_brown rounded-full flex items-center justify-center">
                        <Footprints
                          size={64}
                          className="size-10 sm:size-14 md:size-16 lg:size-11 xl:size-14 3xl:size-16 text-orange-50"
                        />
                      </div>
                      <p className="text-center text-base sm:text-xl md:text-2xl lg:text-lg xl:text-xl 2xl:text-2xl text-nowrap text-custom_brown font-alice font-bold">
                        1,7 kilometer <br />
                        +/- 2,5 uur
                      </p>
                    </div>
                    <div className="w-14 sm:w-20 md:w-24 lg:w-16 xl:w-20 3xl:w-24 flex flex-col gap-2 items-center">
                      <div className="size-14 sm:size-20 md:size-24 lg:size-16 xl:size-20 3xl:size-24 bg-custom_brown rounded-full flex items-center justify-center">
                        <Baby
                          size={64}
                          className="size-10 sm:size-14 md:size-16 lg:size-11 xl:size-14 3xl:size-16 text-orange-50"
                        />
                      </div>
                      <p className="text-center text-base sm:text-xl md:text-2xl lg:text-lg xl:text-xl 2xl:text-2xl sm:text-nowrap text-custom_brown font-alice font-bold">
                        Leeftijd <br />
                        5-10 jaar
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="items-center justify-center">
          <div className="size-full flex flex-col lg:flex-row mt-12">
            <div className="h-1/2 lg:h-auto lg:w-1/2 flex justify-center items-center">
              <Image
                src={"/assets/img/content/sami.png"}
                alt="Sami de eekhoorn"
                width={1080}
                height={1080}
                className="size-3/4 3xl:size-3/5 rounded-xl object-cover"
              />
            </div>
            <div className="h-1/2 lg:h-auto lg:w-1/2 justify-center items-center">
              <div className="size-full w-11/12 sm:w-3/4 lg:w-11/12 xl:w-3/4 lg:h-3/4 3xl:size-3/5 flex justify-center lg:items-center">
                <div>
                  <h1 className="text-center font-veryberry text-3xl sm:text-5xl 2xl:text-7xl 3xl:text-8xl text-cyan-700 mt-12">
                    Hey Speurneus!
                  </h1>
                  <p className="text-center font-alice text-sm sm:text-xl 3xl:text-2xl 4xl:text-3xl sm:mt-12 xl:text-2xl">
                    HELP! Ik ben Sammi de eekhoorn en mijn eten is verdwenen. Wat ben ik toch
                    verstrooid. Ik zoek de hele dag achter elke struik en beukenboom 🌳, maar ik
                    vind helemaal niets… 😢 Waar heb ik mijn nootjes toch verstopt?
                    <br />
                    <br />
                    Kom jij mij helpen op 2 - 3 mei?{" "}
                    <Link
                      href="https://shop.paylogic.com/6eeb0cd29b59437d9ece3a9d843ec88f/tickets-tussen-mos-en-bos"
                      className="underline"
                    >
                      Link tickets
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="items-center justify-center mt-32 sm:mt-auto">
          <div className="size-full flex items-center justify-center">
            <div className="flex flex-col items-center 2xl:w-3/4 4xl:w-3/5">
              <h1 className="text-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl 3xl:text-9xl font-veryberry text-orange-400">
                Wat is &apos; Tussen Mos en Bos &apos; ?
              </h1>
              <p className="text-center font-alice text-base sm:text-2xl 3xl:text-2xl 4xl:text-3xl mt-6 sm:mt-12 xl:text-2xl w-10/12 pb-4 sm:pb-0">
                Een avontuurlijke en verhalende wandeling op 2 en 3 mei, speciaal voor jonge
                speurneuzen van 5 tot 10 jaar en hun dappere (groot)ouders. 🌳🐿️ Ik ben Sammi de
                Eekhoorn en samen met mijn vriendjes, gespeeld door acteurs, neem ik jullie mee op
                een spannende wandeling door het bos. ☘️ Onderweg ontdekken we niet alleen de
                geheimen van de natuur, maar beleven we ook allerlei leuke activiteiten. De
                wandeling zit boordevol spelletjes, fascinerende bosweetjes en bijzondere
                opdrachten, zoals het testen van je eekhoorn-snelheid met het stokvangspel. ✨ De
                wandeling is 1,7 km en zal dus ongeveer 2,5 uur duren.
              </p>
            </div>
          </div>
        </section>
        <section className="items-center justify-center mt-16 sm:mt-auto">
          <div className="size-full bg-custom_green">
            <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl 3xl:text-9xl font-veryberry text-custom_rose mt-8 xl:mt-16 2xl:mt-24">
              Ontmoet mijn vriendjes!
            </h1>
            <div className="w-full h-max flex items-center justify-center pb-6">
              <div className="w-4/5 xl:w-3/4 mt-16 xl:mt-24 2xl:mt-32 grid grid-cols-2 lg:grid-cols-3 lg:gap-y-16 gap-y-6 sm:gap-y-24">
                <div className="flex justify-center items-center">
                  <div className="rounded-full size-28 sm:size-36 md:size-44 lg:size-48 xl:size-56 2xl:size-64 4xl:size-96 bg-[url('/assets/img/content/12.png')] bg-center bg-cover group">
                    <div className="size-full rounded-full flex justify-center items-center bg-orange-50 bg-opacity-0 transition-bg-opacity duration-300 ease-in-out group-hover:bg-opacity-80 group-focus-within:bg-opacity-80 group-active:bg-opacity-80">
                      <p className="hidden group-hover:block text-center font-alice font-semibold text-3xl 2xl:text-4xl text-custom_brown">
                        Isolde
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="rounded-full size-28 sm:size-36 md:size-44 lg:size-48 xl:size-56 2xl:size-64 4xl:size-96 bg-[url('/assets/img/content/11.png')] bg-center bg-cover group">
                    <div className="size-full rounded-full flex justify-center items-center bg-orange-50 bg-opacity-0 transition-bg-opacity duration-300 ease-in-out group-hover:bg-opacity-80 group-focus-within:bg-opacity-80 group-active:bg-opacity-80">
                      <p className="hidden group-hover:block text-center font-alice font-semibold text-3xl 2xl:text-4xl text-custom_brown">
                        Aisha
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="rounded-full size-28 sm:size-36 md:size-44 lg:size-48 xl:size-56 2xl:size-64 4xl:size-96 bg-[url('/assets/img/content/15.png')] bg-center bg-cover group">
                    <div className="size-full rounded-full flex justify-center items-center bg-orange-50 bg-opacity-0 transition-bg-opacity duration-300 ease-in-out group-hover:bg-opacity-80 group-focus-within:bg-opacity-80 group-active:bg-opacity-80">
                      <p className="hidden group-hover:block text-center font-alice font-semibold text-3xl 2xl:text-4xl text-custom_brown">
                        Bas
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="rounded-full size-28 sm:size-36 md:size-44 lg:size-48 xl:size-56 2xl:size-64 4xl:size-96 bg-[url('/assets/img/content/16.png')] bg-center bg-cover group">
                    <div className="size-full rounded-full flex justify-center items-center bg-orange-50 bg-opacity-0 transition-bg-opacity duration-300 ease-in-out group-hover:bg-opacity-80 group-focus-within:bg-opacity-80 group-active:bg-opacity-80">
                      <p className="hidden group-hover:block text-center font-alice font-semibold text-xl md:text-3xl 2xl:text-4xl text-custom_brown">
                        Oma eekhoorn
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="rounded-full size-28 sm:size-36 md:size-44 lg:size-48 xl:size-56 2xl:size-64 4xl:size-96 bg-[url('/assets/img/content/14.png')] bg-center bg-cover group">
                    <div className="size-full rounded-full flex justify-center items-center bg-orange-50 bg-opacity-0 transition-bg-opacity duration-300 ease-in-out group-hover:bg-opacity-80 group-focus-within:bg-opacity-80 group-active:bg-opacity-80">
                      <p className="hidden group-hover:block text-center font-alice font-semibold text-3xl 2xl:text-4xl text-custom_brown">
                        Rik
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="rounded-full size-28 sm:size-36 md:size-44 lg:size-48 xl:size-56 2xl:size-64 4xl:size-96 bg-[url('/assets/img/content/13.png')] bg-center bg-cover group">
                    <div className="size-full rounded-full flex justify-center items-center bg-orange-50 bg-opacity-0 transition-bg-opacity duration-300 ease-in-out group-hover:bg-opacity-80 group-focus-within:bg-opacity-80 group-active:bg-opacity-80">
                      <p className="hidden group-hover:block text-center font-alice font-semibold text-3xl 2xl:text-4xl text-custom_brown">
                        Luka
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="items-center justify-center mt-16 sm:mt-auto">
          <div className="size-full flex flex-col lg:flex-row">
            <div className="h-1/2 lg:h-auto lg:w-1/2 flex justify-center items-center">
              <div className="size-full w-11/12 sm:w-3/4 lg:w-11/12 xl:w-3/4 lg:h-3/4 3xl:size-3/5 flex justify-center items-center">
                <div>
                  <h1 className="text-center font-veryberry text-3xl sm:text-5xl 2xl:text-7xl 3xl:text-8xl text-cyan-700">
                    Mijn magische thuis
                  </h1>
                  <p className="text-center font-alice text-sm sm:text-xl 3xl:text-2xl 4xl:text-3xl mt-4 sm:mt-12 xl:text-2xl">
                    Het Sint-Annabos is een magische plek, vol oude bomen die fluisteren en takken
                    die zachtjes bewegen in de wind. Mijn huis is een holle boom, lekker knus en
                    gezellig. Het is een plek vol magie en geheimen, en ik voel me er helemaal
                    thuis. Kom jij mijn thuis bezoeken op 2 - 3 mei? Wie weet ontdek jij wel een
                    geheime plek die zelfs ik nog niet ken!
                  </p>
                </div>
              </div>
            </div>
            <div className="h-1/2 lg:h-auto lg:w-1/2 flex justify-center items-center mt-12">
              <Image
                src={"/assets/img/content/magische thuis.png"}
                alt="Sami's thuis"
                width={1080}
                height={1080}
                className="size-3/4 3xl:size-3/5 rounded-xl object-cover"
              />
            </div>
          </div>
        </section>
        <section className="items-center justify-center mt-16 sm:mt-auto">
          <div className="size-full flex flex-col lg:flex-row bg-custom_green">
            <div className="h-1/2 lg:h-auto lg:w-1/2 flex justify-center items-center mt-12">
              <Image
                src={"/assets/img/content/pannenkoek.jpg"}
                alt="Pannenkoeken"
                width={1080}
                height={1080}
                className="size-3/4 3xl:size-3/5 rounded-xl object-cover"
              />
            </div>
            <div className="h-1/2 lg:h-auto lg:w-1/2 flex justify-center items-center mb-12">
              <div className="size-full w-11/12 sm:w-3/4 lg:w-11/12 xl:w-3/4 lg:h-3/4 3xl:size-3/5 flex justify-center lg:items-center">
                <div>
                  <h1 className="text-center font-veryberry text-3xl sm:text-5xl 2xl:text-7xl 3xl:text-8xl text-custom_rose">
                    Heb jij er ook honger van gekregen?
                  </h1>
                  <p className="text-center font-alice text-sm sm:text-xl 3xl:text-2xl 4xl:text-3xl mt-8 sm:mt-12 xl:text-2xl">
                    Na al dat wandelen en avontuur krijg je natuurlijk wel honger! En wat is er nu
                    lekkerder dan een warme, lekkere pannenkoek? Aan het einde kan je even uitrusten
                    en lekker smikkelen van heerlijke pannenkoeken!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="items-center justify-center mt-16">
          <div className="size-full flex items-center justify-center">
            <div className="flex flex-col items-center 2xl:w-3/4 4xl:w-3/5">
              <h1 className="text-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl 3xl:text-9xl font-veryberry text-custom_indigo">
                Trotse sponsors
              </h1>
              <div className="flex flex-wrap justify-center items-center gap-6 my-12">
                {sponsors.map((sponsor) => (
                  <a
                    key={sponsor.name}
                    href={sponsor.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative h-32 w-32 opacity-90 hover:opacity-100 transition-opacity"
                  >
                    <Image src={sponsor.src} alt={sponsor.name} layout="fill" objectFit="contain" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
