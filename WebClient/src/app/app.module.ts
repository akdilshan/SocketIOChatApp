import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChatService } from '../services/ChatService';
import { WebsocketService } from '../services/WebsocketService';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  
  ],
  providers: [WebsocketService,ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
