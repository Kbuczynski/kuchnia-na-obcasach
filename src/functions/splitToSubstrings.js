export function splitToSubstrings(str, n) {
  const arr = [];

  for (let index = 0; index < str.length; index += n) {
    arr.push(str.slice(index, index + n));
  }

  return arr;
}
