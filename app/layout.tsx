import type { Metadata } from "next";
import "./globals.css";
import { luckiest_guy } from "./fonts";
import localFont from "next/font/local";

const kawaiiRT = localFont({
  src: "./fonts/KawaiiRT-MonaShine.ttf",
  display: "swap",
  variable: "--font-kawaiiRT", // Optional: CSS variable name
});

export const metadata: Metadata = {
  title: "Tijuanita Mi Ciudad",
  description: "Sitio web de la organización social Tijuanita Mi Ciudad.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${luckiest_guy.variable} ${kawaiiRT.variable}`}>
      <body className={`  antialiased`}>{children}</body>
    </html>
  );
}
