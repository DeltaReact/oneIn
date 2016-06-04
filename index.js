"use strict";

let oneIn = {
  "two": function () {
    return (Math.random() <= (1 / 2));
  },
  "three": function () {
    return (Math.random() <= (1 / 3));
  },
  "five": function () {
    return (Math.random() <= (1 / 5));
  },
  "ten": function () {
    return (Math.random() <= (1 / 10));
  },
  "x": function (x) {
    return (Math.random() <= (1 / x));
  }
};
module.exports = oneIn;