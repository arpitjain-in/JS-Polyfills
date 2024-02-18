let arr = [1, 2, 3, 4, 5];

/**
 * Map Polyfill
 */
Array.prototype.myMap = function (cb) {
  let newArr = [];
  for (let index = 0; index < this.length; index++) {
    newArr.push(cb(this[index], index));
  }
  return newArr;
};

let a = arr.myMap((el) => el * 2);
console.log({ a });

/**
 * Filter Polyfill
 */
Array.prototype.myFilter = function (cb) {
  let newArr = [];
  for (let index = 0; index < this.length; index++) {
    if (cb(this[index], index)) {
      newArr.push(this[index]);
    }
  }
  return newArr;
};

let b = arr.myFilter((el) => el % 2 !== 0);
console.log({ b });

/**
 * Reduce Polyfill
 */
Array.prototype.myReduce = function (cb, acc) {
  if (acc === undefined) {
    acc = this[0];
  }
  for (let index = 0; index < this.length; index++) {
    acc = cb(acc, this[index]);
  }
  return acc;
};

let c = arr.myReduce((acc, el) => {
  acc = acc + el;
  return acc;
}, 0);
console.log({ c });
