import * as React from "react";

import "./App.css";
import { AadhaarInput } from "./components/bharat/aadhaar-input";

function App() {
  const [aadhaar, setAadhaar] = React.useState("");
  const [otp, setOtp] = React.useState("");

  return (
    <div className="bg-background text-foreground p-6 space-y-8">
      <section className="space-y-2">
        <h1 className="text-lg font-semibold">bharat-ui</h1>
        <p className="text-sm text-foreground/70">
          First component: Aadhaar number + OTP input.
        </p>
      </section>

      <section className="space-y-3">
        <div className="space-y-1">
          <div className="text-sm font-medium">Aadhaar number</div>
          <AadhaarInput
            mode="aadhaar"
            value={aadhaar}
            onValueChange={setAadhaar}
          />
          <div className="text-xs text-foreground/60">Value: {aadhaar || "—"}</div>
        </div>

        <div className="space-y-1">
          <div className="text-sm font-medium">OTP</div>
          <AadhaarInput
            mode="otp"
            value={otp}
            onValueChange={setOtp}
          />
          <div className="text-xs text-foreground/60">Value: {otp || "—"}</div>
        </div>
      </section>
    </div>
  );
}

export default App;
