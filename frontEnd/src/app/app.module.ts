import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header/header.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import { PhysiciansComponent } from './containers/physicians/physicians.component';
import { AppointmentsComponent } from './containers/appointments/appointments.component';
import { PatientsComponent } from './containers/patients/patients.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './containers/home/home.component';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PhysiciansComponent,
    AppointmentsComponent,
    PatientsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatBadgeModule,
    MatIconModule,
    HttpClientModule,
    MatTableModule,
    MatListModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
