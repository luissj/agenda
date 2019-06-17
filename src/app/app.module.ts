import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
   AngularFireModule.initializeApp({
     apiKey: "AIzaSyCYizW8LIIvMPlxhxWnwJ7kMFRH3adMu8o",
         authDomain: "agenda-c8f5f.firebaseapp.com",
         databaseURL: "https://agenda-c8f5f.firebaseio.com",
         projectId: "agenda-c8f5f",
         storageBucket: "",
         messagingSenderId: "1088184016800",
         appId: "1:1088184016800:web:0dab28dddef640e2"
     }), AngularFireDatabaseModule 
       ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
