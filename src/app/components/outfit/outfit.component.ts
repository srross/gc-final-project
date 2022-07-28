import { Component, OnInit } from '@angular/core';
import { Outfit } from 'src/app/interfaces/outfit';
import { OutfitApiService } from 'src/app/services/outfit/outfit-api.service';

@Component({
  selector: 'app-outfit',
  templateUrl: './outfit.component.html',
  styleUrls: ['./outfit.component.css'],
})
export class OutfitComponent implements OnInit {
  // inject service
  constructor(private service: OutfitApiService) {}

  ngOnInit(): void {
    this.deleteUserOutfit(15);
  }

  //temporary test data - can remove when component.html(s) are complete
  testResult: Outfit = {
    id: 0,
    minTemperature: 0,
    outfitBottom: 'string',
    outfitTop: 'string',
    outfitHead: 'string',
    outfitHands: 'string',
    outfitImage: 'string',
    userId: 0,
    maxTemperature: 0,
    authUserId:""

  };

  testOutfit: Outfit = {
    id: 9,
    minTemperature: 60,
    outfitBottom: 'bottom6062',
    outfitTop: 'top6061',
    outfitHead: 'head6061',
    outfitHands: 'hands6061',
    outfitImage: 'NULL',
    userId: 1,
    maxTemperature: 69,
    authUserId:""
  };

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

  // backend currently doesn't return anything for add,update, and delete.
  // view Db table to validate changes
  addOutfitToUserProfile() {
    this.service
      .addOutfitToUserProfile(this.testOutfit)
      .subscribe((data: Outfit) => (this.testResult = data)); 
  }

  updateUserOutfit(outfitId: number) {
    this.service
      .updateUserOutfit(outfitId, this.testOutfit)
      .subscribe((data: Outfit) => (this.testResult = data));
  }

  deleteUserOutfit(outfitId: number) {
    this.service
      .deleteUserOutfit(outfitId)
      .subscribe((data: any) => console.log());
    
  }
}
