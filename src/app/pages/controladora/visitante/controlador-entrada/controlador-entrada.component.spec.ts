import { ComponentFixture, TestBed } from '@angular/core/testing';

import  ControladorEntradaComponent  from './controlador-entrada.component';

describe('ControladorEntradaComponent', () => {
  let component: ControladorEntradaComponent;
  let fixture: ComponentFixture<ControladorEntradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ControladorEntradaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControladorEntradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
