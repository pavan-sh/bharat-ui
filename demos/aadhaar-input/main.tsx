import * as React from "react";
import { createRoot } from "react-dom/client";

import "../../src/styles/globals.css";

import { AadhaarInput } from "../../src/components/bharat/aadhaar-input";

function App() {
  const [mode, setMode] = React.useState<"aadhaar" | "otp">("aadhaar");
  const [value, setValue] = React.useState("");

  return (
    <div className="min-h-[220px] w-full bg-background text-foreground p-6">
      <div className="mx-auto max-w-xl space-y-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-sm font-medium">AadhaarInput</div>
            <div className="text-xs text-slate-600">Live preview</div>
          </div>
          <div className="flex items-center gap-2">
            <button
              className={`rounded-md border px-3 py-1.5 text-sm ${
                mode === "aadhaar" ? "bg-primary text-primary-foreground" : "bg-background"
              }`}
              onClick={() => {
                setMode("aadhaar");
                setValue("");
              }}
            >
              Aadhaar
            </button>
            <button
              className={`rounded-md border px-3 py-1.5 text-sm ${
                mode === "otp" ? "bg-primary text-primary-foreground" : "bg-background"
              }`}
              onClick={() => {
                setMode("otp");
                setValue("");
              }}
            >
              OTP
            </button>
          </div>
        </div>

        <div className="rounded-xl border p-4">
          <AadhaarInput
            mode={mode}
            value={value}
            onValueChange={setValue}
            className="w-full"
          />
          <div className="mt-3 text-xs text-slate-600">
            Value: <span className="font-mono text-foreground">{value || "(empty)"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
