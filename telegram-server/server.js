const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const { send } = require('process');
const multer = require('multer')
const upload = multer()

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(cors({
  origin: '*', 
  methods: ['GET', 'POST'],
  credentials: true 
}));

app.use(express.json());
app.use(cors({origin:"*"}))







app.post('/file',upload.single('pfp'),(req,res)=>{
  console.log(req.files,req.file)
})



app.get('/', (req, res) => {
    res.status(200).send('Server is running...')
});

getUserByPhone = function(phone_no){
  return phone_no == '+91 7400288151'
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
    // otps[phoneNumber] = otp; 
    sendOtpToPhone(phoneNumber, otp); 

    res.json({ message: 'OTP sent successfully' })
    }
    else{
      res.status(401).json(['Phone number not registered'])
    }
})

app.post('/verifyOtp',(req,res)=>{
  const {otp,phoneNumber} = req.body;
  if (otp===ops[phoneNumber]){
    delete otps[phoneNumber];
    res.status(200).redirect('chat')
  }
  else{
    res.status(401).json(['Invalid OTP'])
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

    res.json({ message: 'OTP sent successfully' }).redirect('verification-code')
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

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
