function mySetInterval() {
  let timer = 0;
  timerMap = {};

  function callSetInterval(cb, delay) {
    const id = timer++;
    timerMap[id] = true;
    let start = Date.now();
    function triggerSettime() {
      if (Date.now() > start + delay) {
        start = Date.now();
        cb();
        requestIdleCallback(triggerSettime);
      } else {
        requestIdleCallback(triggerSettime);
      }
    }
    requestIdleCallback(triggerSettime);
    return id;
  }

  function callClearInterval(timer) {
    delete timerMap[timer];
  }

  return { callSetInterval, callClearInterval };
}

const { callSetInterval, callClearInterval } = mySetInterval();

callSetInterval(function () {
  console.log("Print");
}, 1000);

console.log("ssffs");
