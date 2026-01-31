import * as React from "react";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "../ui/input-otp";

type AadhaarInputMode = "aadhaar" | "otp";

export type AadhaarInputProps = Omit<
  React.ComponentPropsWithoutRef<typeof InputOTP>,
  "maxLength" | "pattern" | "inputMode" | "onChange" | "value" | "render" | "children"
> & {
  /** "aadhaar" => 12 digits, grouped as 4-4-4. "otp" => 6 digits, grouped as 3-3. */
  mode?: AadhaarInputMode;
  value?: string;
  /** Called whenever the value changes (digits-only). */
  onValueChange?: (value: string) => void;
};

function onlyDigits(value: string) {
  return value.replace(/\D/g, "");
}

export function AadhaarInput({
  mode = "aadhaar",
  value,
  onValueChange,
  onComplete,
  ...props
}: AadhaarInputProps) {
  const maxLength = mode === "aadhaar" ? 12 : 6;

  const safeValue = value == null ? value : onlyDigits(value).slice(0, maxLength);

  return (
    <InputOTP
      value={safeValue}
      onChange={(next: string) =>
        onValueChange?.(onlyDigits(next).slice(0, maxLength))
      }
      onComplete={(completedValue) =>
        onComplete?.(onlyDigits(String(completedValue)).slice(0, maxLength))
      }
      maxLength={maxLength}
      inputMode="numeric"
      pattern="\\d*"
      {...props}
    >
      {mode === "aadhaar" ? (
        <>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
            <InputOTPSlot index={6} />
            <InputOTPSlot index={7} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={8} />
            <InputOTPSlot index={9} />
            <InputOTPSlot index={10} />
            <InputOTPSlot index={11} />
          </InputOTPGroup>
        </>
      ) : (
        <>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </>
      )}
    </InputOTP>
  );
}
