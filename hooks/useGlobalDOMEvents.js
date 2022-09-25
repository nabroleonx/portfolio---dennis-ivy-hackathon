import { useEffect } from "react";
export default function useGlobalDOMEvents(props) {
  useEffect(() => {
    for (let [key, func] of Object.entries(props)) {
      window.addEventListener(key, func, false);
    }
    return () => {
      for (let [key, func] of Object.entries(props)) {
        window.removeEventListener(key, func, false);
      }
    };
  }, []);
}
