import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
    chatData = [
        {
            "name": "John Doe",
            "time": "11:26 PM",
            "pimg": "./img/profile-img.png",
            "unread": 1,
            "msg": "Hello"
        },
        {
            "name": "John Doe",
            "time": "11:26 PM",
            "pimg": "./img/profile-1.png",
            "unread": 1,
            "msg": "Hello"
        },
        {
            "name": "John Doe",
            "time": "11:26 PM",
            "pimg": "./img/profile-2.png",
            "unread": 1,
            "msg": "Hello"
        },
        {
            "name": "John Doe",
            "time": "11:26 PM",
            "pimg": "./img/profile-3.png",
            "unread": 1,
            "msg": "Hello"
        },
        {
            "name": "John Doe",
            "time": "11:26 PM",
            "pimg": "./img/profile-4.png",
            "unread": 1,
            "msg": "Hello"
        },{
            "name": "John Doe",
            "time": "11:26 PM",
            "pimg": "./img/profile-5.jpg",
            "unread": 1,
            "msg": "Hello"
        },{
            "name": "John Doe",
            "time": "11:26 PM",
            "pimg": "./img/profile-6.jpg",
            "unread": 1,
            "msg": "Hello"
        },{
            "name": "John Doe",
            "time": "11:26 PM",
            "pimg": "./img/profile-7.jpg",
            "unread": 1,
            "msg": "Hello"
        },{
            "name": "John Doe",
            "time": "11:26 PM",
            "pimg": "./img/profile-8.jpg",
            "unread": 1,
            "msg": "Hello"
        },{
            "name": "John Doe",
            "time": "11:26 PM",
            "pimg": "./img/profile-9.jpg",
            "unread": 1,
            "msg": "Hello"
        },
        {
            "name": "John Doe",
            "time": "11:26 PM",
            "pimg": "./img/profile-4.png",
            "unread": 1,
            "msg": "Hello"
        },{
            "name": "John Doe",
            "time": "11:26 PM",
            "pimg": "./img/profile-5.jpg",
            "unread": 1,
            "msg": "Hello"
        },{
            "name": "John Doe",
            "time": "11:26 PM",
            "pimg": "./img/profile-6.jpg",
            "unread": 1,
            "msg": "Hello"
        },{
            "name": "John Doe",
            "time": "11:26 PM",
            "pimg": "./img/profile-7.jpg",
            "unread": 1,
            "msg": "Hello"
        },{
            "name": "John Doe",
            "time": "11:26 PM",
            "pimg": "./img/profile-8.jpg",
            "unread": 1,
            "msg": "Hello"
        },{
            "name": "John Doe",
            "time": "11:26 PM",
            "pimg": "./img/profile-9.jpg",
            "unread": 1,
            "msg": "Hello"
        }
                    ]

    inputText:string='';
    pfp='';name = '';lastSeen ='';messages:any=[]
    constructor(){} 

    sendMsg(msg:string){
        console.log("Message Sent!")
        this.inputText =''
        this.messages.push(msg)
    }

    setChatBox(id:any){
        const user= this.chatData[id]
        this.pfp = user.pimg
        this.name = user.name
        this.lastSeen= 'last seen'
        this.messages = [user.msg]
    }
}
