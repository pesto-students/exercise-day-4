const {
  squareNumbersArray,
  SavingsAccount,
  requestValidator,
} = require('../src');

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

