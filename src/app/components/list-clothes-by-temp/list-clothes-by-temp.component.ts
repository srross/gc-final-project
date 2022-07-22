import { Component, Input, OnInit } from '@angular/core';
import { Outfit } from 'src/app/interfaces/outfit';
import { OutfitApiService } from 'src/app/services/outfit-api.service';

@Component({
  selector: 'app-list-clothes-by-temp',
  templateUrl: './list-clothes-by-temp.component.html',
  styleUrls: ['./list-clothes-by-temp.component.css']
})
export class ListClothesByTempComponent implements OnInit {

  constructor(private service:OutfitApiService) { }

  outfitArray:Outfit[] = [];
  @Input() temperature:Number | undefined;
  ngOnInit(): void {
    this.getOutfitByTemperature();
  }


  getOutfitByTemperature(){
    //console.log(this.temperature)
    if(this.temperature!== undefined){ 
      this.service.getOutfitByTemperature(this.temperature).subscribe((data:Outfit[])=>this.outfitArray = data);
    }
  }

}
