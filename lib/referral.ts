/** Referral tracking for the partner program. Links look like https://www.design-developer.com/?ref=AMY */
export const REF_KEY = "dd_ref";
export const REF_DAYS = 90;

export function cleanRef(v: string | null | undefined) {
  if (!v) return null;
  const c = v.trim().slice(0, 32);
  return /^[A-Za-z0-9_-]+$/.test(c) ? c.toUpperCase() : null;
}

export function readRef(): string | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(REF_KEY);
    if (!raw) return null;
    const { code, exp } = JSON.parse(raw) as { code: string; exp: number };
    if (Date.now() > exp) {
      localStorage.removeItem(REF_KEY);
      return null;
    }
    return cleanRef(code);
  } catch {
    return null;
  }
}
