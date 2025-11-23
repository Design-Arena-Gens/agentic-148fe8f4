import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { clsx } from "clsx";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: "LinkedIn Creator Agent",
  description:
    "Generate LinkedIn leads, campaign diagrams, and viral posts for your company using AI-powered playbooks."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(inter.variable, "bg-slate-950 text-slate-100")}>
        {children}
      </body>
    </html>
  );
}
