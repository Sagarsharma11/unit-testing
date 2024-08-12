import { assert, expect, should } from "chai";

describe("assert style", () => {
  it("EXPECT assertion style", () => {
    const name: string = "Kumar";
    const age: number = 30;
    const objData: Object = {
      name: "Kumar",
      age: 30,
    };
    const arrData: Array<number> = [1, 2, 3];
    const boolean: boolean = true;
    //string
    expect(name).to.be.ok;
    expect(name).to.be.equal("Kumar");
    expect(name).to.be.a("string");
    //number
    expect(age).to.be.ok;
    expect(age).to.be.equal(30);
    expect(age).to.be.a("number");
    //object
    expect(objData).to.be.ok;
    expect(objData).to.be.a("object");
    expect(objData).to.have.property("name").equal("Kumar");
    expect(objData).to.have.property("age").equal(30);
    // array
    expect(arrData).to.be.ok;
    expect(arrData).to.have.lengthOf(3);
    expect(arrData).to.have.lengthOf(3).that.include(2);
    expect(arrData).that.be.a("array");
    //boolean
    expect(boolean).to.be.ok;
    expect(boolean).to.be.a("boolean");
    expect(boolean).to.be.true;
  });

  it("SHOULD assertion style", () => {
    should();
    const name: string = "Kumar";
    const age: number = 30;
    const objData: Object = {
      name: "Kumar",
      age: 30,
    };
    const arrData: Array<number> = [1, 2, 3];
    const boolean: boolean = true;
    //string
    name.should.to.be.ok;
    name.should.to.be.equal("Kumar");
    name.should.to.be.a("string");
    //number
    age.should.to.be.ok;
    age.should.to.be.equal(30);
    age.should.to.be.a("number");
    //object
    objData.should.to.be.ok;
    objData.should.to.be.a("object");
    objData.should.to.have.property("name").equal("Kumar");
    objData.should.to.have.property("age").equal(30);
    // array
    arrData.should.to.be.ok;
    arrData.should.to.have.lengthOf(3);
    arrData.should.to.have.lengthOf(3).that.include(2);
    arrData.should.that.be.a("array");
    //boolean
    boolean.should.to.be.ok;
    boolean.should.to.be.a("boolean");
    boolean.should.to.be.true;
  });

  it("ASSERT assertion style", () => {
    should();
    const name: string = "Kumar";
    const age: number = 30;
    const objData: Object = {
      name: "Kumar",
      age: 30,
    };
    const arrData: Array<number> = [1, 2, 3];
    const boolean: boolean = true;
    //string
    assert.isOk(name);
    assert.equal(name, "Kumar");
    assert.typeOf(name, "string");
    //number
    assert.isOk(age);
    assert.equal(age, 30);
    assert.typeOf(age, "number")

    //object
    assert.typeOf(objData, "object");
    assert.deepEqual(objData, {
      name: "Kumar",
      age: 30,
    });
    // array
    assert.typeOf(arrData, "array");
    assert.deepEqual(arrData, [1, 2, 3]);
    //boolean
    assert.typeOf(boolean, "boolean");
    assert.equal(boolean, true);
  });
});
