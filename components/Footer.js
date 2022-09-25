import { Wrapper } from "./Wrapper";

export function Footer() {
  return (
    <footer className="mt-32">
      <Wrapper.Outer>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <Wrapper.Inner>
            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} Abel Gashaw Ayalew. All rights
                reserved.
              </p>
            </div>
          </Wrapper.Inner>
        </div>
      </Wrapper.Outer>
    </footer>
  );
}
