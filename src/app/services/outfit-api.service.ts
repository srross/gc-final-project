import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Outfit } from '../interfaces/outfit';

@Injectable({
  providedIn: 'root',
})

export class OutfitApiService {
  http: any;
  url: any;
  constructor(private client: HttpClient) {}

  // https://localhost:7085/api/Outfit/GetOutfitByTemperature/52
  getOutfitByTemperature(temperature: number): Observable<Outfit[]> {
    let outfit = this.client.get<Outfit[]>(
      environment.apiUrl + 'Outfit/GetOutfitByTemperature/' + temperature
    );

    return outfit;
  }

  // working
  // https://localhost:7085/api/Outfit/GetAllOutfits
  getAllOutfits(): Observable<Outfit[]> {
    let outfits = this.client.get<Outfit[]>(
      environment.apiUrl + 'Outfit/GetAllOutfits'
    ); //'https://localhost:7085/api/Outfit/GetAllOutfits'

    return outfits;
  }

  //working
  // https://localhost:7085/api/Outfit/GetAllOutfitsByUserId/1
  getAllOutfitsByUserId(userId: number): Observable<Outfit[]> {
    let outfits = this.client.get<Outfit[]>(
      environment.apiUrl + 'Outfit/GetAllOutfitsByUserId/' + userId
    );

    return outfits;
  }

  // not working working
  // https://localhost:7085/api/Outfit/AddOutfitToUserProfile
  addOutfitToUserProfile(outfit: Outfit[]): Observable<Outfit[]> {
    let result = this.client.post<Outfit[]>(
      environment.apiUrl + 'Outfit/AddOutfitToUserProfile',
      outfit
    );

    return result; //updated outfit list
  }

  // not tested
  // https://localhost:7085/api/Outfit/UpdateUserOutfit/14'
  updateUserOutfit(outfitId: number, outfit: Outfit[]) {
    let result = this.client.put(
      environment.apiUrl + 'Outfit/UpdateUserOutfit' + outfitId,
      outfit
    );

    return result;
  }

  // not tested
  // https://localhost:7085/api/Outfit/DeleteUserOutfit/10
  deleteUserOutfit(outfitId: number) {
    let result = this.client.delete(
      environment.apiUrl + 'Outfit/DeleteUserOutfit/' + outfitId
    );

    return result;
  }
}
