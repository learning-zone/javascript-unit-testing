export class MathLib {
  add(a, b): Number {
    return a + b;
  }

  multiply(a, b): Number {
    return a * b;
  }

  fibonacci(length): Number[] {
    const sequence = [0, 1];
    for (let i = 2; i <= length; ++i) {
      sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence;
  };
}
