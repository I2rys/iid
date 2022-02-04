//Dependencies
const IID = require("../index")

//Main
void async function Main(){
    const result = await IID.is_disposable()

    console.log(result)
}()