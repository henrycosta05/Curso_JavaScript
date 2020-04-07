const connection = require('./connection');

const model = require('./model');

console.log('index.js', connection.time);

const run = async() => {
    const conn = await connection.Conn
    console.log('conn index.js', conn)
}

run()