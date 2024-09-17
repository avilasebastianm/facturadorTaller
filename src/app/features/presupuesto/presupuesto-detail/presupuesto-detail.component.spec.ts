import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresupuestoDetailComponent } from './presupuesto-detail.component';

describe('PresupuestoDetailComponent', () => {
  let component: PresupuestoDetailComponent;
  let fixture: ComponentFixture<PresupuestoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresupuestoDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresupuestoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
