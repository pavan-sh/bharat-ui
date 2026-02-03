export const EPIC_MAX_LENGTH = 10;

/** Normalize to uppercase alphanumeric only. */
function normalize(value: string) {
  return value.toUpperCase().replace(/[^A-Z0-9]/g, "");
}

/**
 * Enforces EPIC (Voter ID) structure while being paste-friendly.
 * Common EPIC pattern: AAA9999999 (3 letters + 7 digits)
 */
export function coerceEpic(value: string) {
  const raw = normalize(value);

  let out = "";

  for (const ch of raw) {
    const i = out.length;
    if (i >= EPIC_MAX_LENGTH) break;

    const needsLetter = i < 3;
    const needsDigit = i >= 3;

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

export function isValidEpic(value: string) {
  return /^[A-Z]{3}[0-9]{7}$/.test(value);
}

/** Alias for now, since we only support EPIC. */
export const VOTER_ID_MAX_LENGTH = EPIC_MAX_LENGTH;

/** Alias for now, since we only support EPIC. */
export const coerceVoterId = coerceEpic;

/** Alias for now, since we only support EPIC. */
export const isValidVoterId = isValidEpic;
