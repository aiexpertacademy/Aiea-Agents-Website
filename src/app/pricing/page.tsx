"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PricingPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/#price");
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F7FF] pt-28">
      <p className="font-body text-on-surface-variant animate-pulse">Redirecting to pricing…</p>
    </div>
  );
}
