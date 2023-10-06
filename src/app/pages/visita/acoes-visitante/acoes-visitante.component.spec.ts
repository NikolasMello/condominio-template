import { ComponentFixture, TestBed } from '@angular/core/testing';

import  AcoesVisitanteComponent  from './acoes-visitante.component';

describe('AcoesVisitanteComponent', () => {
  let component: AcoesVisitanteComponent;
  let fixture: ComponentFixture<AcoesVisitanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AcoesVisitanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcoesVisitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
