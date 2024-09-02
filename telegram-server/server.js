const express = require('express');
const http = require('http');
const {Server} = require('socket.io');
const cors = require('cors');
const app = express();
const server = http.createServer(app);

const db = require('./db')
db.initDB()
const sql = db.sql

const io = new Server(server,{
  cors: {
    origin: "*", // Replace with the origin you want to allow
    methods: ["GET", "POST"],
  }});

const otps={}

app.use(cors({
  origin: '*', 
  methods: ['GET', 'POST'],
  // credentials: true 
}));

app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.get('/', async (req, res) => {
    const users= await sql.getAllUsers()
    res.json(users)
});

getUserByPhone = function(phone_no){
  return true
}

sendOtpToPhone = function(phone_no,otp){
  console.log(otp);
 
}


app.post('/login/otp',async (req,res)=>{
    const {phone_no} = req.body;
    console.log(phone_no)
    user = await sql.userExists(phone_no);
    console.log(user)
    if (user){
    const { phoneNumber } = req.body;
    const otp = Math.floor(100000 + Math.random() * 900000).toString(); 
    otps[phoneNumber] = otp; 
    sendOtpToPhone(phoneNumber, otp); 

    res.json({ message: 'OTP sent successfully' })
    }
    else{
      res.status(401).json(['Phone number not registered'])
    }
})

app.post('/login/verify/otp',(req,res)=>{
  const {otp,phoneNumber} = req.body;
  if (true||otp===otps[phoneNumber]){
    delete otps[phoneNumber];
    res.status(200).json(['Done'])
  }
  else{
    res.status(401).send('Invalid OTP')
  }
})

app.post('/signup/otp',async (req,res)=>{
  const {phone} = req.body;
  const user = await sql.userExists(phone)
  if (!user){
    const { phone } = req.body;
    const otp = Math.floor(100000 + Math.random() * 900000).toString(); 
    otps[phone] = otp; 
    sendOtpToPhone(phone, otp); 
    res.json({ message: 'OTP sent successfully' })
    }
    else{
      res.status(401).json({message:'Phone number already registered. '})
    }
})

app.post('/signup/verify/otp',async(req,res)=>{
  console.log(req.body)
  const {user,otp_} = req.body;
  const {fname,lname,username,phone} = user
  const user_exists = await sql.userExists(phone) 
  console.log(user_exists) 
  if (user_exists){
    res.status(401).json(['Phone number already registered. '])
  }
  else{
    console.log("inside")
    if (otp_==otps[phone]){
      delete otps[phone];
      const result = await sql.createUser(fname,lname,username,phone)
      res.status(200).json(['OTP is correct'])
    }
    else{
      res.status(401).json(['Invalid OTP']);
    }
  }
})


io.on('connection', (socket) => {

  console.log('A user connected');

  socket.on('test',(arg)=>{socket.emit('ok')})


  socket.on('disconnect', () => {
    console.log('User disconnected');
  });

  
});

const PORT = process.env.PORT || 5500;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = {}