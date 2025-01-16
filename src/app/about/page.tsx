import React from "react";
import { CalendarDays, Footprints, MapPin, Baby } from "lucide-react";
import Image from "next/image";
import NavBar from "@/components/navbar";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Over Ons", href: "/about", current: true },
  { name: "Bereikbaarheid", href: "/reachability", current: false },
  { name: "Contact", href: "/contact", current: false },
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
