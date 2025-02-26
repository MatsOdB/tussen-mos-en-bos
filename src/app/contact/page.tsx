import React from "react";
import Image from "next/image";
import NavBar from "@/components/navbar";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Over Ons", href: "/about", current: false },
  { name: "Bereikbaarheid", href: "/reachability", current: false },
  { name: "Contact", href: "/contact", current: true },
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
        <section className="h-[calc(100svh-65px)] flex items-center  flex-col gap-12">
          <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl 3xl:text-9xl font-veryberry text-orange-400 mt-6 sm:mt-10 md:mt-12 lg:mt-8 3xl:mt-20 4xl:mt-32">
            Contact
          </h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2498.2411256668747!2d4.365990077430227!3d51.233053971752206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3f6780b006c89%3A0x5ad13ee9932d3689!2sSint-Annabos!5e0!3m2!1sen!2sbe!4v1740590034440!5m2!1sen!2sbe"
            width="600"
            height="450"
            loading="lazy"
            className="border-1 border-stone-300 w-3/4"
          ></iframe>
          <div className="w-10/12 flex justify-between">
            <div>
              <h2>Bij vragen contacteer:</h2>
              <br />
              <h2>
                <a href="mailto:tussenmosenbos@telenet.be">tussenmosenbos@telenet.be</a>
              </h2>
            </div>
            <div>
              <h2>Check zeker onze socials:</h2>
              <br />

              <div className="flex flex-row justify-between">
                <a href="https://www.facebook.com/profile.php?id=61569413122325">
                  <Image
                    src="/assets/img/icons/facebook.webp"
                    width={1024}
                    height={1024}
                    alt="Facebook icon"
                    className="size-12"
                  ></Image>
                </a>

                <a href="https://www.instagram.com/tussen.mos.en.bos/">
                  <Image
                    src="/assets/img/icons/instagram.png"
                    width={1024}
                    height={1024}
                    alt="Facebook icon"
                    className="size-12"
                  ></Image>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
