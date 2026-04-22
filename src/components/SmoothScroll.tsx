import { ReactNode } from "react";

// SmoothScroll disabled — using native browser scroll physics on all devices.
export default function SmoothScroll({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
