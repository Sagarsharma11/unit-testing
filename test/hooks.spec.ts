import { expect } from "chai";
import Calculator from "../src/calculator";

describe.only("Hooks test", () => {
  let cal: Calculator;
  before(() => {
    console.log("Before ");
    cal = new Calculator();
  });
  beforeEach(() => {
    console.log("beforeEach ");
  });

  afterEach(() => {
    console.log("afterEach ");
  });
  after(() => {
    console.log("after ");
  });

  describe("addition test suit", () => {
    it("Should return sum", () => {
      //act
      const res = cal.add(2, 3);
      //assertion
      expect(res).to.equal(5);
    });
  });

  describe("subtraction test suit", () => {
    it("Should return sub", () => {
      //act
      const res = cal.subtract(5, 2);
      //assert
      expect(res).to.equal(3);
    });
  });
});
