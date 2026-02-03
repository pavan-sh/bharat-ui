"use client";

import * as React from "react";
import { OTPInput, OTPInputContext } from "input-otp";

import { cn } from "../../lib/cn";

const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn(
      "flex items-center gap-2 has-[:disabled]:opacity-50",
      containerClassName
    )}
    className={cn("disabled:cursor-not-allowed", className)}
    {...props}
  />
));
InputOTP.displayName = "InputOTP";

function InputOTPGroup({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("flex items-center", className)} {...props} />
  );
}

function InputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div"> & { index: number }) {
  const inputOTPContext = React.useContext(OTPInputContext);

  const slot = inputOTPContext.slots[index];
  if (!slot) {
    throw new Error(
      `InputOTPSlot: invalid index ${index}. Ensure maxLength is greater than this index.`
    );
  }

  return (
    <div
      className={cn(
        "relative flex h-10 w-10 items-center justify-center border border-border bg-background text-foreground text-sm transition-colors",
        "first:rounded-l-md last:rounded-r-md",
        slot.isActive && "z-10 ring-2 ring-primary/30",
        className
      )}
      {...props}
    >
      {slot.char}
      {slot.hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-pulse bg-foreground" />
        </div>
      )}
    </div>
  );
}

function InputOTPSeparator({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={cn(
        "mx-1 select-none text-foreground/40",
        className
      )}
      aria-hidden="true"
      {...props}
    >
      —
    </div>
  );
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };
