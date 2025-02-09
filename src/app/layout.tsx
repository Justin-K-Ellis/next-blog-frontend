import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

import Header from "@/components/custom-components/Header";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Logical Space",
  description: "A personal blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSans.variable} antialiased`}>
        <Header />
        <div className="md:w-1/2 w-11/12 mx-auto">{children}</div>
      </body>
    </html>
  );
}
