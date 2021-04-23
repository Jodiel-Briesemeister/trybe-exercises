const exercises = require('./exercises');
jest.mock("./exercises");

test("1. Test randomNumber -> check called, return and called times", () => {

  exercises.randomNumber = jest.fn().mockReturnValue(10);

  expect(exercises.randomNumber()).toBe(10);
  expect(exercises.randomNumber).toHaveBeenCalled();
  expect(exercises.randomNumber).toHaveBeenCalledTimes(1);
});

test("2. Test randomNumber -> implementation, check return", () => {
  exercises.randomNumber.mockImplementation((a, b) => a / b);

  expect(exercises.randomNumber(10, 2)).toBe(5);
  expect(exercises.randomNumber).toHaveBeenCalled();
  expect(exercises.randomNumber).toHaveBeenCalledTimes(2);
  expect(exercises.randomNumber).toHaveBeenCalledWith(10, 2);
});

test("3. Test randomNumber -> reset, return mult", () => {
  exercises.randomNumber.mockImplementation((a, b, c) => a * b * c);

  expect(exercises.randomNumber(2, 3, 4)).toBe(24);
  expect(exercises.randomNumber).toHaveBeenCalled();
  expect(exercises.randomNumber).toHaveBeenCalledTimes(3);
  expect(exercises.randomNumber).toHaveBeenCalledWith(2, 3, 4);

  exercises.randomNumber.mockReset()

  exercises.randomNumber.mockImplementation((a) => a * 2);

  expect(exercises.randomNumber(5)).toBe(10);
  expect(exercises.randomNumber).toHaveBeenCalled();
  expect(exercises.randomNumber).toHaveBeenCalledTimes(1);
  expect(exercises.randomNumber).toHaveBeenCalledWith(5);
});

describe('Exercício 4', () => {
  test("4. Test functions upperCase, firstLetter, stringConcat -> implementation, ", () => {
    exercises.upperCase.mockImplementation((str) => str.toLowerCase());
    exercises.firstLetter.mockImplementation((str) => str.slice(-1));
    exercises.stringConcat.mockImplementation((a, b, c) => a.concat(b).concat(c));

    expect(exercises.upperCase("TEST")).toBe("test");
    expect(exercises.upperCase).toHaveBeenCalled();
    expect(exercises.upperCase).toHaveBeenCalledTimes(1);
    expect(exercises.upperCase).toHaveBeenCalledWith("TEST");

    expect(exercises.firstLetter("teste")).toBe("e");
    expect(exercises.firstLetter).toHaveBeenCalled();
    expect(exercises.firstLetter).toHaveBeenCalledTimes(1);
    expect(exercises.firstLetter).toHaveBeenCalledWith("teste");

    expect(exercises.stringConcat("te", "s", "te")).toBe("teste");
    expect(exercises.stringConcat).toHaveBeenCalled();
    expect(exercises.stringConcat).toHaveBeenCalledTimes(1);
    expect(exercises.stringConcat).toHaveBeenCalledWith("te", "s", "te");
  });
})


// test("5. Test functions upperCase, firstLetter, stringConcat -> implementation, ", () => {
  
//   const upper = jest.spyOn(exercises, "upperCase")
//   .mockImplementation((str) => str.toLowerCase());

//   expect(upper("TESTE")).toBe("teste");
//   expect(upper).toHaveBeenCalled();
//   expect(upper).toHaveBeenCalledTimes(2);
//   expect(upper).toHaveBeenCalledWith("TESTE");

//   exercises.upperCase.mockRestore();

//   expect(exercises.upperCase("teste")).toBe("TESTE");
// });

describe("6. Test api", () => {
  afterEach(exercises.apiFunction.mockReset);
  test("testando requisição caso a promisse resolva", async () => {
    exercises.apiFunction.mockResolvedValue("request sucess");

    exercises.apiFunction();
    expect(exercises.apiFunction).toHaveBeenCalled();
    expect(exercises.apiFunction).toHaveBeenCalledTimes(1);
    expect(exercises.apiFunction()).resolves.toBe("request sucess");
    expect(exercises.apiFunction).toHaveBeenCalledTimes(2);
  });

  test("testando requisição caso a promisse seja rejeitada", async () => {
    exercises.apiFunction.mockRejectedValue("request failed");

    expect(exercises.apiFunction).toHaveBeenCalledTimes(0);
    expect(exercises.apiFunction()).rejects.toMatch("request failed");
    expect(exercises.apiFunction).toHaveBeenCalledTimes(1);
  });
});
