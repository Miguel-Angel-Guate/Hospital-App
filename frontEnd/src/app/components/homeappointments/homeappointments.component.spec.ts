import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeappointmentsComponent } from './homeappointments.component';

describe('HomeappointmentsComponent', () => {
  let component: HomeappointmentsComponent;
  let fixture: ComponentFixture<HomeappointmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeappointmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeappointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
