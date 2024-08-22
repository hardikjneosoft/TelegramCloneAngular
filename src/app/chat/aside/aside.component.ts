import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {
    @Input() chatData:any = []
    filesOpen = false
    settingsOpen = false
    
    @Output() setChatBoxEmitter = new EventEmitter<number>()
}
