import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Terminal Portfolio",
  description: "An interactive terminal-style portfolio showcasing projects and skills",
  keywords: ["portfolio", "developer", "terminal", "projects", "skills", "typescript", "nextjs"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--background)] text-[var(--foreground)] flex flex-col min-h-screen`}>
        <div className="flex-1">
          {children}
        </div>
        {/* <footer className="py-4 text-center text-sm text-[var(--foreground)] opacity-60">
          © {new Date().getFullYear()} Saad Altaf. Built with Next.js and TypeScript.
        </footer> */}
      </body>
    </html>
  );
}
