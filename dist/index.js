const applyMethod = (method) =>
  (...args) =>
    (x) => {
      try {
        return x[method](...args);
      } catch (error) {
        console.log(method);
        console.log(args);
        console.log(x);
        console.error(error);
      }
    };
const canvas = document.getElementById("galaxy-canvas");
const gradientCanvas = document.createElement("canvas");
const getContext = applyMethod("getContext")("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
gradientCanvas.width = 100;
gradientCanvas.height = 100;
const HUE = 217;
const drawStar = (context) =>
  ({ radius, timePassed, orbitRadius, orbitX, orbitY }) => {
    const x = Math.sin(timePassed + 1) * orbitRadius + orbitX;
    const y = Math.cos(timePassed) * orbitRadius / 2 + orbitY;
    context.drawImage(
      gradientCanvas,
      x - radius / 2,
      y - radius / 2,
      radius,
      radius,
    );
  };
const half = (x) => x / 2;
const initiateGradientCanvas = (gradientCanvas) => {
  const context = getContext(gradientCanvas);
  const { width } = gradientCanvas;
  const gradient = context.createRadialGradient(
    half(width),
    half(width),
    0,
    half(width),
    half(width),
    half(width),
  );
  gradient.addColorStop(0.025, "#fff");
  gradient.addColorStop(0.1, "hsl(" + 217 + ", 61%, 33%)");
  gradient.addColorStop(0.25, "hsl(" + 217 + ", 64%, 6%)");
  gradient.addColorStop(1, "transparent");
  context.fillStyle = gradient;
  context.beginPath();
  context.arc(half(width), half(width), half(width), 0, Math.PI * 2);
  context.fill();
};
const random = (...args) => {
  const [min, max] = args;
  if (args.length < 2) {
    return Math.floor(Math.random() * (min - 0 + 1));
  }
  if (min > max) {
    return Math.floor(Math.random() * (min - max + 1)) + max;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const range = (n) => [
  ...Array(n).keys(),
];
const resetAnimationCanvas = (canvas) => {
  const context = getContext(canvas);
  context.globalCompositeOperation = "source-over";
  context.globalAlpha = 0.8;
  context.fillStyle = "hsla(" + HUE + ", 64%, 6%, 1)";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.globalCompositeOperation = "lighter";
};
const speed = (star) => ({
  ...star,
  timePassed: star.timePassed + star.speed,
});
const star = (orbitRadius) => ({
  orbitRadius: random(canvas.width / 2 - 50),
  radius: random(100, orbitRadius) / 10,
  orbitX: half(canvas.width),
  orbitY: half(canvas.height),
  timePassed: random(0, 1400),
  speed: random(orbitRadius) / 100000,
  alpha: random(2, 10) / 10,
});
const starTwinkle = (star) => {
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
const animation = (canvas, stars) =>
  () => {
    resetAnimationCanvas(canvas);
    stars.forEach(drawStar(getContext(canvas)));
    const nextStars = stars.map(starTwinkle).map(speed);
    requestAnimationFrame(animation(canvas, nextStars));
  };
const main = () => {
  initiateGradientCanvas(gradientCanvas);
  const stars = range(1400).map((_) => star(random(canvas.width / 2 - 50)));
  animation(canvas, stars)();
};
main();
