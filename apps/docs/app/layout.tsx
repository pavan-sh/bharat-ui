import type * as React from "react";
import type { Metadata } from "next";

import "./globals.css";

import { Sidebar } from "../components/sidebar";

export const metadata: Metadata = {
  title: "bharat-ui",
  description: "bharat-ui documentation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-dvh">
          <Sidebar />

          <main className="flex min-h-dvh flex-1 flex-col">
            <div className="mx-auto w-full max-w-3xl flex-1 p-6">
              <div className="prose prose-zinc max-w-none">{children}</div>
            </div>

            <footer className="border-t border-zinc-200">
              <div className="h-px bg-gradient-to-r from-saffron/70 via-ashoka/50 to-indiaGreen/70" />
              <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 p-6 text-xs text-zinc-500">
                <span>Made in India</span>
                <span className="text-zinc-400">© bharat-ui</span>
              </div>
            </footer>
          </main>
        </div>
      </body>
    </html>
  );
}
