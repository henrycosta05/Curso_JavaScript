const axios = require('axios')
const Conn = axios
                    .get('https://httpbin.org/uuid')
                    .then(data =>{
                        return data.data
                    })
module.exports = {
    Conn,
    time: new Date()
}