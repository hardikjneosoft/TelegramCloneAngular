import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChatData } from '../chatDataInterface';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent implements OnInit {
    @Input() chatData:ChatData ={"1":{name:'',msg:['Hello'],time:'',pimg:'',unread:1}}
    userIds:string[] = []
    filesOpen = false
    settingsOpen = false
    
    @Output() setChatBoxEmitter = new EventEmitter<string>()

    constructor(){

    }
    ngOnInit(): void {
      this.userIds = Object.keys(this.chatData)
      console.log(this.userIds)
    }
}
