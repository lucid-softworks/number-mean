/** Returns the arithmetic mean; rejects empty or non-finite input. */
export function mean(values: readonly number[]): number {
  if (values.length === 0) throw new RangeError("Values must not be empty");
  let total = 0;
  for (const value of values) {
    if (!Number.isFinite(value)) throw new RangeError("Values must be finite");
    total += value;
  }
  return total / values.length;
}
