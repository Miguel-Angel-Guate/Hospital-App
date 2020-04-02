import { Component, OnInit } from '@angular/core';
import { PhysicianService } from 'src/app/services/physician.service';

@Component({
  selector: 'app-physicians',
  templateUrl: './physicians.component.html',
  styleUrls: ['./physicians.component.scss']
})
export class PhysiciansComponent implements OnInit {
  constructor(public physicianService: PhysicianService) { }

  ngOnInit(): void {
    this.physicianService.getAll()
    .subscribe(
      res => this.physicianService.setPhysicians(res),
      error => console.log(error)
    )
  }


}
