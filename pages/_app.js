import "../styles/globals.css";
import Nav from "../components/Nav";
import { useState, useEffect, useRef } from "react";
import { Footer } from "../components/Footer";
import dynamic from "next/dynamic";

function usePrevious(value) {
  let ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

function MyApp({ Component, pageProps, router }) {
  let previousPathname = usePrevious(router.pathname);

  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-slate-700/60 dark:ring-gray-300/20" />
        </div>
      </div>
      <div className="relative">
        <Nav />
        <main>
          <Component previousPathname={previousPathname} {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
