import { Component } from '@angular/core';

@Component({
  selector: 'app-gmaps',
  templateUrl: './gmaps.component.html',
  styleUrls: ['./gmaps.component.scss']
})
export class GmapsComponent {
  title: string = 'My first AGM component';
  lat: number = 51.678418;
  lng: number = 7.809007;
}
