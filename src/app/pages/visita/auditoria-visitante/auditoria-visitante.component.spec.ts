import { ComponentFixture, TestBed } from '@angular/core/testing';

import  AuditoriaVisitanteComponent  from './auditoria-visitante.component';

describe('AuditoriaVisitanteComponent', () => {
  let component: AuditoriaVisitanteComponent;
  let fixture: ComponentFixture<AuditoriaVisitanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AuditoriaVisitanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuditoriaVisitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
