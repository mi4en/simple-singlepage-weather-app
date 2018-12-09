import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { WeatherService } from './services/weather.service';
import { DetailsComponent } from './components/details/details.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, DetailsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule {}
