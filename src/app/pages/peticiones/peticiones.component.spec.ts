import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeticionesComponent } from './peticiones.component';

describe('PeticionesComponent', () => {
  let component: PeticionesComponent;
  let fixture: ComponentFixture<PeticionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PeticionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PeticionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
