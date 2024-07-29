import { expect } from "chai";
import Calculator from "../src/calculator";

describe("Test Calculator class", () => {
  it("Should return sum", () => {
    //arrange
    const cal = new Calculator();
    //act
    const res = cal.add(2, 3);
    //assertion
    expect(res).to.equal(5);
  });

  it("Should return sub", () => {
    //arrange
    const cal = new Calculator();
    //act
    const res = cal.subtract(5, 2);
    //assert
    expect(res).to.equal(3);
  });
  it("Should be multiply", () => {
    //arrange
    const cal = new Calculator();
    //act
    const res = cal.multiply(5, 2);
    //assert
    expect(res).to.equal(10);
  });
  it("Should be divide", () => {
    //arrange
    const cal = new Calculator();
    //act
    const res = cal.divide(6, 2);
    //assert
    expect(res).to.equal(3);
  });
  it("Should throw error while divide by zero", () => {
    //arrange
    const cal = new Calculator();
    //assert
    expect(()=>cal.divide(10,0)).to.throw("Can't divide by zero");
  });
});
