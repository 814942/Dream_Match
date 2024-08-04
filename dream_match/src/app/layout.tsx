import type { Metadata } from "next";
import { Inter, GFS_Neohellenic } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/organisms/Navbar";

const GFS = GFS_Neohellenic({
  subsets: ["greek"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Dream Match",
  description: "By Pablo Garay",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GFS.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
