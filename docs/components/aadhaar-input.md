# AadhaarInput

A numeric OTP-style input that supports either:

- **Aadhaar** (12 digits, grouped as `4-4-4`)
- **OTP** (6 digits, grouped as `3-3`)

## Demo

<iframe
  src="/demos/aadhaar-input/index.html"
  style="width: 100%; height: 240px; border: 1px solid hsl(var(--border)); border-radius: 12px; background: hsl(var(--background));"
></iframe>

## Usage

```tsx
import * as React from "react";
import { AadhaarInput } from "bharat-ui";

export function Example() {
  const [value, setValue] = React.useState("");

  return (
    <AadhaarInput
      mode="aadhaar"
      value={value}
      onValueChange={setValue}
      onComplete={(v) => console.log("complete", v)}
    />
  );
}
```

## Props

- `mode?: "aadhaar" | "otp"` (default: `"aadhaar"`)
- `value?: string` (digits-only; non-digits are stripped)
- `onValueChange?: (value: string) => void`

> This component is built on top of `input-otp`.
