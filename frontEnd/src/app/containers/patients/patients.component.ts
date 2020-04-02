import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';


@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  constructor(public patientService: PatientService) { }

  ngOnInit(): void {
    this.patientService.getAll()
    .subscribe(
      res => this.patientService.setPatients(res),
      error => console.log(error)
    )

  }

}
