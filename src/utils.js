export const limit = (x, min, max) => (x < min ? min : x < max ? x : max);

export const limitUnit = (x) => limit(x, 0, 1);

export const isMobile = () => {
  if (typeof navigator === "undefined") return false;
  return navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|IEMobile/);
};

const WINDOW_FALLBACK = {
  innerHeight: 100,
  innerWidth: 100,
};

export function getWindow() {
  return typeof window !== "undefined" ? window : WINDOW_FALLBACK;
}
