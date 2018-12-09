import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { WeatherService } from './services/weather.service';
import { DetailsComponent } from './components/details/details.component';
import { MessageService } from './services/message.service';
import { MessagesComponent } from './components/messages/messages.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, DetailsComponent, MessagesComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [WeatherService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
