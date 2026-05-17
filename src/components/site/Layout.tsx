import { lazy, Suspense } from "react";
import { Outlet } from "@tanstack/react-router";

import { Navbar } from "./Navbar";

const LazyFooter = lazy(() =>
  import("./Footer").then((module) => ({ default: module.Footer }))
);

export function SiteLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <Suspense fallback={<div className="h-24" aria-hidden="true" />}>
        <LazyFooter />
      </Suspense>
    </div>
  );
}