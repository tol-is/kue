export default (fn) => {
  const cache = {};
  return (...args) => {
    const stringifiedArgs = JSON.stringify(args);
    const result = cache[stringifiedArgs] ? cache[stringifiedArgs] : fn(...args);
    return result;
  };
};
