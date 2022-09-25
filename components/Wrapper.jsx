import { forwardRef } from "react";
import clsx from "clsx";

const OuterWrapper = forwardRef(function OuterWrapper(
  { className, children, ...props },
  ref
) {
  return (
    <div ref={ref} className={clsx("sm:px-8", className)} {...props}>
      <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
    </div>
  );
});

const InnerWrapper = forwardRef(function InnerWrapper(
  { className, children, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={clsx("relative px-4 sm:px-8 lg:px-12", className)}
      {...props}
    >
      <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
    </div>
  );
});

export const Wrapper = forwardRef(function Wrapper(
  { children, ...props },
  ref
) {
  return (
    <OuterWrapper ref={ref} {...props}>
      <InnerWrapper>{children}</InnerWrapper>
    </OuterWrapper>
  );
});

Wrapper.Outer = OuterWrapper;
Wrapper.Inner = InnerWrapper;
