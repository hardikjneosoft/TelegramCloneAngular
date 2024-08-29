const express = require('express');
const http = require('http');
const {Server,socketIo} = require('socket.io');
const cors = require('cors');
const { send } = require('process');
const multer = require('multer')
const upload = multer()

const app = express();
const server = http.createServer(app);
const io = new Server(server,{
  cors: {
    origin: "*", // Replace with the origin you want to allow
    methods: ["GET", "POST"],
  }});

const otps={}
// app.use(cors({
  // origin: '*', 
  // methods: ['GET', 'POST'],
  // credentials: true 
// }));

app.use(express.json());
// app.use(cors({origin:"*"}))


app.get('/', (req, res) => {
    res.send(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Socket.io Connection</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.7.5/socket.io.js"></script>
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            // Replace 'YOUR_SERVER_IP' with the IP address of your Socket.io server
            const serverIp = 'http://localhost:5000';
            const socket = io(serverIp); // Replace PORT with your server port

            // Event listeners for socket events
            socket.on('connect', function() {
                console.log('Connected to server');
            });

            socket.on('message', function(data) {
                console.log('Message received:', data);
            });

            // Example: Emit a message to the server
            socket.emit('message', 'Hello, Server!');
        });
    </script>
</head>
<body>
    <h1>Socket.io Connection Example</h1>
</body>
</html>
`)
    // res.status(200).send('Server is running...')
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
