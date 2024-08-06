import { expect } from "chai";
import Calculator from "../src/calculator";
import Sinon = require("sinon");

describe("Spy Stub and Mock", () => {
  let cal: Calculator;
  let spy: Sinon.SinonSpy;
  let stub: Sinon.SinonStub;
  let mock: Sinon.SinonMock;
  before(() => {
    console.log("Before ");
    cal = new Calculator();
  });
  beforeEach(() => {
    console.log("beforeEach ");
  });

  afterEach(() => {
    console.log("afterEach ");
    console.log("afterEach ");
    if (spy) spy.restore();
    if (stub) stub.restore();
    if (mock) mock.restore();
  });
  after(() => {
    console.log("after ");
  });

  describe("addition test suit", () => {
    it("Should return sum", () => {
      //arrange
      spy = Sinon.spy(cal, "add");
      mock = Sinon.mock(cal);
      stub = Sinon.stub(cal, "getRandomValue").returns(2);
      let expectation = mock
        .expects("logMessage")
        .exactly(1)
        .withArgs("Logging add function");
      //act
      const res = cal.add(2, 3);
      //assertion
      expect(res).to.equal(5);
      expect(spy.calledOnceWith(2, 3)).to.be.true;
      mock.restore();
      expectation.verify();
      spy.restore();
    });
  });

  describe("subtraction test suit", () => {
    it("Should return sub", () => {
      //arrange
      spy = Sinon.spy(cal, "subtract");
      mock = Sinon.mock(cal);
      let expectation = mock
        .expects("logMessage")
        .exactly(1)
        .withArgs("Logging subtract function");
      //act
      const res = cal.subtract(5, 2);
      //assert
      expect(res).to.equal(3);
      expect(spy.calledOnceWith(5, 2)).to.be.true;
      mock.restore();
      expectation.verify();
      spy.restore();
    });
  });
});
