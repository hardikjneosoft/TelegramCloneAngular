const mysql = require("mysql2/promise")
let connection;
async function connectDB() {
  try {
    connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "hjhf1729",
      database: "Telegram",
    });
    console.log("connected")
    return connection
  } catch (error) {
    console.error("Database connection error:", error);
    throw error;
  }
};

async function userExists(phone_number) {
  const sql = `Select * FROM Users WHERE phonenumber = ?;`
  const  [result] = await connection.query(sql,[phone_number])
  return result.length
}

async function createUser(fname, lname, username, phonenumber) {
  const sql = `
    INSERT INTO Users (fname, lname, username, phonenumber)
    VALUES (?, ?, ?, ?)
  `;
  const [result] = await connection.query(sql, [fname, lname, username, phonenumber]);
  return result.insertId;
}

async function getAllUsers(){
const sql = `select * from Users`;
const [rows] = await connection.query(sql);
return rows;
}

async function getUserById(userid) {
  const sql = `
    SELECT * FROM Users WHERE userid = ?
  `;
  const [rows] = await connection.query(sql, [userid]);
  return rows[0];
}

async function getFriends(userid){
  const sql = `
  select userid,roomid from Rooms where roomid in (Select roomid from Rooms where userid = ?)
  `
  const [rows] = await connection.query(sql, [userid]);
  return rows
}

async function getMessages(roomid){
  const sql = `select * from Messages where roomid=?`
  const [rows]= await connection.query(sql,[roomid])
  return rows
}

async function updateUser(fields) {
  
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

async function deleteUserById(userid) {
  const sql = `
    DELETE FROM Users WHERE userid = ?
  `;
  const [result] = await connection.query(sql, [userid]);
  return result.affectedRows;
}

async function showImage(){
  const query = 'SELECT profile_pic_url FROM Users WHERE userid = 787878787';
  const results = await connection.query(query)

    const imageData = results[0][0]['profile_pic_url']
    console.log(imageData)
    return imageData
}

async function getRoomMessages(roomId){
  const query= `Select * from Messages where room_id = ?`
  const [result] = await connection.query(sql,roomId)
  return result.affectedRows
}

async function insertMessage(room_id,sender,content){
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
updateUserLastSeen,
connectDB,
userExists,
getMessages,
getFriends,
connection
}




// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));


// const PORT = 3000;

// app.get("/", async (req, res) => {
//     console.log("hi");
//   const data = await getAllUsers(mysqlDB);
//   res.json(data);
// });

// app.get("/getById", async (req, res) => {
// const id = req.query.id;
// console.log(req.body);

// const data = await getUserById(mysqlDB,id);
// res.json(data)
// })








// app.get('/image/', async (req, res) => {
//     const imageData = await showImage(mysqlDB)
//     const imageType = 'image/jpeg'

//     // Set the appropriate content type and send the image data
//     res.setHeader('Content-Type', imageType);
//     res.send(imageData);
//   });





// app.post("/",upload.single('pfp'),async (req, res) => {
//   const { id, fname,lname,username,phone,password} = req.body;
//   // console.log(id,fname,lname,username,phone,password);
//   console.log(req.file.mimetype)
//   const data = await createUser(mysqlDB, id, fname,lname,username,phone,password,req.file.buffer);
//   res.json(data);
// });

// app.post("/delete", async (req, res) => {
//   const { id } = req.body;
//   console.log(id);
  
//   const data = await deleteUserById(mysqlDB, id);
//   res.json(data);
// });

// app.post("/update", async (req, res) => {
//   let fields  = {
//     userid : req.body.id,
//     fname:req.body.fname,
//     lname:req.body.lname,
//     username:req.body.username,
//     phonenumber:req.body.phone,
//     password_hash:req.body.password
//   };

//   const data = await updateUser(mysqlDB,fields);
//   res.json(data);
// });


// app.listen(PORT, async () => {
//   mysqlDB = await connectDB()

//   console.log('Server running on port:',PORT);
// });


  