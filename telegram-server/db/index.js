const {connectDB,getAllUsers} = require('./sql-api')

async function initDB(){
    const connection = await connectDB()
    getAllUsers(connection)
}
initDB()
