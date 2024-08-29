const mysql = require("mysql2/promise")

const multer = require('multer')
const storage = multer.memoryStorage()
upload = multer({storage:storage})

const express = require("express");
const {
  getAllUsers,
  createUser,
  deleteUserById,
  updateUser,
  getUserById,
  showImage
} = require("./MySQLdemo");
const { connection } = require("mongoose");

let mysqlDB;

async function connectDB() {
  try {
    let connection = await mysql.createConnection({
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






const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const PORT = 3000;

app.get("/", async (req, res) => {
    console.log("hi");
  const data = await getAllUsers(mysqlDB);
  res.json(data);
});

app.get("/getById", async (req, res) => {
const id = req.query.id;
console.log(req.body);

const data = await getUserById(mysqlDB,id);
res.json(data)
})








app.get('/image/', async (req, res) => {
    const imageData = await showImage(mysqlDB)
    const imageType = 'image/jpeg'

    // Set the appropriate content type and send the image data
    res.setHeader('Content-Type', imageType);
    res.send(imageData);
  });





app.post("/",upload.single('pfp'),async (req, res) => {
  const { id, fname,lname,username,phone,password} = req.body;
  // console.log(id,fname,lname,username,phone,password);
  console.log(req.file.mimetype)
  const data = await createUser(mysqlDB, id, fname,lname,username,phone,password,req.file.buffer);
  res.json(data);
});

app.post("/delete", async (req, res) => {
  const { id } = req.body;
  console.log(id);
  
  const data = await deleteUserById(mysqlDB, id);
  res.json(data);
});

app.post("/update", async (req, res) => {
  let fields  = {
    userid : req.body.id,
    fname:req.body.fname,
    lname:req.body.lname,
    username:req.body.username,
    phonenumber:req.body.phone,
    password_hash:req.body.password
  };

  const data = await updateUser(mysqlDB,fields);
  res.json(data);
});


app.listen(PORT, async () => {
  mysqlDB = await connectDB()

  console.log('Server running on port:',PORT);
});
