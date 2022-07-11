import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { AuthButtonComponent } from './auth-button/auth-button.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

// Import the injector module and the HTTP client module from Angular
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Import the HTTP interceptor from the Auth0 Angular SDK
import { AuthHttpInterceptor } from '@auth0/auth0-angular';

@NgModule({
  declarations: [AppComponent, AuthButtonComponent, UserProfileComponent],
  imports: [
    HttpClientModule,
    BrowserModule,

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
            uri: 'https://finalprojapi20220629200201.azurewebsites.net/*',
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



