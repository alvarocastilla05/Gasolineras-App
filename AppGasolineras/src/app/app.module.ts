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
import { FormsModule } from '@angular/forms';
import { FilterCpComponent } from './components/filter-cp/filter-cp.component';

@NgModule({
  declarations: [
    AppComponent,
    GasolineraComponent,
    MenuNavComponent,
    FilterCpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    MaterialModule

  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
