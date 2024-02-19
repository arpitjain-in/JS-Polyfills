function mySetTimeout() {
  let timer = 0;
  timerMap = {};

  function callSetTimeout(cb, delay) {
    const id = timer++;
    timerMap[id] = true;
    let start = Date().now();
    function triggerSettime() {
      if (Date().now() > start + delay) {
        cb();
      } else {
        requestIdleCallback(triggerSettime);
      }
    }
    requestIdleCallback(triggerSettime);
    return id;
  }

  function callClearTimeout(timer) {
    delete timerMap[timer];
  }

  return { callSetTimeout, callClearTimeout };
}

const { callSetTimeout, callClearTimeout } = mySetTimeout();

const _timer = callSetTimeout(function () {
  console.log("Print");
}, 3000);

console.log({ _timer });
