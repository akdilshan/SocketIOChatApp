import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChatService } from '../services/ChatService';
import { WebsocketService } from '../services/WebsocketService';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  
  ],
  providers: [WebsocketService,ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
