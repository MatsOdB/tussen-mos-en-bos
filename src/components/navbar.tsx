import React from "react";
import Image from "next/image";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

type NavigationItem = {
  name: string;
  href: string;
  current: boolean;
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar(props: { navigation: NavigationItem[]; className?: string }) {
  return (
    <nav className={props.className}>
      <Disclosure as="nav" className="border-b border-gray-200 bg-orange-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex w-full justify-between">
              <div className="flex shrink-0 items-center">
                <Link href="/">
                  <Image
                    alt="Tussen Mos en Bos"
                    src="/assets/img/logo/logo.png"
                    className="block h-16 w-auto"
                    width={256}
                    height={256}
                  />
                </Link>
              </div>
              <div className="hidden sm:-my-px sm:flex sm:space-x-8">
                {props.navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "border-orange-500 text-orange-900 font-semibold"
                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                      "inline-flex items-center border-b-2 px-1 pt-1 text-lg font-medium",
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div></div>
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-orange-50 p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-100 focus:ring-offset-0">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
                <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
              </DisclosureButton>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 pb-3 pt-2">
            {props.navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "border-orange-50 bg-orange-100 text-orange-700"
                    : "border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800",
                  "block border-l-4 py-2 pl-3 pr-4 text-base font-medium",
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </nav>
  );
}
