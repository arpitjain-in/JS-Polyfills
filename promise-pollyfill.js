/**
 * Promise
 */

const p1 = new Promise((resolve, reject) => {
  resolve("Hello World");
});

p1.then((res) => console.log({ res1: res }));

/**
 * Promise Polyfill
 */

function myPromise(executor) {
  const PROMISE_STATE = {
    PENDING: "PENDING",
    RESOLVED: "RESOLVED",
    REJECTED: "REJECTED",
  };

  let val = null;
  let thenCbList = [];
  let errCbList = [];
  let state = PROMISE_STATE.PENDING;

  function resolve(value) {
    if (!PROMISE_STATE.PENDING) return;
    state = PROMISE_STATE.RESOLVED;
    val = value;
    thenCbList.forEach((cb) => cb(val));
  }

  function reject(err) {
    if (!PROMISE_STATE.PENDING) return;
    state = PROMISE_STATE.REJECTED;
    val = err;
    errCbList.forEach((cb) => cb(err));
  }

  this.then = function (cb) {
    if (state === PROMISE_STATE.RESOLVED) {
      cb(val);
    } else {
      thenCbList.push(cb);
    }
    return this;
  };

  this.catch = function (cb) {
    if (state === PROMISE_STATE.REJECTED) {
      cb(val);
    } else {
      errCbList.push(cb);
    }
    return this;
  };

  executor(resolve, reject);
}

const p2 = new myPromise((resolve, reject) => {
  reject("Hello World");
});

p2.then((res) => console.log({ res })).catch((err) => {
  console.log({ err });
});
