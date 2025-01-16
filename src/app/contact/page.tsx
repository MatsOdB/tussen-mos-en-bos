import React from "react";
import { CalendarDays, Footprints, MapPin, Baby } from "lucide-react";
import Image from "next/image";
import NavBar from "@/components/navbar";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Over Ons", href: "/about", current: false },
  { name: "Bereikbaarheid", href: "/reachability", current: false },
  { name: "Contact", href: "/contact", current: true },
];

export default function Home() {
  return (
    <>
      <NavBar navigation={navigation} className="font-alice" />
      <div className="h-[calc(100svh-65px)] overflow-y-scroll md:snap-y md:snap-mandatory">
        <section className="md:snap-start h-[calc(100svh-65px)] sm:min-h-[60rem] md:min-h-0 flex items-center justify-center">
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
                        2 tot 4 <br />
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
                        Naam locatie <br /> @plaats
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
                        X kilometer <br />
                        +/- X uur
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
                        X-X jaar
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="md:snap-start h-[calc(100svh-65px)] sm:min-h-[60rem] md:min-h-0 flex items-center justify-center">
          <div className="size-full flex flex-col lg:flex-row">
            <div className="h-1/2 lg:h-auto lg:w-1/2 flex justify-center items-center">
              <Image
                src={"/assets/img/content/sami.png"}
                alt="Sami de eekhoorn"
                width={1080}
                height={1080}
                className="size-3/4 3xl:size-3/5 rounded-md object-cover"
              />
            </div>
            <div className="h-1/2 lg:h-auto lg:w-1/2 flex justify-center items-center">
              <div className="size-full w-11/12 sm:w-3/4 lg:w-11/12 xl:w-3/4 lg:h-3/4 3xl:size-3/5 flex justify-center lg:items-center">
                <div>
                  <h1 className="text-center font-veryberry text-3xl sm:text-5xl 2xl:text-7xl 3xl:text-8xl text-cyan-700">
                    Hallo daar!
                  </h1>
                  <p className="text-center font-alice text-sm sm:text-xl 3xl:text-2xl 4xl:text-3xl sm:mt-12 xl:text-2xl">
                    Ik hier, Sami de eekhoorn! Ik heb een probleem… Mijn nootjes! Ze zijn overal
                    verstopt, maar ik kan ze niet meer vinden! Ik heb er zoveel verstopt in het X
                    bos, maar door al mijn avonturen en gekke sprongetjes ben ik vergeten waar.
                    <br />
                    Daarom doe ik een oproep: Help je me zoeken?
                    <br />
                    Wie weet ben jij de speurneus die mijn nootjes terugvindt!
                    <br />
                    <br />
                    Kom jij mij helpen op 2, 3 of 4 mei?
                    <br />
                    <a href="" className="underline">
                      Link tickets
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="md:snap-start h-[calc(100svh-65px)] sm:min-h-[60rem] md:min-h-0 flex items-center justify-center mt-32 sm:mt-auto">
          <div className="size-full flex items-center justify-center">
            <div className="flex flex-col items-center 2xl:w-3/4 4xl:w-3/5">
              <h1 className="text-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl 3xl:text-9xl font-veryberry text-orange-400">
                Wat is &apos; tussen mos en bos &apos; ?
              </h1>
              <p className="text-center font-alice text-base sm:text-2xl 3xl:text-2xl 4xl:text-3xl mt-6 sm:mt-12 xl:text-2xl w-10/12 pb-4 sm:pb-0">
                Ga mee op avontuur met Sami de eekhoorn en help hem zijn verloren schatten terug te
                vinden! Sami rekent op jouw speurneus om de geheimen van het bos te ontrafelen.
                <br />
                <br className="hidden sm:block" />
                Volg kronkelende paden en ontdek de magie van de natuur, waar achter elke oude eik
                en onder elk varendak een nieuwe bosvriend van Sami op je wacht. Zij helpen je
                onderweg met verrassende weetjes en bijzondere opdrachten.
                <br />
                <br className="hidden sm:block" />
                Aan het einde van de wandeltocht kun je jouw creativiteit de vrije loop laten en
                samen met Sami iets moois knutselen. Natuurlijk is er ook tijd om even uit te rusten
                en te genieten van iets lekkers te knabbelen en drinken.
                <br />
                <br className="hidden sm:block" />
                Word deel van dit sprookjesachtige avontuur in de bossen van (Locatie), tijdens het
                weekend van 2 tot 4 mei. Laat je innerlijke speurneus stralen en beleef een
                onvergetelijke ervaring!
              </p>
            </div>
          </div>
        </section>
        <section className="md:snap-start h-[calc(100svh-65px)] sm:min-h-[60rem] md:min-h-0 flex items-center justify-center mt-16 sm:mt-auto">
          <div className="size-full bg-custom_green">
            <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl 3xl:text-9xl font-veryberry text-custom_rose mt-8 xl:mt-16 2xl:mt-24">
              Ontmoet mijn vriendjes!
            </h1>
            <div className="w-full h-max flex items-center justify-center">
              <div className="w-4/5 xl:w-3/4 mt-16 xl:mt-24 2xl:mt-32 grid grid-cols-2 lg:grid-cols-3 lg:gap-y-16 gap-y-6 sm:gap-y-24">
                <div className="flex justify-center items-center">
                  <div className="rounded-full size-28 sm:size-36 md:size-44 lg:size-48 xl:size-56 2xl:size-64 4xl:size-96 bg-[url('/assets/img/content/12.png')] bg-center bg-cover group">
                    <div className="size-full rounded-full flex justify-center items-center bg-orange-50 bg-opacity-0 transition-bg-opacity duration-300 ease-in-out group-hover:bg-opacity-80 group-focus-within:bg-opacity-80 group-active:bg-opacity-80">
                      <p className="hidden group-hover:block text-center font-alice font-semibold text-3xl text-custom_brown">
                        Isolde
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="rounded-full size-28 sm:size-36 md:size-44 lg:size-48 xl:size-56 2xl:size-64 4xl:size-96 bg-[url('/assets/img/content/11.png')] bg-center bg-cover group">
                    <div className="size-full rounded-full flex justify-center items-center bg-orange-50 bg-opacity-0 transition-bg-opacity duration-300 ease-in-out group-hover:bg-opacity-80 group-focus-within:bg-opacity-80 group-active:bg-opacity-80">
                      <p className="hidden group-hover:block text-center font-alice font-semibold text-3xl">
                        Dorien
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="rounded-full size-28 sm:size-36 md:size-44 lg:size-48 xl:size-56 2xl:size-64 4xl:size-96 bg-[url('/assets/img/content/15.png')] bg-center bg-cover group">
                    <div className="size-full rounded-full flex justify-center items-center bg-orange-50 bg-opacity-0 transition-bg-opacity duration-300 ease-in-out group-hover:bg-opacity-80 group-focus-within:bg-opacity-80 group-active:bg-opacity-80">
                      <p className="hidden group-hover:block text-center font-alice font-semibold text-3xl">
                        Bas
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="rounded-full size-28 sm:size-36 md:size-44 lg:size-48 xl:size-56 2xl:size-64 4xl:size-96 bg-[url('/assets/img/content/16.png')] bg-center bg-cover group">
                    <div className="size-full rounded-full flex justify-center items-center bg-orange-50 bg-opacity-0 transition-bg-opacity duration-300 ease-in-out group-hover:bg-opacity-80 group-focus-within:bg-opacity-80 group-active:bg-opacity-80">
                      <p className="hidden group-hover:block text-center font-alice font-semibold text-xl">
                        Oma eekhoorn
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="rounded-full size-28 sm:size-36 md:size-44 lg:size-48 xl:size-56 2xl:size-64 4xl:size-96 bg-[url('/assets/img/content/14.png')] bg-center bg-cover group">
                    <div className="size-full rounded-full flex justify-center items-center bg-orange-50 bg-opacity-0 transition-bg-opacity duration-300 ease-in-out group-hover:bg-opacity-80 group-focus-within:bg-opacity-80 group-active:bg-opacity-80">
                      <p className="hidden group-hover:block text-center font-alice font-semibold text-3xl">
                        Isolde
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="rounded-full size-28 sm:size-36 md:size-44 lg:size-48 xl:size-56 2xl:size-64 4xl:size-96 bg-[url('/assets/img/content/13.png')] bg-center bg-cover group">
                    <div className="size-full rounded-full flex justify-center items-center bg-orange-50 bg-opacity-0 transition-bg-opacity duration-300 ease-in-out group-hover:bg-opacity-80 group-focus-within:bg-opacity-80 group-active:bg-opacity-80">
                      <p className="hidden group-hover:block text-center font-alice font-semibold text-3xl">
                        Isolde
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="md:snap-start h-[calc(100svh-65px)] sm:min-h-[60rem] md:min-h-0 flex items-center justify-center mt-16 sm:mt-auto">
          <div className="size-full flex flex-col lg:flex-row">
            <div className="h-1/2 lg:h-auto lg:w-1/2 flex justify-center items-center">
              <div className="size-full w-11/12 sm:w-3/4 lg:w-11/12 xl:w-3/4 lg:h-3/4 3xl:size-3/5 flex justify-center items-center">
                <div>
                  <h1 className="text-center font-veryberry text-3xl sm:text-5xl 2xl:text-7xl 3xl:text-8xl text-cyan-700">
                    Mijn magische thuis
                  </h1>
                  <p className="text-center font-alice text-sm sm:text-xl 3xl:text-2xl 4xl:text-3xl mt-4 sm:mt-12 xl:text-2xl">
                    Het is een magische plek, vol oude bomen die fluisteren en takken die zachtjes
                    bewegen in de wind. Mijn huis is een holle boom, lekker knus en gezellig. Overal
                    om me heen liggen noten, glinsterende bloemen en kabbelende beekjes. Het bos
                    zorgt altijd voor de beste avonturen! In de zomer is het heerlijk koel, en in de
                    herfst veranderen de bomen in een zee van gouden bladeren. Zelfs als het regent,
                    is het bos warm en knus, met een dak van bladeren die het water tegenhouden. Het
                    is een plek vol magie en geheimen, en ik voel me er helemaal thuis. Kom je een
                    keer spelen? Wie weet ontdek jij wel een geheime plek die zelfs ik nog niet ken!
                  </p>
                </div>
              </div>
            </div>
            <div className="h-1/2 lg:h-auto lg:w-1/2 flex justify-center items-center">
              <Image
                src={"/assets/img/content/forest.jpg"}
                alt="Sami de eekhoorn"
                width={1080}
                height={1080}
                className="size-3/4 3xl:size-3/5 rounded-md object-cover"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
