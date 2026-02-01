"use client";

import * as React from "react";

import { AadhaarInput } from "bharat-ui";

export function AadhaarInputDemo() {
  const [value, setValue] = React.useState("");
  const [mode, setMode] = React.useState<"aadhaar" | "otp">("aadhaar");

  return (
    <div className="not-prose space-y-3 rounded-lg border border-zinc-200 bg-white p-4">
      <div className="flex items-center justify-between gap-2">
        <div>
          <div className="text-sm font-medium text-zinc-900">Live demo</div>
          <div className="text-xs text-zinc-500">
            Digits only. Current value: <span className="font-mono">{value || "—"}</span>
          </div>
        </div>

        <select
          className="rounded-md border border-zinc-300 bg-white px-2 py-1 text-sm"
          value={mode}
          onChange={(e) => {
            const nextMode = e.target.value as "aadhaar" | "otp";
            setMode(nextMode);
            setValue("");
          }}
        >
          <option value="aadhaar">Aadhaar (12 digits)</option>
          <option value="otp">OTP (6 digits)</option>
        </select>
      </div>

      <AadhaarInput
        mode={mode}
        value={value}
        onValueChange={setValue}
        onComplete={() => {
          // noop for docs
        }}
      />
    </div>
  );
}
