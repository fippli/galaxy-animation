export const applyMethod = (method) =>
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
