import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GasolineraComponent } from './components/gasolinera/gasolinera.component';
import { provideHttpClient } from '@angular/common/http';
import { MenuNavComponent } from './shared/menu-nav/menu-nav/menu-nav.component';
import { MaterialModule } from './modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsLinkPipe } from './pipes/google-maps-link.pipe';
import { GoogleMapRoutePipe } from './pipes/google-map-route.pipe';
import { ScreenComponent } from './components/screen/screen.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    GasolineraComponent,
    MenuNavComponent,
    GoogleMapsLinkPipe,
    GoogleMapRoutePipe,
    FilterBarComponent,
    ScreenComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule, // add here if necessasry
    RouterLinkActive,// add here if necessasry
    RouterOutlet, // add here if necessasry
    RouterLink,// add here if necessasry
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
