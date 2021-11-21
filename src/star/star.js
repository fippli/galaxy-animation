import { MAX_STARS } from "../constants.js";

export const star = (orbitRadius) => ({
  orbitRadius: random(canvas.width / 2 - 50),
  radius: random(100, orbitRadius) / 10,
  orbitX: half(canvas.width),
  orbitY: half(canvas.height),
  timePassed: random(0, MAX_STARS),
  speed: random(orbitRadius) / 100000,
  alpha: random(2, 10) / 10,
});
