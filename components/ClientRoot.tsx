"use client";

import { useState, useEffect } from "react";
import Loading from "./Loading";

export default function ClientRoot({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return loading ? <Loading /> : <>{children}</>;
}