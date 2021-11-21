import { applyMethod } from "../utils/method.js";
export const canvas = document.getElementById("galaxy-canvas");
export const gradientCanvas = document.createElement("canvas");

export const getContext = applyMethod("getContext")("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

gradientCanvas.width = 100;
gradientCanvas.height = 100;
