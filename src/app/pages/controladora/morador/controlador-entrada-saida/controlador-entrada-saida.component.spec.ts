import { ComponentFixture, TestBed } from '@angular/core/testing';

import  ControladorEntradaSaidaComponent from './controlador-entrada-saida.component';

describe('ControladorEntradaSaidaComponent', () => {
  let component: ControladorEntradaSaidaComponent;
  let fixture: ComponentFixture<ControladorEntradaSaidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ControladorEntradaSaidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControladorEntradaSaidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
