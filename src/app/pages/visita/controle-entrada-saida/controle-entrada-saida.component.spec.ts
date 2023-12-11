import { ComponentFixture, TestBed } from '@angular/core/testing';

import  ControleEntradaSaidaComponent  from './controle-entrada-saida.component';

describe('ControleEntradaSaidaComponent', () => {
  let component: ControleEntradaSaidaComponent;
  let fixture: ComponentFixture<ControleEntradaSaidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ControleEntradaSaidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControleEntradaSaidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
