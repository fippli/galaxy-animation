export const drawStar = (context) =>
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
