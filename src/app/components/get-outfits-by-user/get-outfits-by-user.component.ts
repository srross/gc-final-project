import { Component, OnInit } from '@angular/core';
import { User } from '@auth0/auth0-angular';
import { Outfit } from 'src/app/interfaces/outfit';
import { OutfitApiService } from 'src/app/services/outfit/outfit-api.service';

@Component({
  selector: 'app-get-outfits-by-user',
  templateUrl: './get-outfits-by-user.component.html',
  styleUrls: ['./get-outfits-by-user.component.css']
})
export class GetOutfitsByUserComponent implements OnInit {

  constructor(private service:OutfitApiService) { }
  userOutfitArray: Outfit[]=[];
  ngOnInit(): void {
    this.getAllOutfitsByAuthId()
  }

  getAllOutfitsByAuthId(){
    this.service.getAllOutfitsByAuthId().subscribe((data:Outfit[])=>this.userOutfitArray = data);
  }

  deleteOutfit(outfit:Outfit){
    this.service.deleteUserOutfit(outfit.id).subscribe((data:any) => this.getAllOutfitsByAuthId());
  }
}
