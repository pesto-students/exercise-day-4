/* eslint-disable no-undef, arrow-body-style */

const {
  slasher,
  chunkArrayInGroups,
  findElement,
  dropElements,
  updateInventory,
  smallestCommons,
  truthCheck,
  orbitalPeriod,
  keys,
  values,
  mapObject,
  pairs,
  invert,
  defaults,
  User,
} = require('../src');

describe('truthCheck', () => {
  test('should return the correct boolean', () => {
    expect(truthCheck([{
      user: 'Tinky-Winky',
      sex: 'male',
    }, {
      user: 'Dipsy',
      sex: 'male',
    }, {
      user: 'Laa-Laa',
      sex: 'female',
    }, {
      user: 'Po',
      sex: 'female',
    }], sex)).toBe(true);
    expect(truthCheck([{
      user: 'Tinky-Winky',
      sex: 'male',
    }, {
      user: 'Dipsy',
    }, {
      user: 'Laa-Laa',
      sex: 'female',
    }, {
      user: 'Po',
      sex: 'female',
    }], sex)).toBe(false);
    expect(truthCheck([{
      user: 'Tinky-Winky',
      sex: 'male',
      age: 0,
    }, {
      user: 'Dipsy',
      sex: 'male',
      age: 3,
    }, {
      user: 'Laa-Laa',
      sex: 'female',
      age: 5,
    }, {
      user: 'Po',
      sex: 'female',
      age: 4,
    }], 'age')).toBe(false);
    expect(truthCheck([{
      name: 'Pete',
      onBoat: true,
    }, {
      name: 'Repeat',
      onBoat: true,
    }, {
      name: 'FastFoward',
      onBoat: null,
    }], 'onBoat')).toBe(false);
    expect(truthCheck([{
      name: 'Pete',
      onBoat: true,
    }, {
      name: 'Repeat',
      onBoat: true,
      alias: 'Repete',
    }, {
      name: 'FastFoward',
      onBoat: true,
    }], 'onBoat')).toBe(true);
    expect(truthCheck([{
      single: 'yes',
    }], 'single')).toBe(true);
    expect(truthCheck([{
      single: '',
    }, {
      single: 'double',
    }], 'single')).toBe(false);
  });
});

describe('slasher', () => {
  test('should return the correct output', () => {
    expect(slasher([1, 2, 3], 2)).toEqual([3]);
    expect(slasher([1, 2, 3], 0)).toEqual([1, 2, 3]);
    expect(slasher([1, 2, 3], 9)).toEqual([]);
    expect(slasher(['burgers', 'fries', 'shake'], 1)).toEqual(['fries', 'shake']);
    expect(slasher([1, 2, 'chicken', 3, 'potatoes', 'cheese', 4], 5)).toEqual(['cheese', 4]);
  });
});

describe('findElement', () => {
  test('should return the correct output', () => {
    expect(findElement([1, 3, 5, 8, 9, 10], (num) => {
      return num % 2 === 0;
    })).toBe(8);
    expect(findElement([1, 3, 5, 9], (num) => {
      return num % 2 === 0;
    })).toEqual(undefined);
  });
});

describe('dropElements', () => {
  test('should return the correct output', () => {
    expect(dropElements([1, 2, 3, 4], (n) => {
      return n >= 3;
    })).toEqual([3, 4]);
    expect(dropElements([0, 1, 0, 1], (n) => {
      return n === 1;
    })).toEqual([1, 0, 1]);
    expect(dropElements([1, 2, 3, 4], (n) => {
      return n > 5;
    })).toEqual([]);
    expect(dropElements([1, 2, 3, 7, 4], (n) => {
      return n > 3;
    })).toEqual([7, 4]);
    expect(dropElements([1, 2, 3, 9, 2], (n) => {
      return n > 2;
    })).toEqual([3, 9, 2]);
  });
});

describe('updateInventory', () => {
  test('should return an array of particular length', () => {
    expect(updateInventory([
      [21, 'Bowling Ball'],
      [2, 'Dirty Sock'],
      [1, 'Hair Pin'],
      [5, 'Microphone'],
    ], [
      [2, 'Hair Pin'],
      [3, 'Half-Eaten Apple'],
      [67, 'Bowling Ball'],
      [7, 'Toothpaste'],
    ])).toBe(6);
  });
  test('should return correct output', () => {
    expect(updateInventory([
      [21, 'Bowling Ball'],
      [2, 'Dirty Sock'],
      [1, 'Hair Pin'],
      [5, 'Microphone'],
    ], [
      [2, 'Hair Pin'],
      [3, 'Half-Eaten Apple'],
      [67, 'Bowling Ball'],
      [7, 'Toothpaste'],
    ]))
      .toEqual([
        [88, 'Bowling Ball'],
        [2, 'Dirty Sock'],
        [3, 'Hair Pin'],
        [3, 'Half-Eaten Apple'],
        [5, 'Microphone'],
        [7, 'Toothpaste'],
      ]);

    expect(updateInventory([
      [21, 'Bowling Ball'],
      [2, 'Dirty Sock'],
      [1, 'Hair Pin'],
      [5, 'Microphone'],
    ], []))
      .toEqual([
        [21, 'Bowling Ball'],
        [2, 'Dirty Sock'],
        [1, 'Hair Pin'],
        [5, 'Microphone'],
      ]);

    expect(updateInventory([], [
      [2, 'Hair Pin'],
      [3, 'Half-Eaten Apple'],
      [67, 'Bowling Ball'],
      [7, 'Toothpaste'],
    ]))
      .toEqual([
        [67, 'Bowling Ball'],
        [2, 'Hair Pin'],
        [3, 'Half-Eaten Apple'],
        [7, 'Toothpaste'],
      ]);

    expect(updateInventory([
      [0, 'Bowling Ball'],
      [0, 'Dirty Sock'],
      [0, 'Hair Pin'],
      [0, 'Microphone'],
    ], [
      [1, 'Hair Pin'],
      [1, 'Half-Eaten Apple'],
      [1, 'Bowling Ball'],
      [1, 'Toothpaste'],
    ]))
      .toEqual([
        [1, 'Bowling Ball'],
        [0, 'Dirty Sock'],
        [1, 'Hair Pin'],
        [1, 'Half-Eaten Apple'],
        [0, 'Microphone'],
        [1, 'Toothpaste'],
      ]);
  });
});

describe('smallestCommons', () => {
  test('should return a number', () => {
    expect(typeof smallestCommons([1, 5])).toEqual('number');
  });
  test('should should return the correct output', () => {
    expect(smallestCommons([1, 5])).toBe(60);
    expect(smallestCommons([5, 1])).toBe(60);
    expect(smallestCommons([1, 13])).toBe(360360);
    expect(smallestCommons([23, 18])).toBe(6056820);
  });
});

describe('chunkArrayInGroups', () => {
  test('should return the correct output', () => {
    expect(chunkArrayInGroups(['a', 'b', 'c', 'd'], 2)).toEqual([
      ['a', 'b'],
      ['c', 'd'],
    ]);
    expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)).toEqual([
      [0, 1, 2, 3],
      [4, 5],
    ]);
    expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)).toEqual([
      [0, 1, 2],
      [3, 4, 5],
      [6],
    ]);
    expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)).toEqual([
      [0, 1, 2, 3],
      [4, 5, 6, 7],
      [8],
    ]);
  });
});

describe('orbitalPeriod', () => {
  test('should return correct output', () => {
    expect(orbitalPeriod([{
      name: 'sputnik',
      avgAlt: 35873.5553,
    }])).toEqual([{
      name: 'sputnik',
      orbitalPeriod: 86400,
    }]);
    expect(orbitalPeriod([{
      name: 'iss',
      avgAlt: 413.6,
    }, {
      name: 'hubble',
      avgAlt: 556.7,
    }, {
      name: 'moon',
      avgAlt: 378632.553,
    }]))
      .toEqual([{
        name: 'iss',
        orbitalPeriod: 5557,
      }, {
        name: 'hubble',
        orbitalPeriod: 5734,
      }, {
        name: 'moon',
        orbitalPeriod: 2377399,
      }]);
  });
});

describe('objects', () => {
  describe('keys', () => {
    it('should return an array', () => {
      const obj = {
        hi: 'hi',
      };
      const result = keys(obj);
      expect(Array.isArray(result)).toBe(true);
    });
    it('should return an array of strings that correspond with the object\'s properties', () => {
      const obj = {
        hi: 'hi',
        there: 'there',
        JSFOREVER: null,
      };
      const result = keys(obj);
      expect(result).toEqual(['hi', 'there', 'JSFOREVER']);
    });
  });

  describe('values', () => {
    it('should return an array', () => {
      const obj = {
        hi: 'hi',
      };
      const result = values(obj);
      expect(Array.isArray(result)).toBe(true);
    });
    it('should return an array of strings that correspond with the object\'s values', () => {
      const obj = {
        hi: 'hi',
        there: 'there',
        JSFOREVER: null,
      };
      const result = values(obj);
      expect(result).toEqual(['hi', 'there', null]);
    });
  });

  describe('mapObject', () => {
    it('should return an object', () => {
      const obj = {
        hi: 'hi',
      };
      const result = mapObject(obj, () => (null));
      expect(Array.isArray(result)).toBe(false);
      expect(typeof result).toBe('object');
    });
    it('should return an object with all of its values properly mapped', () => {
      const obj = {
        x: 2,
        y: 5,
        z: 10,
      };
      const result = mapObject(obj, n => (n * n));
      expect(result).toEqual({ x: 4, y: 25, z: 100 });
    });
  });

  describe('pairs', () => {
    it('should return an array of arrays', () => {
      const obj = {
        hi: 'hi',
      };
      const result = pairs(obj);
      expect(Array.isArray(result)).toBe(true);
      expect(Array.isArray(result[0])).toBe(true);
    });
    it('should return key, value pairs that properly match the object\'s properties', () => {
      const obj = {
        x: 2,
        y: 5,
        z: 10,
      };
      const result = pairs(obj);
      expect(result).toEqual([['x', 2], ['y', 5], ['z', 10]]);
    });
  });

  describe('invert', () => {
    it('should return an object', () => {
      const obj = {
        hi: 'hi',
      };
      const result = invert(obj);
      expect(Array.isArray(result)).toBe(false);
      expect(typeof result).toBe('object');
    });
    it('should return an object where the keys and values have been switched', () => {
      const obj = {
        x: 'hi',
        y: 'sup',
        z: 'yo',
      };
      const result = invert(obj);
      expect(result).toEqual({ hi: 'x', sup: 'y', yo: 'z' });
    });
  });

  describe('defaults', () => {
    it('should return an object', () => {
      const obj = {
        hi: 'hi',
      };
      const result = defaults(obj, {});
      expect(Array.isArray(result)).toBe(false);
      expect(typeof result).toBe('object');
    });
    it('should return an object where defaults have been filled in', () => {
      const obj = {
        x: 'hi',
      };
      const defaultObj = {
        banana: true,
        bubblegum: false,
      };
      const result = defaults(obj, defaultObj);
      expect(result).toEqual({ x: 'hi', banana: true, bubblegum: false });
    });
    it('should not overwrite existing defined properties with defaults', () => {
      const obj = {
        x: 'hi',
      };
      const defaultObj = {
        banana: true,
        x: false,
      };
      const result = defaults(obj, defaultObj);
      expect(result).toEqual({ x: 'hi', banana: true });
    });
  });
});

describe('User', () => {
  test('should return an object with the passed username and password when called with new', () => {
    const me = new User('Pesto', 'iamabeast');
    expect(me).toEqual({
      username: 'Pesto',
      password: 'iamabeast',
    });
  });

  test('should have a method that checks password and returns correct boolean result', () => {
    const me = new User('Pesto', 'iamabeast');
    const result1 = me.checkPassword('iamabeast');
    const result2 = me.checkPassword('iamnotabeast');
    expect(result1).toBe(true);
    expect(result2).toBe(false);
  });
});

/* eslint-enable no-undef */
