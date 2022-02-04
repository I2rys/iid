//Dependencies
const Axios = require("axios")

//Main
async function is_disposable(email = String = "example@gmail.com"){
    var response = await Axios({
        method: "GET",
        url: `https://open.kickbox.com/v1/disposable/${email}`
    })

    response = response.data

    return response.disposable
}

//Exporter
module.exports = {
    is_disposable
}