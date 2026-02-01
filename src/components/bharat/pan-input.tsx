"use client";

import * as React from "react";

import { cn } from "../../lib/cn";

const PAN_MAX_LENGTH = 10;

/**
 * Normalize to uppercase alphanumeric only.
 */
function normalize(value: string) {
  return value.toUpperCase().replace(/[^A-Z0-9]/g, "");
}

/**
 * Enforces PAN structure while being paste-friendly.
 * Pattern: AAAAA9999A
 */
export function coercePan(value: string) {
  const raw = normalize(value);

  let out = "";

  for (const ch of raw) {
    const i = out.length;
    if (i >= PAN_MAX_LENGTH) break;

    const needsLetter = i < 5 || i === 9;
    const needsDigit = i >= 5 && i <= 8;

    if (needsLetter) {
      if (/[A-Z]/.test(ch)) out += ch;
      continue;
    }

    if (needsDigit) {
      if (/[0-9]/.test(ch)) out += ch;
      continue;
    }
  }

  return out;
}

export function isValidPan(value: string) {
  return /^[A-Z]{5}[0-9]{4}[A-Z]$/.test(value);
}

export type PanInputProps = Omit<
  React.ComponentPropsWithoutRef<"input">,
  "value" | "defaultValue" | "onChange" | "inputMode" | "pattern" | "maxLength"
> & {
  /** PAN value (will be auto-uppercased and coerced to AAAAA9999A). */
  value?: string;
  /** Initial value for uncontrolled usage. */
  defaultValue?: string;
  /** Called whenever the value changes (coerced PAN string). */
  onValueChange?: (value: string) => void;
  /**
   * When true, styles the input as invalid.
   * If omitted, the input becomes invalid automatically when it has 10 chars and fails validation.
   */
  invalid?: boolean;
};

export const PanInput = React.forwardRef<HTMLInputElement, PanInputProps>(
  (
    {
      className,
      value,
      defaultValue,
      onValueChange,
      invalid,
      ...props
    },
    ref
  ) => {
    const [internal, setInternal] = React.useState(() =>
      defaultValue ? coercePan(defaultValue) : ""
    );

    const isControlled = value != null;
    const current = isControlled ? coercePan(String(value)) : internal;

    const computedInvalid =
      invalid ?? (current.length === PAN_MAX_LENGTH && !isValidPan(current));

    return (
      <input
        ref={ref}
        value={current}
        onChange={(e) => {
          const next = coercePan(e.target.value);

          if (!isControlled) setInternal(next);
          onValueChange?.(next);
        }}
        autoCapitalize="characters"
        autoComplete="off"
        inputMode="text"
        maxLength={PAN_MAX_LENGTH}
        spellCheck={false}
        aria-invalid={computedInvalid || undefined}
        className={cn(
          "flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground",
          "placeholder:text-muted-foreground",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30",
          "disabled:cursor-not-allowed disabled:opacity-50",
          computedInvalid && "border-destructive focus-visible:ring-destructive/30",
          className
        )}
        {...props}
      />
    );
  }
);
PanInput.displayName = "PanInput";
