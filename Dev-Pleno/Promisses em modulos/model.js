setTimeout(async() => {
    const connection = require('./connection')
    const conn = await connection.con
    console.log('index.js', connection.time)
    console.log('conn model.js',conn)
}, 2000)
