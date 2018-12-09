import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  location = {
    city: 'pernik'
  };
  city = 'pernik';
  days: '2';

  weather: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    //this.getForecast();
  }

  getForecast() {
    this.weatherService
      .getForecast(this.city, this.days)
      .subscribe(response => {
        console.log(response);

        this.weather = response;
      });
  }
}
