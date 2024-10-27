function sum(a, b) {
  let sum = Number(Number(parseInt(a)) + Number(parseInt(b)));
  if (Number.isNaN(sum)) {
    console.log("NaN");
    console.log("so return 0");

    return 0;
  }
  return sum;
}

module.exports = sum;
// console.log(sum("1.1a", "10aasdasd"));
