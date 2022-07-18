import { Component, OnInit } from '@angular/core';
import { Outfit } from 'src/app/interfaces/outfit';
import { OutfitApiService } from 'src/app/services/outfit-api.service';

@Component({
  selector: 'app-outfit',
  templateUrl: './outfit.component.html',
  styleUrls: ['./outfit.component.css'],
})
export class OutfitComponent implements OnInit {

  constructor(private service: OutfitApiService) {}

  ngOnInit(): void {
    this.getAllOutfits();
  }

  // create outfit array
  outfitArray: Outfit[] = [];

  // functions to call endpoints
  getOutfitByTemperature(temperature: number) {
    this.service
      .getOutfitByTemperature(temperature)
      .subscribe((data: Outfit[]) => (this.outfitArray = data));
  }

  getAllOutfits() {
    this.service
      .getAllOutfits()
      .subscribe((data: Outfit[]) => (this.outfitArray = data));
  }

  getAllOutfitsByUserId(userId: number) {
    this.service
      .getAllOutfitsByUserId(userId)
      .subscribe((data: Outfit[]) => (this.outfitArray = data));
  }
}
