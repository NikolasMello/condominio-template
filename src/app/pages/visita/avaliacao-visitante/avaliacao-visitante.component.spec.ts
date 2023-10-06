import { ComponentFixture, TestBed } from '@angular/core/testing';

import  AvaliacaoVisitanteComponent  from './avaliacao-visitante.component';

describe('AvaliacaoVisitanteComponent', () => {
  let component: AvaliacaoVisitanteComponent;
  let fixture: ComponentFixture<AvaliacaoVisitanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AvaliacaoVisitanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvaliacaoVisitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
