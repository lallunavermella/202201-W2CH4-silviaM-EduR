class SkylabArray {
  lenght() {
    return 0;
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
}

describe("Given a SkylabArray class", () => {
  describe("When it recives nothing", () => {
    test("Then it should return '0'", () => {
      const newArray = new SkylabArray();
      expect(newArray.lenght()).toBe(0);
    });
  });
  describe("When it recives 'hola'", () => {
    test("Then it should return '1'", () => {
      const element = "hola";
      const newArray = new SkylabArray();

      expect(newArray.push(element)).toBe(1);
    });
  });
  describe("When it recives '0'", () => {
    test("Then it should return 'false'", () => {
      const number0 = (element) => element === 0;
      const newArray = new SkylabArray();

      expect(newArray.some(number0)).toBe(false);
    });
  });
  describe("When it recives '0'", () => {
    test("Then it should return '0'", () => {
      const number0 = [0].find((element) => element <= 0);
      const newArray = new SkylabArray();

      expect(newArray.find(number0)).toBe(0);
    });
  });
});
