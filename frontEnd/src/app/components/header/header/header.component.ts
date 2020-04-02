import { Component, OnInit } from '@angular/core';
import { PhysicianService } from 'src/app/services/physician.service';
import { AppointmentService } from 'src/app/services/appointment.service';
import { PatientService } from 'src/app/services/patient.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public physicianService: PhysicianService, public appointmentService: AppointmentService, public patientService: PatientService ) {

   }

   searchPhysicians(event:any){
     event.preventDefault()
    const searchValue= event.target.searchInput.value;
    if(!searchValue){
     return this.physicianService.getAll()
     .subscribe(
       res=>this.physicianService.setPhysicians(res)

     )

    }
    const ruta=window.location.href
   if(ruta.includes('physicians')){
  this.physicianService.search(searchValue)
     .subscribe(
       res=>this.physicianService.setPhysicians(res)
     )
}



   if(ruta.includes('appointments')){
  this.appointmentService.search(searchValue)
     .subscribe(
       res=>this.appointmentService.setAppointments(res)
     )
}
    if(ruta.includes('patients')){
  this.patientService.search(searchValue)
     .subscribe(
       res=>this.patientService.setPatients(res)
     )
}


   }


}
