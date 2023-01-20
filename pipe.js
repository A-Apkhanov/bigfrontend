const times = (y) =>  (x) => x * y;
const plus = (y) => (x) => x + y;
const subtract = (y) =>  (x) => x - y;
const divide = (y) => (x) => x / y;

function pipe(steps) {
  return function (x) {
    for (let i = 0; i < steps.length; i++ ) {
      const step = steps[i];
      x = step(x);
    }
    return x;
  }
}

pipe([times(2), times(3)]); // x * 2 * 3

pipe([times(2), plus(3), times(4)]); // (x * 2 + 3) * 4

pipe([times(2), subtract(3), divide(4)]); // (x * 2 - 3) / 4
