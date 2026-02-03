import type * as React from "react";

import Link from "next/link";

import { nav } from "./nav";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
        {title}
      </div>
      <div className="flex flex-col gap-1">{children}</div>
    </div>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="rounded-md px-2 py-1 text-sm text-zinc-800 hover:bg-saffron/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron/40 focus-visible:ring-offset-2"
    >
      {label}
    </Link>
  );
}

export function Sidebar() {
  return (
    <aside className="sticky top-0 h-dvh w-64 border-r border-zinc-200 bg-white p-4">
      <div className="-mx-4 -mt-4 mb-4 h-px bg-gradient-to-r from-saffron/70 via-ashoka/50 to-indiaGreen/70" />

      <div className="mb-6">
        <Link href="/" className="text-sm font-semibold">
          bharat-ui
        </Link>
        <div className="text-xs text-zinc-500">Docs</div>
      </div>

      <nav className="space-y-6">
        <Section title="Getting Started">
          {nav.top.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}
        </Section>

        <Section title="Components">
          {nav.components.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}
        </Section>
      </nav>
    </aside>
  );
}
