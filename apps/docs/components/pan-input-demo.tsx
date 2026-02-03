"use client";

import * as React from "react";

import { PanInput, isValidPan } from "bharat-ui";

export function PanInputDemo() {
  const [value, setValue] = React.useState("");

  const valid = value.length === 10 ? isValidPan(value) : undefined;

  return (
    <div className="not-prose space-y-3 rounded-lg border border-zinc-200 bg-white p-4">
      <div>
        <div className="text-sm font-medium text-zinc-900">Live demo</div>
        <div className="text-xs text-zinc-500">
          Current value: <span className="font-mono">{value || "—"}</span>
          {valid !== undefined ? (
            <>
              {" "}•{" "}
              <span className={valid ? "text-emerald-600" : "text-red-600"}>
                {valid ? "valid" : "invalid"}
              </span>
            </>
          ) : null}
        </div>
      </div>

      <PanInput
        placeholder="ABCDE1234F"
        value={value}
        onValueChange={setValue}
      />

      <div className="text-xs text-zinc-500">
        Format: <span className="font-mono">AAAAA9999A</span> (auto-uppercase, paste-friendly)
      </div>
    </div>
  );
}
