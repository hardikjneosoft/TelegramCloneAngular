import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
    
    inputText:string='';
        constructor(){}  
    sendMsg(){
        console.log("Message Sent!")
        this.inputText =''
    }
}
