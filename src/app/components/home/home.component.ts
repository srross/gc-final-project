import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) { }

  zipCode: string="     ";

  ngOnInit(): void {
  }
  submitForm(form:any){

    if(this.zipCode !== undefined) { 
    this.zipCode=form.value["zipCode"]
    console.log(this.zipCode);

    } 
  }
}
