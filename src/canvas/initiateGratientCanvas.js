import { HUE } from "../constants.js";
import { half } from "../utils/half.js";

export const initiateGradientCanvas = (gradientCanvas) => {
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
  gradient.addColorStop(0.1, "hsl(" + HUE + ", 61%, 33%)");
  gradient.addColorStop(0.25, "hsl(" + HUE + ", 64%, 6%)");
  gradient.addColorStop(1, "transparent");

  context.fillStyle = gradient;
  context.beginPath();
  context.arc(
    half(width),
    half(width),
    half(width),
    0,
    Math.PI * 2,
  );

  context.fill();
};
