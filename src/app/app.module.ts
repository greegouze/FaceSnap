import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FaceSnapComponent } from './face-snap/face-snap.component';
//import pour changer la local de mon app
import * as fr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    FaceSnapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    //providers pour passer mes valeurs en local fr
    { provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    //use registerLocaleData pour envoyer 'information à mon app
    registerLocaleData(fr.default);
  }
}
