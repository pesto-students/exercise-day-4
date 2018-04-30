const {
  squareNumbersArray,
  SavingsAccount,
  requestValidator,
  curry,
  memoize,
} = require('../src');

/* eslint-disable arrow-body-style   */
describe('squareNumbersArray', () => {
  test('should throw an error if array of numbers is not passes as argument', () => {
    const myArray = [1, 2, 'string', 4];
    expect(() => squareNumbersArray(...myArray)).toThrow('My custom error');
  });
});

describe('SavingsAccount', () => {
  test('SavingsAccount constructs the proper object', () => {
    const myAccount = {
      _accountNumber: '123456',
      _email: 'kohli@gmail.com',
      _firstName: 'Virat',
      _lastName: 'Kohli',
      products: [],
    };
    const actualAccount = new SavingsAccount('123456', 'kohli@gmail.com', 'Virat', 'Kohli');
    expect(actualAccount).toEqual(myAccount);
  });

  test('should throw error if account number length is not equal to 6', () => {
    expect(() => new SavingsAccount('123', 'kohli@gmail.com', 'Virat', 'Kohli')).toThrow('Account Number must be a 6-digit number');
  });

  test('should throw error if account number length is not equal to 6', () => {
    expect(() => new SavingsAccount('123456', 'kohli@', 'Virat', 'Kohli')).toThrow('Invalid e-mail');
  });

  test('should throw error if account number length is not equal to 6', () => {
    expect(() => new SavingsAccount('123456', 'kohli@gmail.com', 'V', 'Kohli')).toThrow('First name must be between 3 and 20 characters long');
  });

  test('should throw error if account number length is not equal to 6', () => {
    expect(() => new SavingsAccount('123456', 'kohli@gmail.com', 'Virat', 'Kohli5')).toThrow('Last name must contain english alphabets only');
  });
});

describe('requestValidator', () => {
  const validRequest = {
    method: 'GET',
    uri: 'www.google.com',
    version: 'HTTP/1.1',
    message: '',
  };
  test('should throw error if method is invalid', () => {
    const request = {
      ...validRequest,
      method: 'GIVE',
    };
    expect(() => requestValidator(request)).toThrow('Invalid request header: Invalid Method');
  });

  test('should throw error if url is invalid', () => {
    const request = {
      ...validRequest,
      uri: 'abcd$#@ a',
    };
    expect(() => requestValidator(request)).toThrow('Invalid request header: Invalid URI');
  });

  test('should throw error if message is not present', () => {
    const request = {
      method: 'GET',
      uri: 'google.com',
      version: 'HTTP/0.9',
    };
    expect(() => requestValidator(request)).toThrow('Invalid request header: Invalid Message');
  });

  test('should return the request object as is if it is a valid request body', () => {
    const actual = requestValidator(validRequest);
    expect(validRequest).toBe(actual);
  });
});

describe('curry', () => {
  test('curries the function at least once', () => {
    const add = curry((a, b) => {
      return a + b;
    });
    expect(add(1)(2)).toBe(3);
  });

  test('curries the function even with a single argument', () => {
    const output = curry((n) => {
      return n;
    });
    expect(output(1)).toBe(1);
  });

  test('curries the function until the arguments needed are given at least once', () => {
    const add = curry((a, b, c) => {
      return a + b + c;
    });
    expect(add(1, 2)(3)).toBe(6);
  });

  test('curries the function until the arguments needed are given multiple times', () => {
    const add = curry((a, b, c) => {
      return a + b + c;
    });
    expect(add(1)(2)(3)).toBe(6);
  });

  test("doesn't share state between calls", () => {
    const add = curry((a, b, c) => {
      return a + b + c;
    });
    expect(add(1)(2)(3)).toBe(6);
    expect(add(2)(3)(4)).toBe(9);
  });

  test("doesn't only work with addition", () => {
    const merge = curry((a, b, c) => {
      return [a, b, c].join(', ');
    });
    expect(merge('1')(2)(3)).toBe('1, 2, 3');
  });

  test("doesn't share state between inner calls", () => {
    const add = curry((a, b, c, d) => {
      return a + b + c + d;
    });
    const firstTwo = add(1)(2);
    expect(firstTwo(3)(4)).toBe(10);
    const firstThree = firstTwo(5);
    expect(firstThree(6)).toBe(14);
  });
});


describe('memoize', () => {
  test('should return a function', () => {
    expect(typeof memoize(jest.fn())).toBe('function');
  });

  test('can handle a single argument', () => {
    let called = 0;
    const fib = memoize((n) => {
      called += 1;
      if (n < 2) return n;
      return fib(n - 1) + fib(n - 2);
    });
    fib(10);
    expect(called).toBe(11);
  });

  test('can handle multiple arguments', () => {
    let called = 0;
    const fib = memoize((n, unused) => {
      called += 1;
      if (n < 2) return n;
      return fib(n - 1, unused) + fib(n - 2, unused);
    });
    fib(10, 'x');
    fib(10, 'y');
    expect(called).toBe(22);
  });
});
