async function createUser(connection,id,fname, lname, username, phonenumber, passwordHash,pfp) {
    const sql = `
      INSERT INTO Users (userid,fname, lname, username, phonenumber, password_hash,profile_pic_url)
      VALUES (?, ?, ?, ?, ?,?,?)
    `;
    const [result] = await connection.query(sql, [id,fname, lname, username, phonenumber, passwordHash,pfp]);
    return result.insertId;
  }

async function getAllUsers(connection){
  const sql = `select * from Users`;
  const [rows] = await connection.query(sql);
  return rows;
}
  
  async function getUserById(connection,userid) {
    const sql = `
      SELECT * FROM Users WHERE userid = ?
    `;
    const [rows] = await connection.query(sql, [userid]);
    return rows[0];
  }
  
  async function updateUser(connection,fields) {
    
    // const clause= Object.keys(fields).map(field=>` ${field}= ${fields[field]}`).join(', ')
    const sql = 'UPDATE Users SET ? WHERE userid = ?';
    console.log(sql)
    const [result] = await connection.query(sql,[fields,fields['userid']]);
    return result.affectedRows;
  }

  async function updateUserLastSeen(userid, lastSeen) {

    const sql = `
      UPDATE Users SET last_seen = ? WHERE userid = ?
    `;
    const [result] = await connection.query(sql, [lastSeen, userid]);
    return result.affectedRows;
  }
  
  async function deleteUserById(connection,userid) {
    const sql = `
      DELETE FROM Users WHERE userid = ?
    `;
    const [result] = await connection.query(sql, [userid]);
    return result.affectedRows;
  }
  
  async function showImage(connection) {
    const query = 'SELECT profile_pic_url FROM Users WHERE userid = 787878787';
    const results = await connection.query(query)

      const imageData = results[0][0]['profile_pic_url']
      console.log(imageData)
      return imageData
  }

  async function getRoomMessages(connection,roomId){
    const query= `Select * from Messages where room_id = ?`
    const [result] = await connection.query(sql,roomId)
    return result.affectedRows
  }
  
  async function insertMessage(connection,room_id,sender,content){
    const query = `insert into Messages(room_id,sender,content) values(?,?,?)`
    const [result] = await connection.query.sql(sql,room_id,sender,content)
  }


module.exports = {
  createUser,
  deleteUserById,
  getUserById,
  showImage,
  getAllUsers,
  updateUser,
  getRoomMessages,
  insertMessage,
  updateUserLastSeen
}