import type { Metadata } from "next";
import {
  Schibsted_Grotesk,
  Martian_Mono,
  Schoolbell,
  Shantell_Sans,
} from "next/font/google";
import "./globals.css";

/*
const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk-sans",
  subsets: ["latin"],
});
*/

const shantellSans = Shantell_Sans({
  variable: "--font-shantell-sans",
  subsets: ["latin"],
});

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js Bun app",
  description: "Having fun with Bun!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${shantellSans.variable} ${martianMono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
