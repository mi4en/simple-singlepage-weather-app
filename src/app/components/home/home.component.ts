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

  weather: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.getForecast(this.location.city).subscribe(response => {
      console.log(response);

      this.weather = response;
    });
  }
}
