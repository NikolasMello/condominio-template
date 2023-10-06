import { ComponentFixture, TestBed } from '@angular/core/testing';

import  ReiniciarSistemaComponent  from './reiniciar-sistema.component';

describe('ReiniciarSistemaComponent', () => {
  let component: ReiniciarSistemaComponent;
  let fixture: ComponentFixture<ReiniciarSistemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ReiniciarSistemaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReiniciarSistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
