export const limit = (x, min, max) => (x < min ? min : x < max ? x : max);

export const limitUnit = (x) => limit(x, 0, 1);

export const isMobile = () => {
  if (typeof navigator === "undefined") return false;
  return navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|IEMobile/);
};
