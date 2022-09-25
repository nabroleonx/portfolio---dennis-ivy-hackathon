import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import DarkModeToogle from "./DarkModeToogler";
import MobileNav from "./MobileNav";
import Link from "next/link";
import { Router, useRouter } from "next/router";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const navigation = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Blog",
    href: "/blog",
  },
];

export default function Nav() {
  const [selected, setSelected] = useState("");
  const [openSideNav, setOpenSideNav] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setSelected(router.pathname.replace("/", ""));
  }, []);

  return (
    <div
      as="nav"
      className="sticky top-0 z-10 bg-gray-50 dark:bg-gray-800 shadow"
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex h-12 ">
          <div className=" w-full flex justify-between">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/">
                <img
                  className="h-8 w-8 rounded-full object-contain cursor-pointer"
                  src="https://user-images.githubusercontent.com/84567489/191514951-57b0486c-d073-43ee-a076-6f824821a2e0.jpg"
                  alt="my-avatar"
                />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navigation.map((nav) => {
                return (
                  <Link key={nav.name} href={nav.href} passHref>
                    <a
                      onClick={() => setSelected(nav.name.toLowerCase())}
                      className={classNames(
                        selected === nav.name.toLowerCase()
                          ? "text-sky-600 text-lg border-b border-sky-300"
                          : "text-gray-500",
                        "inline-flex items-center px-1 pt-1 text-sm font-mono  hover:text-sky-400"
                      )}
                    >
                      {" "}
                      {nav.name}
                    </a>
                  </Link>
                );
              })}
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <DarkModeToogle />
            </div>
          </div>

          <div className="-mr-2 flex items-center gap-4 sm:hidden">
            <DarkModeToogle />
            <button
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-500"
              onClick={() => setOpenSideNav(!openSideNav)}
            >
              <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      {openSideNav && (
        <MobileNav
          openSideNav={openSideNav}
          setOpenSideNav={setOpenSideNav}
          navigation={navigation}
          selected={selected}
          setSelected={setSelected}
        />
      )}
    </div>
  );
}
