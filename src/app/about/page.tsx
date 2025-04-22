import React from "react";
import Image from "next/image";
import NavBar from "@/components/navbar";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Over Ons", href: "/about", current: true },
  { name: "Bereikbaarheid", href: "/reachability", current: false },
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
        <section className="h-[calc(100svh-65px)] flex items-center justify-center">
          <div className="h-full w-full">
            <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl 3xl:text-9xl font-veryberry text-orange-400 mt-6 sm:mt-10 md:mt-12 lg:mt-8 3xl:mt-20 4xl:mt-32">
              Wie zijn wij??
            </h1>
            <div className="hidden lg:flex flex-col items-center">
              <div className="grid grid-cols-3 gap-x-12 xl:gap-x-16 2xl:gap-x-24 3xl:gap-x-32 4xl:gap-x-44 mt-12 xl:mt-20 2xl:mt-32 3xl:mt-44">
                <div className="col-span-1">
                  <Image
                    src="/assets/img/content/jasmijn.png"
                    alt="Jasmijn"
                    width={1024}
                    height={1024}
                    className="rounded-full size-44 xl:size-56 2xl:size-64 4xl:size-96 object-cover"
                  />
                  <p className="text-center font-alice font-semibold text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl text-custom_brown mt-4 4xl:mt-8">
                    Jasmijn
                  </p>
                </div>
                <div className="col-span-1">
                  <Image
                    src="/assets/img/content/floortje.png"
                    alt="Floortje"
                    width={1024}
                    height={1024}
                    className="rounded-full size-44 xl:size-56 2xl:size-64 4xl:size-96 object-cover"
                  />
                  <p className="text-center font-alice font-semibold text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl text-custom_brown mt-4 4xl:mt-8">
                    Floortje
                  </p>
                </div>
                <div className="col-span-1">
                  <Image
                    src="/assets/img/content/valerie.png"
                    alt="Valerie"
                    width={1024}
                    height={1024}
                    className="rounded-full size-44 xl:size-56 2xl:size-64 4xl:size-96 object-cover"
                  />
                  <p className="text-center font-alice font-semibold text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl text-custom_brown mt-4 4xl:mt-8">
                    Valerie
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-x-12 xl:gap-x-16 2xl:gap-x-24 3xl:gap-x-32 4xl:gap-x-44 mt-12 2xl:mt-20 3xl:mt-32 4xl:mt-44">
                <div className="col-span-1">
                  <Image
                    src="/assets/img/content/rien.png"
                    alt="Rien"
                    width={1024}
                    height={1024}
                    className="rounded-full size-44 xl:size-56 2xl:size-64 4xl:size-96 object-cover"
                  />
                  <p className="text-center font-alice font-semibold text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl text-custom_brown mt-4 4xl:mt-8">
                    Rien
                  </p>
                </div>
                <div className="col-span-1">
                  <Image
                    src="/assets/img/content/celeste.png"
                    alt="Céleste"
                    width={1024}
                    height={1024}
                    className="rounded-full size-44 xl:size-56 2xl:size-64 4xl:size-96 object-cover"
                  />
                  <p className="text-center font-alice font-semibold text-3xl 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl text-custom_brown mt-4 4xl:mt-8">
                    Céleste
                  </p>
                </div>
              </div>
            </div>
            <div className="flex lg:hidden justify-center pb-16">
              <div className="w-4/5">
                <div className="flex items-center mt-8 sm:mt-12">
                  <div className="mr-4 shrink-0">
                    <Image
                      src="/assets/img/content/jasmijn.png"
                      alt="Jasmijn"
                      width={1024}
                      height={1024}
                      className="rounded-full size-16 sm:size-32 md:size-44 object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-custom_brown font-semibold font-alice text-2xl sm:text-3xl md:text-4xl">
                      Jasmijn
                    </h4>
                  </div>
                </div>
                <div className="flex justify-end items-center mt-8 sm:mt-12">
                  <div>
                    <h4 className="text-custom_brown font-semibold font-alice text-2xl sm:text-3xl md:text-4xl">
                      Floortje
                    </h4>
                  </div>
                  <div className="ml-4 shrink-0">
                    <Image
                      src="/assets/img/content/floortje.png"
                      alt="Floortje"
                      width={1024}
                      height={1024}
                      className="rounded-full size-16 sm:size-32 md:size-44 object-cover"
                    />
                  </div>
                </div>
                <div className="flex items-center mt-8 sm:mt-12">
                  <div className="mr-4 shrink-0">
                    <Image
                      src="/assets/img/content/valerie.png"
                      alt="Valerie"
                      width={1024}
                      height={1024}
                      className="rounded-full size-16 sm:size-32 md:size-44 object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-custom_brown font-semibold font-alice text-2xl sm:text-3xl md:text-4xl">
                      Valerie
                    </h4>
                  </div>
                </div>
                <div className="flex justify-end items-center mt-8 sm:mt-12">
                  <div>
                    <h4 className="text-custom_brown font-semibold font-alice text-2xl sm:text-3xl md:text-4xl">
                      Rien
                    </h4>
                  </div>
                  <div className="ml-4 shrink-0">
                    <Image
                      src="/assets/img/content/rien.png"
                      alt="Rien"
                      width={1024}
                      height={1024}
                      className="rounded-full size-16 sm:size-32 md:size-44 object-cover"
                    />
                  </div>
                </div>
                <div className="flex items-center mt-8 sm:mt-12">
                  <div className="mr-4 shrink-0">
                    <Image
                      src="/assets/img/content/celeste.png"
                      alt="Céleste"
                      width={1024}
                      height={1024}
                      className="rounded-full size-16 sm:size-32 md:size-44 object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-custom_brown font-semibold font-alice text-2xl sm:text-3xl md:text-4xl">
                      Céleste
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="h-[calc(100svh-65px)] flex items-center justify-center">
          <div className="size-full flex flex-col lg:flex-row">
            <div className="h-1/2 lg:h-auto lg:w-1/2 flex justify-center items-center">
              <Image
                src={"/assets/img/content/stefan.png"}
                alt="Stefan"
                width={1080}
                height={1080}
                className="size-3/4 3xl:size-3/5 rounded-xl object-cover"
              />
            </div>
            <div className="h-1/2 lg:h-auto lg:w-1/2 flex justify-center items-center">
              <div className="size-full w-11/12 sm:w-3/4 lg:w-11/12 xl:w-3/4 lg:h-3/4 3xl:size-3/5 flex justify-center lg:items-center">
                <div>
                  <h1 className="text-center font-veryberry text-3xl sm:text-5xl 2xl:text-7xl 3xl:text-8xl text-cyan-700">
                    Stefan
                  </h1>
                  <p className="text-center font-alice text-sm sm:text-xl 3xl:text-2xl 4xl:text-3xl sm:mt-12 xl:text-2xl">
                    Ik ben dan wel een creatieve en energieke eekhoorn, maar verhaaltjes schrijven
                    is niet mijn sterkste kant. Daarom heb ik de hulp van Stefan ingeschakeld! Hij
                    gaat me helpen om mijn avonturen zo goed mogelijk op te schrijven, zodat jullie
                    er helemaal van kunnen genieten. Stefan voelt zich helemaal thuis met pen en
                    papier. Zo schrijft hij bijvoorbeeld ook voor nieuwssites!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
