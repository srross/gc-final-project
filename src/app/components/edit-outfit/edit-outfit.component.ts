import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Outfit } from 'src/app/interfaces/outfit';
import { OutfitApiService } from 'src/app/services/outfit/outfit-api.service';

@Component({
  selector: 'app-edit-outfit',
  templateUrl: './edit-outfit.component.html',
  styleUrls: ['./edit-outfit.component.css']
})
export class EditOutfitComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: OutfitApiService, private router: Router) { }
  outfitToEdit: Outfit | undefined;
  ngOnInit(): void {
    this.route.params.subscribe(params => this.getOutfitById(params['id']));

  }

  getOutfitById(id: number){
    this.service.getOutfitById(id).subscribe((data: Outfit) => this.outfitToEdit = data);
  }

  submitForm(form: any){
    if(this.outfitToEdit !== undefined){
      this.service.updateUserOutfit(this.outfitToEdit?.id, {
        id: 0,
        userId: 0,
        outfitBottom: form.value['outfitBottom'],
        outfitTop: form.value['outfitTop'],
        outfitHead: form.value['outfitHead'],
        outfitHands: form.value['outfitHands'],
        maxTemperature: form.value['maxTemperature'],
        minTemperature:form.value['minTemperature'],
        outfitImage:"",
        authUserId:""
      }).subscribe(() => this.router.navigate(['/userOutfits']));
    }
    }
    
}
