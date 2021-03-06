import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { AuthButtonComponent } from './auth-button/auth-button.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

// Import the injector module and the HTTP client module from Angular
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

// Import the HTTP interceptor from the Auth0 Angular SDK
import { AuthHttpInterceptor } from '@auth0/auth0-angular';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { OutfitComponent } from './components/outfit/outfit.component';
import { AdjustComponent } from './components/adjust/adjust.component';
import { ListClothesByTempComponent } from './components/list-clothes-by-temp/list-clothes-by-temp.component';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { DegreePipe } from './pipes/degree.pipe';
import { GetOutfitsByUserComponent } from './components/get-outfits-by-user/get-outfits-by-user.component';
import { CreateOutfitComponent } from './components/create-outfit/create-outfit.component';
import { EditOutfitComponent } from './components/edit-outfit/edit-outfit.component';


@NgModule({
  declarations: [AppComponent, AuthButtonComponent, UserProfileComponent, NavbarComponent, HomeComponent, OutfitComponent, AdjustComponent, CurrentWeatherComponent, ListClothesByTempComponent, DegreePipe, GetOutfitsByUserComponent, CreateOutfitComponent, EditOutfitComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,   
    FormsModule, 
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      // The domain and clientId were configured in the previous chapter
      domain: 'dev-g1qs2qkr.us.auth0.com',
      clientId: 'AibkaMpJJd9Wy4pyq9Vj0yYKujSKTwoV',
    
      // Request this audience at user authentication time
      audience: 'https://finalprojectapi',
    
      // Specify configuration for the interceptor              
      httpInterceptor: {
        allowedList: [
          {
            // Match any request that starts 'https://dev-g1qs2qkr.us.auth0.com/api/v2/' (note the asterisk)
            // Might need to change this uri if working locally
            uri: 'https://finalprojapi20220629200201.azurewebsites.net/api/*',
            tokenOptions: {
              // The attached token should target this audience
              audience: 'https://finalprojectapi',
            }
          },

          {
            // Match any request that starts 'https://dev-g1qs2qkr.us.auth0.com/api/v2/' (note the asterisk)
            // Might need to change this uri if working locally
            uri: 'https://localhost:7085/api/*',
            tokenOptions: {
              // The attached token should target this audience
              audience: 'https://finalprojectapi',
            }
          }
        ]
      }
    })
  ],

  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
