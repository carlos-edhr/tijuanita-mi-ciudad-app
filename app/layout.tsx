import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { luckiest_guy } from "./fonts";

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
    <html lang="en" className={`${luckiest_guy.variable}`}>
      <body className={`  antialiased`}>{children}</body>
    </html>
  );
}
