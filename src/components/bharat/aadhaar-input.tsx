"use client";

import * as React from "react";

type AadhaarInputMode = "aadhaar" | "otp";

export type AadhaarInputProps = {
  /** "aadhaar" => 12 digits (grouped 4-4-4). "otp" => 6 digits (grouped 3-3). */
  mode?: AadhaarInputMode;
  value?: string;
  onValueChange?: (value: string) => void;
  onComplete?: (value: string) => void;
  disabled?: boolean;
  className?: string;
  /** Mask digits in the UI (value is still digits-only). */
  mask?: boolean;
};

function onlyDigits(s: string) {
  return s.replace(/\D/g, "");
}

function groupBreaks(mode: AadhaarInputMode) {
  return mode === "aadhaar" ? [4, 8] : [3];
}

export function AadhaarInput({
  mode = "aadhaar",
  value = "",
  onValueChange,
  onComplete,
  disabled,
  className,
  mask,
}: AadhaarInputProps) {
  const maxLength = mode === "aadhaar" ? 12 : 6;
  const digits = onlyDigits(value).slice(0, maxLength);

  const refs = React.useRef<Array<HTMLInputElement | null>>([]);

  const setDigitAt = React.useCallback(
    (index: number, digit: string) => {
      const arr = digits.split("");
      arr[index] = digit;
      const next = onlyDigits(arr.join("")).slice(0, maxLength);
      onValueChange?.(next);
      if (next.length === maxLength) onComplete?.(next);
    },
    [digits, maxLength, onValueChange, onComplete]
  );

  const focusIndex = (i: number) => {
    const el = refs.current[i];
    el?.focus();
    el?.select();
  };

  const onPaste = (e: React.ClipboardEvent) => {
    const pasted = onlyDigits(e.clipboardData.getData("text"));
    if (!pasted) return;
    e.preventDefault();

    const next = (digits + pasted).slice(0, maxLength);
    onValueChange?.(next);
    if (next.length === maxLength) onComplete?.(next);

    const nextIndex = Math.min(next.length, maxLength - 1);
    requestAnimationFrame(() => focusIndex(nextIndex));
  };

  const breaks = groupBreaks(mode);

  return (
    <div className={className}>
      <div className="flex items-center gap-2">
        {Array.from({ length: maxLength }).map((_, i) => {
          const isBreak = breaks.includes(i);
          const char = digits[i] ?? "";
          const shown = mask && char ? "•" : char;

          return (
            <React.Fragment key={i}>
              {isBreak ? (
                <div aria-hidden="true" className="mx-1 select-none text-zinc-400">
                  —
                </div>
              ) : null}
              <input
                ref={(el) => {
                  refs.current[i] = el;
                }}
                inputMode="numeric"
                pattern="\\d*"
                autoComplete={mode === "otp" ? "one-time-code" : "off"}
                aria-label={mode === "aadhaar" ? `Aadhaar digit ${i + 1}` : `OTP digit ${i + 1}`}
                disabled={disabled}
                value={shown}
                onPaste={onPaste}
                onChange={(e) => {
                  const next = onlyDigits(e.target.value);
                  if (next.length === 0) {
                    setDigitAt(i, "");
                    return;
                  }
                  // take last typed digit
                  const d = next[next.length - 1]!
                  setDigitAt(i, d);
                  if (i < maxLength - 1) focusIndex(i + 1);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Backspace") {
                    e.preventDefault();
                    if (digits[i]) {
                      setDigitAt(i, "");
                    } else if (i > 0) {
                      focusIndex(i - 1);
                      setDigitAt(i - 1, "");
                    }
                  }
                  if (e.key === "ArrowLeft" && i > 0) {
                    e.preventDefault();
                    focusIndex(i - 1);
                  }
                  if (e.key === "ArrowRight" && i < maxLength - 1) {
                    e.preventDefault();
                    focusIndex(i + 1);
                  }
                }}
                className="h-10 w-10 rounded-md border border-zinc-300 bg-white text-center text-sm text-zinc-900 outline-none focus:ring-2 focus:ring-zinc-400 disabled:opacity-50"
              />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
