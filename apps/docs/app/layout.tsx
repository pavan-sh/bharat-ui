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
          <main className="flex-1">
            <div className="mx-auto max-w-3xl p-6">
              <div className="prose prose-zinc max-w-none">{children}</div>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
