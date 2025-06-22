function trimmer(str, length) {
  if (typeof str !== "string") {
    return str;
  }
  if (str.length <= length) {
    return str;
  }
  return str.slice(0, length) + "...";
}

export default trimmer;
