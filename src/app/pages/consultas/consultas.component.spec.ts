import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasComponent } from './consultas.component';

describe('ConsultasComponent', () => {
  let component: ConsultasComponent;
  let fixture: ComponentFixture<ConsultasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
