import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function MobileNav({
  openSideNav,
  setOpenSideNav,
  navigation,
  selected,
  setSelected,
}) {
  return (
    <Transition.Root show={openSideNav} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpenSideNav}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 z-10 mr-4 flex pt-4 pr-2 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md dark:text-gray-50 text-gray-300 hover:text-white"
                        onClick={() => setOpenSideNav(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-gray-800 pb-6 shadow-xl">
                    <div>
                      <Dialog.Title className="text-lg font-mono dark:text-gray-50 text-gray-900">
                        <div className="relative flex items-center font-mono text-white pl-8 h-40 sm:h-56 bg-gradient-to-r from-stone-500 to-sky-700">
                          <div>
                            <p className="text-2xl">Hey👋, I&apos;m Abel</p>
                            <p>Let&apos;s connect 👇</p>
                          </div>

                          <img
                            src="https://user-images.githubusercontent.com/84567489/191514951-57b0486c-d073-43ee-a076-6f824821a2e0.jpg"
                            className="h-20 w-20 rounded-full mx-auto"
                            alt="my-avatar"
                          />
                        </div>
                      </Dialog.Title>
                    </div>
                    <div className="h-full flex flex-col justify-between">
                      <div className="space-y-1 pb-3">
                        {navigation.map((nav) => {
                          return (
                            <a
                              as="a"
                              href={nav.href}
                              key={nav.name}
                              className={classNames(
                                selected === nav.name
                                  ? "border-l-4 border-cyan-500 bg-cyan-200 dark:bg-gray-700"
                                  : "hover:bg-cyan-500 hover:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-800",
                                "block py-2 pl-3 pr-4 text-base font-mono text-gray-500"
                              )}
                              onClick={() => {
                                setSelected(nav.name);
                                setOpenSideNav(false);
                              }}
                            >
                              {nav.name}
                            </a>
                          );
                        })}
                      </div>
                      <div className="text-center text-xs font-mono bottom-0">
                        <p className="text-gray-600">
                          Abel Gashaw Ayalew - 2022{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
