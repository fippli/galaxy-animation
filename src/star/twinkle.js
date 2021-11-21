export const starTwinkle = (star) => {
  const twinkle = random(10);
  const { alpha } = star;

  if (twinkle === 1 && alpha > 0) {
    return {
      ...star,
      alpha: alpha - 0.05,
    };
  } else if (twinkle === 2 && alpha < 1) {
    return {
      ...star,
      alpha: alpha + 0.05,
    };
  }

  return star;
};
