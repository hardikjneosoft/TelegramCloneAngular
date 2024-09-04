import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServerService } from '../server/server.service';
import { ChatData } from './chatDataInterface';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css',
})
export class ChatComponent implements OnInit{
    
    chatData:any;
    // : ChatData = {
    //     "1": { name: "John Doe", time: "11:26 PM", pimg: "./img/profile-img.png", unread: 1, msg: ["Hello"] },
    //     "2": { name: "John Doe", time: "11:26 PM", pimg: "./img/profile-1.png", unread: 1, msg: ["Hello"] },
    //     "3": { name: "John Doe", time: "11:26 PM", pimg: "./img/profile-2.png", unread: 1, msg: ["Hello"] },
    //     "4": { name: "John Doe", time: "11:26 PM", pimg: "./img/profile-3.png", unread: 1, msg: ["Hello"] },
    //     "5": { name: "John Doe", time: "11:26 PM", pimg: "./img/profile-4.png", unread: 1, msg: ["Hello"] },
    //     "6": { name: "John Doe", time: "11:26 PM", pimg: "./img/profile-5.jpg", unread: 1, msg: ["Hello"] },
    //     "7": { name: "John Doe", time: "11:26 PM", pimg: "./img/profile-6.jpg", unread: 1, msg: ["Hello"] },
    //     "8": { name: "John Doe", time: "11:26 PM", pimg: "./img/profile-7.jpg", unread: 1, msg: ["Hello"] },
    //     "9": { name: "John Doe", time: "11:26 PM", pimg: "./img/profile-8.jpg", unread: 1, msg: ["Hello"] },
    //     "10": { name: "John Doe", time: "11:26 PM", pimg: "./img/profile-9.jpg", unread: 1, msg: ["Hello"] },
    //     "11": { name: "John Doe", time: "11:26 PM", pimg: "./img/profile-4.png", unread: 1, msg: ["Hello"] },
    //     "12": { name: "John Doe", time: "11:26 PM", pimg: "./img/profile-5.jpg", unread: 1, msg: ["Hello"] },
    //     "13": { name: "John Doe", time: "11:26 PM", pimg: "./img/profile-6.jpg", unread: 1, msg: ["Hello"] },
    //     "14": { name: "John Doe", time: "11:26 PM", pimg: "./img/profile-7.jpg", unread: 1, msg: ["Hello"] },
    //     "15": { name: "John Doe", time: "11:26 PM", pimg: "./img/profile-8.jpg", unread: 1, msg: ["Hello"] },
    //     "16": { name: "John Doe", time: "11:26 PM", pimg: "./img/profile-9.jpg", unread: 1, msg: ["Hello"] }
    //   };

    inputText:string='';
    dm = {
        id: '1' ,
        pfp: '',
        name: '',
        lastSeen: '',
        messages: ''
    }
    constructor(private activeRouter:ActivatedRoute,private server:ServerService){
        
        this.server.initSocket()
    } 

    ngOnInit(): void {
        this.server.getMessages().subscribe({
            next:(data:any)=>{
                this.chatData=data
                console.log(this.chatData);
                
            },
            error:(error:any)=>console.log(error)
        })
    }

    sendMsg(msg:string){
        console.log("Message Sent!")
        this.inputText =''
        this.chatData[this.dm.id].msg.push(msg)
        this.server.putMessages(this.chatData)
        // this.dm.messages.push(msg)


    }

    setChatBox(id:string){
        const user= this.chatData[id.toString()]
        this.dm.id = id
        this.dm.pfp = user.pimg
        this.dm.name = user.name
        this.dm.lastSeen= 'last seen'
        this.dm.messages = user.msg
        }
    

    sendFile(event:any){
        if(!event.target.files)
            return
        const files:File[] =Object.values(event.target.files)
        const obs = this.server.sendFile(files) 
        for (let index = 0; index < files.length; index++) {
            this.sendMsg(files[index].name)
            obs.subscribe({
                next:next=>console.log(next),
                error:error=>console.log(error)
            })
        }
        
        // <i class="fa-duotone fa-solid fa-file" style="--fa-primary-color: #347af4; --fa-primary-opacity: 1; --fa-secondary-color: #347af4; --fa-secondary-opacity: 0.7;"></i>
    }
    
    

    
}
