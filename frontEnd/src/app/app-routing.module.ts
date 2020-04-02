import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhysiciansComponent } from './containers/physicians/physicians.component';
import { PatientsComponent } from './containers/patients/patients.component';
import { AppointmentsComponent } from './containers/appointments/appointments.component';






const routes: Routes = [
  {path:"physicians", component:PhysiciansComponent

},
{path:"patients", component:PatientsComponent
},
{path:"appointments", component:AppointmentsComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
