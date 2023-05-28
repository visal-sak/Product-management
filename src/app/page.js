"use client";
import Image from "next/image";
import { Suspense } from "react";
import Loading from "./loading";
import Page from "./products/page";
import ProductData from "./products/[id]/page";
import { Fade } from "react-awesome-reveal";

export default function Home() {
  return (
    <Fade>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-emerald-100">
        <Suspense fallback={<Loading />}>
          <Page />
        </Suspense>
      </main>
    </Fade>
  );
}
