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
import { ContatoSalvarPageModule } from './contato/contato-salvar/contato-salvar.module';
import { ProfessorSalvarPageModule } from './professor/professor-salvar/professor-salvar.module';


@NgModule({
  declarations: [AppComponent,],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,ContatoSalvarPageModule, ProfessorSalvarPageModule,
   AngularFireModule.initializeApp({

     apiKey: "AIzaSyDQFjsnYtG_EtLUGkoDZJVeQ1UT9z-XnFo",
         authDomain: "historia-9c1fa.firebaseapp.com",
         databaseURL: "https://historia-9c1fa.firebaseio.com",
         projectId: "historia-9c1fa",
         storageBucket: "",
         messagingSenderId: "767806400982",
         appId: "1:767806400982:web:bd138d32361d9dd2"

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
