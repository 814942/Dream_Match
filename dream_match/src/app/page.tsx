"use client"
import Navbar from "@/components/organisms/Navbar";
import Team from "@/components/organisms/Team";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <main className="bg-white">
      
      <section id="home" className="h-screen w-11/12 m-auto mb-8">
        <div>
          <Team />
        </div>
      </section>
    </main>
  );
}
