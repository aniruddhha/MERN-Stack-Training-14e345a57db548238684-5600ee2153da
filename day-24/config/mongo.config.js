const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

module.exports = {
    connect: async function () {
        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db('test');
        return db;
    },
    disconnect: function () {
        client.close()
    }
}
