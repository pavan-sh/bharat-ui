"use client";

import * as React from "react";

import { cn } from "../../lib/cn";
import { coercePan, isValidPan, PAN_MAX_LENGTH } from "../../lib/pan";

export type PanInputProps = Omit<
  React.ComponentPropsWithoutRef<"input">,
  "value" | "defaultValue" | "onChange" | "inputMode" | "pattern" | "maxLength" | "type"
> & {
  /** PAN value (will be auto-uppercased and coerced to AAAAA9999A). */
  value?: string;
  /** Initial value for uncontrolled usage. */
  defaultValue?: string;
  /** Called whenever the value changes (coerced PAN string). */
  onValueChange?: (value: string) => void;
  /** Toggle masking (UI only). Underlying value is still the real PAN string. */
  mask?: boolean;
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
      mask,
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
        // Keep it "text" for normal mode; use password masking when requested.
        type={mask ? "password" : "text"}
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
