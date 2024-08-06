import { expect } from "chai";
import Calculator from "../src/calculator";
describe.only("async await and promise test suit", ()=>{
    let cal: Calculator;
    it("Should work with async and await",async()=>{
        //arrange
        cal = new Calculator();
        //act
        const result = await cal.asyncFunctionPromise();
        //assert
        expect(result).to.equal(4)
    })

    it("Should work with async and await",()=>{
        //arrange
        cal = new Calculator();
        //act and assert
        cal.asyncFunctionPromise().then((result)=>{
            expect(result).to.equal(4)
        })
      
    })
})