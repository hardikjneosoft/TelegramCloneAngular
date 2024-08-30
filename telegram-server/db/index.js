const sql = require('./sql-api')


async function initDB(){
    await sql.connectDB()
}

module.exports = {
    initDB,
    sql
}