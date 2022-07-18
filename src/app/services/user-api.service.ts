import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})

// prod - 'https://finalprojapi20220629200201.azurewebsites.net' QUESTION:  does this add "/api" to the end?
// local - 'https://localhost:4200/api/'

export class UserApiService {
  constructor(private client: HttpClient) {}

  // not tested
  // https://localhost:7085/api/User/AddNewUser
  AddNewUser(user: User[]) {
    let result = this.client.post(
      environment.apiUrl + 'User/AddNewUser', user
    );

    return result;
  }

 // not tested
  // https://localhost:7085/api/User/GetUserById/1
  GetUserById(userId: number): Observable<User> {
    let user = this.client.get<User>(
      environment.apiUrl + 'Outfit/GetOutfitByTemperature/' + userId
    );

    return user;
  }
}
