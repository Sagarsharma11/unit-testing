class Calculator{
    add(a:number, b:number){
        this.logMessage("Logging add function")
        const c = this.getRandomValue();
        // return a+b+c
        return a+b
    }
    subtract(a:number, b:number){
        this.logMessage("Logging subtract function")
        return a-b
    }
    multiply(a:number, b:number){
        return a*b
    }
    divide(a:number, b:number){
        if(b === 0)
            throw new Error("Can't divide by zero")
        return a/b
    }
    getRandomValue():number{
        return Math.floor(Math.random()*10+1)
    }
    logMessage(message:string){
        console.log(message)
    }

    asyncFunctionPromise(){
        return new Promise((resolve,rej)=>{
            setTimeout(()=>{
                resolve(4)
            },1000)
        })
    }
}

export default Calculator