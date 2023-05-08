import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as L from "leaflet";

@Component({
  selector: 'app-navigate',
  templateUrl: './navigate.page.html',
  styleUrls: ['./navigate.page.scss'],
})
export class NavigatePage implements OnInit {

  leafletMap: any;
  lat: number = 41.1533;
  lng: number = 20.1683;
  zoom: number = 10;

  constructor(private routes: ActivatedRoute, private location: Location) { 
  }

  ngOnInit() {
    this.routes.params.subscribe((param: any) => {
      this.lat = param?.lat;
      this.lng = param?.long;
    })
    this.loadLeafletMap();
  }

  goBack(){
    this.location.back();
  }

  loadLeafletMap() {
    this.leafletMap = new L.Map("leafletMap");    
    const self = this;
    this.leafletMap.on("load", function () {
      setTimeout(() => {
        self.leafletMap.invalidateSize();
      }, 10);
    });
    this.leafletMap.setView([this.lat, this.lng], this.zoom);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { attribution: '&copy; <a href=”https://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(this.leafletMap);

    let icon = L.icon({
      iconUrl: "marker-icon.png",
      iconSize: [30, 40]
      });
      let marker = L.marker([this.lat, this.lng],{icon: icon}).addTo(this.leafletMap)
      let popup = L.popup()
      marker.bindPopup(popup);
  }

}
