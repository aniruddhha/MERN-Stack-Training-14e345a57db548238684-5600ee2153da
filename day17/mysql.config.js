const typeorm = require("typeorm");
const EntitySchema = typeorm.EntitySchema;

module.exports = typeorm.createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "password",
    database: "empdb",
    synchronize: true,
    entities: [
        new EntitySchema(require('./post.json')),
    ]
})