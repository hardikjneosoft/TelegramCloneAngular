const express = require('express');
const http = require('http');
const {Server} = require('socket.io');
const cors = require('cors');
const app = express();
const server = http.createServer(app);

const db = require('./db')

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


app.get('/', (req, res) => {
    res.send('Server is running')
    // res.status(200).send('Server is running...')
});

getUserByPhone = function(phone_no){
  return true
}

sendOtpToPhone = function(phone_no,otp){
  console.log(otp);
  
}
app.post('/sendOtp',(req,res)=>{
    const {phone_no} = req.body;
    console.log(req.body);
    
    user = getUserByPhone(phone_no);
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

app.post('/verifyOtp',(req,res)=>{
  const {otp,phoneNumber} = req.body;
  if (otp===otps[phoneNumber]){
    delete otps[phoneNumber];
    res.status(200)
  }
  else{
    res.status(401).send('Invalid OTP')
  }
})

app.post('/signup',(req,res)=>{
  const {fname,lname,username,phone,} = req.body;
  const user = createUser(fname,lname,username,phone);
  if (user){
    const { phoneNumber } = req.body;
    const otp = Math.floor(100000 + Math.random() * 900000).toString(); 
    otps[phoneNumber] = otp; 
    sendOtpToPhone(phoneNumber, otp); 

    res.json({ message: 'OTP sent successfully' })
    }
    else{
      res.status(401).json(['Phone number already registered. '])
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