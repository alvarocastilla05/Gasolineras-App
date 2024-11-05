import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GasolineraComponent } from './components/gasolinera/gasolinera.component';
import { provideHttpClient } from '@angular/common/http';
import { MenuNavComponent } from './shared/menu-nav/menu-nav/menu-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    GasolineraComponent,
    MenuNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
