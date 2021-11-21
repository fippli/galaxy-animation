export const speed = (star) => ({
  ...star,
  timePassed: star.timePassed + star.speed,
});
