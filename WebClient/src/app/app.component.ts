import { Component } from '@angular/core';
import { ChatService } from '../services/ChatService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  latestMessage=[];
  messageText='';

  constructor(private chat: ChatService){ }

  ngOnInit() {
    this.chat.messages.subscribe(msg => {
      
      this.latestMessage.push(msg.message);
    })
  }

  sendMessage() {
    this.chat.sendMsg({ message: this.messageText});
  }


}
