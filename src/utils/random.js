export const random = (...args) => {
  const [min, max] = args;

  if (args.length < 2) {
    return Math.floor(Math.random() * (min - 0 + 1));
  }

  if (min > max) {
    return Math.floor(Math.random() * (min - max + 1)) + max;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};
