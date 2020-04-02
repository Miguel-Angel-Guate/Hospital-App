import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {


  constructor(public appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.appointmentService.getAll()
    .subscribe(
      res => this.appointmentService.setAppointments(res),
      error => console.log(error)
    )
  }

}
