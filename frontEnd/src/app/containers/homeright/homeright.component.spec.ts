import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomerightComponent } from './homeright.component';

describe('HomerightComponent', () => {
  let component: HomerightComponent;
  let fixture: ComponentFixture<HomerightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomerightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomerightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
