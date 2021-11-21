import { canvas, getContext, gradientCanvas } from "./canvas/canvas.js";
import { MAX_STARS } from "./constants.js";
import { drawStar } from "./star/drawStar.js";
import { initiateGradientCanvas } from "./canvas/initiateGratientCanvas.js";
import { random } from "./utils/random.js";
import { range } from "./utils/range.js";
import { resetAnimationCanvas } from "./canvas/resetAnimationCanvas.js";
import { speed } from "./star/speed.js";
import { star } from "./star/star.js";
import { starTwinkle } from "./star/twinkle.js";

const animation = (canvas, stars) =>
  () => {
    resetAnimationCanvas(canvas);
    stars.forEach(drawStar(getContext(canvas)));
    const nextStars = stars.map(starTwinkle).map(speed);
    requestAnimationFrame(animation(canvas, nextStars));
  };

const main = () => {
  initiateGradientCanvas(gradientCanvas);

  const stars = range(MAX_STARS).map((_) =>
    star(random(canvas.width / 2 - 50))
  );

  animation(canvas, stars)();
};

main();
