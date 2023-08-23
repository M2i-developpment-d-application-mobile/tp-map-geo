import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  map?: L.Map
  constructor() {}

  ionViewWillEnter(){
    this.map = L.map('mapId').setView([45.2026127,5.7632468], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    L.marker([45.2026127,5.7632468],
      {icon: L.icon({iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png'})})
    .addTo(this.map)

    .bindPopup('A pretty place in Carrefour')

    .openPopup();
  }
  ngOnInit(): void {

  }
}
