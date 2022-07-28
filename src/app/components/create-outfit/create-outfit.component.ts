import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OutfitApiService } from 'src/app/services/outfit/outfit-api.service';

@Component({
  selector: 'app-create-outfit',
  templateUrl: './create-outfit.component.html',
  styleUrls: ['./create-outfit.component.css']
})
export class CreateOutfitComponent implements OnInit {

  constructor(private service : OutfitApiService, private router: Router) { }

  ngOnInit(): void {
  }

  submitForm(form: any){
    this.service.addOutfitToUserProfile({
      id: 0,
      userId: 0,
      outfitBottom: form.value['outfitBottom'],
      outfitTop: form.value['outfitTop'],
      outfitHead: form.value['outfitHead'],
      outfitHands: form.value['outfitHands'],
      maxTemperature: form.value['maxTemperature'],
      minTemperature:form.value['minTemperature'],
      outfitImage:""
    }).subscribe(() => this.router.navigate(['/userOutfits']));
  }

}
