import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Outfit } from '../../interfaces/outfit';

@Injectable({
  providedIn: 'root',
})

export class OutfitApiService {
  
  constructor(private client: HttpClient) {}

  // https://localhost:7085/api/Outfit/GetOutfitByTemperature/52
  getOutfitByTemperature(temperature: Number): Observable<Outfit[]> {
    let outfit = this.client.get<Outfit[]>(
      environment.apiUrl + 'Outfit/GetOutfitByTemperature/' + temperature
    );

    return outfit;
  }

  // https://localhost:7085/api/Outfit/GetAllOutfits
  getAllOutfits(): Observable<Outfit[]> {
    let outfits = this.client.get<Outfit[]>(
      environment.apiUrl + 'Outfit/GetAllOutfits'
    );

    return outfits;
  }

  // https://localhost:7085/api/Outfit/GetAllOutfitsByUserId/1
  getAllOutfitsByUserId(userId: number): Observable<Outfit[]> {
    let outfits = this.client.get<Outfit[]>(
      environment.apiUrl + 'Outfit/GetAllOutfitsByUserId/' + userId
    );

    return outfits;
  }

  // https://localhost:7085/api/Outfit/AddOutfitToUserProfile
  addOutfitToUserProfile(outfit: Outfit): Observable<Outfit> {
    return this.client.post<any>(environment.apiUrl + 'Outfit/AddOutfitToUserProfile', outfit);
  }

  // https://localhost:7085/api/Outfit/UpdateUserOutfit/14'
  updateUserOutfit(outfitId: number, outfit: Outfit) :  Observable<any> {
    return this.client.put(environment.apiUrl + 'Outfit/UpdateUserOutfit/' + outfitId, outfit);
  }

  // https://localhost:7085/api/Outfit/DeleteUserOutfit/10
  deleteUserOutfit(outfitId: number){
    return this.client.delete(environment.apiUrl + 'Outfit/DeleteUserOutfit/' + outfitId
    );
  }
  getAllOutfitsByAuthId(): Observable<Outfit[]> {
    let outfits = this.client.get<Outfit[]>(
      environment.apiUrl + 'Outfit/GetAllOutfitsByAuthId'
    );

    return outfits;
  }

}
