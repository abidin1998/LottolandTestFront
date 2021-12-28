import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { StatisticsViewComponent } from './statistics-view/statistics-view.component';
import { IdentificationViewComponent } from './identification-view/identification-view.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProfileViewComponent,
    StatisticsViewComponent,
    IdentificationViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
