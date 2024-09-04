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
    searchQuery:string|null=null
    @Output() setChatBoxEmitter = new EventEmitter<string>()

    constructor(){

    }
    ngOnInit(): void {
      this.userIds = Object.keys(this.chatData)
      console.log(this.userIds)
    }

    openProfileImageTab(): void {
      window.open('/profile-image', '_blank');
    }
    get userId() {
      return Object.keys(this.chatData);
    }

    filterUserIds() {
      if (this.searchQuery==null){
        return this.chatData
      }
      let temp = this.searchQuery.toLowerCase()
      let list = this.userId.filter(id => this.chatData[id].name.toLowerCase().startsWith(temp));
      this.userIds = list
      console.log(list);
      return list
    }
    
}
