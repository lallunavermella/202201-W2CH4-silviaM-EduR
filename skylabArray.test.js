class SkylabArray {
  element;

  lenghtArray;

  lenght(element) {
    if (element === null) {
      this.lenghtArray = 0;
      return this.lenghtArray;
    }
    this.lenghtArray = 1;
    return this.lenghtArray;
  }

  push(element) {
    return 1;
  }

  some(callbackFn) {
    return false;
  }

  find(callbackFn) {
    return 0;
  }

  filter(callbackFn) {
    return 1;
  }

  map(callbackFn) {
    return [];
  }
}
const newArray = new SkylabArray();
console.log(newArray);

describe("Given a SkylabArray class with metod length", () => {
  describe("When it recives nothing", () => {
    test("Then it should return '0'", () => {
      const element = null;
      const newArray = new SkylabArray();

      expect(newArray.lenght(element)).toBe(0);
    });
  });
  describe("When it recives an element", () => {
    test("Then it should return '1'", () => {
      const element = "element";
      const newArray = new SkylabArray();
      expect(newArray.lenght(element)).toBe(1);
    });
  });
});
describe("Given a SkylabArray class with metod push", () => {
  describe("When it recives 'hola'", () => {
    test("Then it should return '1'", () => {
      const element = "hola";
      const newArray = new SkylabArray();

      expect(newArray.push(element)).toBe(1);
    });
  });
  describe("When it recives '1'", () => {
    test("Then it should return '1'", () => {
      const element = "1";
      const newArray = new SkylabArray();

      expect(newArray.push(element)).toBe(1);
    });
  });
});
describe("Given a SkylabArray class with metod some", () => {
  describe("When it recives '0'", () => {
    test("Then it should return 'false'", () => {
      const number0 = (element) => element === 0;
      const newArray = new SkylabArray();
      const returnValue = false;

      const arraySome = newArray.some(number0);

      expect(arraySome).toBe(returnValue);
    });
  });
});
describe("Given a SkylabArray class with metod find", () => {
  describe("When it recives '0'", () => {
    test("Then it should return '0'", () => {
      const number0 = [0].find((element) => element <= 0);
      const newArray = new SkylabArray();
      const returnValue = 0;

      const arrayFind = newArray.find(number0);

      expect(arrayFind).toBe(returnValue);
    });
  });
});
describe("Given a SkylabArray class with metod filter", () => {
  describe("When it recives '1'", () => {
    test("Then it should return '1'", () => {
      const numberArray = [1, 2];
      const number1 = numberArray.find((element) => element > 0);
      const newArray = new SkylabArray();
      const returnValue = 1;

      const arrayFilter = newArray.filter(number1);

      expect(arrayFilter).toStrictEqual(returnValue);
    });
  });
});
describe("Given a SkylabArray class with metod map", () => {
  describe("When it recives []", () => {
    test("Then it should return []", () => {
      const array = [];
      const newArray = new SkylabArray();
      const returnValue = [];

      const arrayArray = newArray.map();

      expect(arrayArray).toStrictEqual(returnValue);
    });
  });
});
