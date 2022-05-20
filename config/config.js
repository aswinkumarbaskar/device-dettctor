const env = require("node-env-file");

env(__dirname + "/.env");
const config = {
    port: process.env.PORT,
    dbHost:process.env.dbHost,
    secretKey: process.env.secretkey,
    roles: {
        type1: 1,
        type2: 2,
        type3: 3,
        type4: 4
    }
}

module.exports = { config };