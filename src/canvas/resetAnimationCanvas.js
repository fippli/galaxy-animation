import { HUE } from "../constants.js";

export const resetAnimationCanvas = (canvas) => {
  const context = getContext(canvas);
  context.globalCompositeOperation = "source-over";
  context.globalAlpha = 0.8;
  context.fillStyle = "hsla(" + HUE + ", 64%, 6%, 1)";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.globalCompositeOperation = "lighter";
};
