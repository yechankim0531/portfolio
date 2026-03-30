/**
 * Parse frontmatter dates like `2025-07-14` as a **local calendar date**.
 * `new Date("2025-07-14")` is UTC midnight, which can show as the previous day in US timezones.
 */
export function parseFrontmatterDate(dateStr: string): Date {
  const trimmed = dateStr.trim();
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(trimmed);
  if (m) {
    const y = Number(m[1]);
    const mo = Number(m[2]) - 1;
    const d = Number(m[3]);
    return new Date(y, mo, d);
  }
  return new Date(trimmed);
}
