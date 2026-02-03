export const PAN_MAX_LENGTH = 10;

/** Normalize to uppercase alphanumeric only. */
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
