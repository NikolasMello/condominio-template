import { ComponentFixture, TestBed } from '@angular/core/testing';

import  ControladorSaidaComponent  from './controlador-saida.component';

describe('ControladorSaidaComponent', () => {
  let component: ControladorSaidaComponent;
  let fixture: ComponentFixture<ControladorSaidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ControladorSaidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControladorSaidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
