import React from "react";
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
      <div className="h-[calc(100svh-65px)] overflow-y-scroll md:snap-y md:snap-mandatory">
        <section className="md:snap-start h-[calc(100svh-65px)] sm:min-h-[60rem] md:min-h-0 flex items-center justify-center"></section>
      </div>
    </>
  );
}
