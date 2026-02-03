"use client";

import * as React from "react";

import { VoterIdInput, isValidVoterId } from "bharat-ui";

export function VoterIdInputDemo() {
  const [value, setValue] = React.useState("");

  const valid = value.length === 10 ? isValidVoterId(value) : undefined;

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

      <VoterIdInput
        placeholder="ABC1234567"
        value={value}
        onValueChange={setValue}
      />

      <div className="text-xs text-zinc-500">
        Format: <span className="font-mono">AAA9999999</span> (EPIC / Voter ID)
      </div>
    </div>
  );
}
