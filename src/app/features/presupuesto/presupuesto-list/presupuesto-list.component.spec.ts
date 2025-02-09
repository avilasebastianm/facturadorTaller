import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresupuestoListComponent } from './presupuesto-list.component';

describe('PresupuestoListComponent', () => {
  let component: PresupuestoListComponent;
  let fixture: ComponentFixture<PresupuestoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresupuestoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresupuestoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
