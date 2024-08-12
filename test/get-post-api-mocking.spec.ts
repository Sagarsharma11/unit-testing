import { expect } from "chai";
import Calculator from "../src/calculator"
import nock from "nock";
const baseUrl = "https://jsonplaceholder.typicode.com"
describe("Api Testing",()=>{
    it("should make a Get request from api", async ()=>{
        //arrange
        const cal = new Calculator();
        const mockedUseResponse = {id:1 , name:"Sagar Sharma"}
        nock(baseUrl).get("/users/1").reply(200, mockedUseResponse)
        //act
        const res = await cal.getUser();
        //assert
        expect(res.status).to.equal(200);
        expect(res.data.id).to.equal(1);
        
    })
    it("should make a Post request from api", async ()=>{
        //arrange
        const cal = new Calculator();
        const userPayload = {
            "name": "Jimmy Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
            }
        }
        const expectedUserResponse = {
            "name": "Jimmy Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
            },
            "id":11
        }
        nock(baseUrl).post("/users", userPayload)
        .reply(201, expectedUserResponse)
        //act
        const res = await cal.saveUser(userPayload);
        //assert
        expect(res.status).to.equal(201);
        expect(res.data.id).to.equal(11);
        
    })
    after(()=>{
        nock.cleanAll();
    })
})