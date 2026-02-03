# AadhaarInput

A compact numeric input for **Aadhaar number (12 digits)** and **OTP (6 digits)**, built on top of an `InputOTP` primitive (inspired by shadcn/ui).

## Usage

```tsx
import * as React from "react";
import { AadhaarInput } from "./components/bharat/aadhaar-input";

export function Example() {
  const [aadhaar, setAadhaar] = React.useState("");

  return (
    <AadhaarInput
      mode="aadhaar"
      value={aadhaar}
      onValueChange={setAadhaar}
      aria-label="Aadhaar number"
    />
  );
}
```

### OTP mode

```tsx
const [otp, setOtp] = React.useState("");

<AadhaarInput
  mode="otp"
  value={otp}
  onValueChange={setOtp}
  autoComplete="one-time-code"
  aria-label="Aadhaar OTP"
/>;
```

## Props

`AadhaarInput` supports all props of the underlying `InputOTP` component, plus:

- `mode?: "aadhaar" | "otp"` (default: `"aadhaar"`)
  - `"aadhaar"` => 12 digits, grouped as `4-4-4`
  - `"otp"` => 6 digits, grouped as `3-3`

## Notes

- Input is normalized to **digits only**.
- `inputMode="numeric"` and `pattern="\d*"` are set to encourage numeric keyboards.
