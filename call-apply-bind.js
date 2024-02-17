const Vehicle = {
  type: "car",
  mode: "Gas",
  print: function (name, model) {
    console.log(`${name} , ${this.type} , ${this.mode}, ${model}`);
  },
};

const Honda = {
  name: "CRV",
  type: "SUV",
  mode: "GAS",
  model: 2022,
};

/**
 * Call Polyfill
 */

Vehicle.print.call(Honda, Honda.name, Honda.model); // defined function

Function.prototype.myCall = function (ctx, ...args) {
  ctx.fn = this;
  ctx.fn(...args);
};

Vehicle.print.myCall(Honda, Honda.name, Honda.model); // Call Polyfill function

/**
 * Apply Polyfill
 */

Vehicle.print.apply(Honda, [Honda.name, Honda.model]); // defined function

Function.prototype.myApply = function (ctx, argsArray) {
  ctx.fn = this;
  ctx.fn(...argsArray);
};

Vehicle.print.myApply(Honda, [Honda.name, Honda.model]); // Apply Polyfill function

/**
 * Bind Polyfill
 */

let fn = Vehicle.print.bind(Honda, Honda.name, Honda.model);
fn();

Function.prototype.myBind = function (ctx, ...args) {
  ctx.fn = this;
  return function () {
    ctx.fn(...args);
  };
};

let fn1 = Vehicle.print.myBind(Honda, Honda.name, Honda.model); // Bind Polyfill function
fn1();
