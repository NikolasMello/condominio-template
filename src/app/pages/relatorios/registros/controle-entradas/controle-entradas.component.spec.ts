import { ComponentFixture, TestBed } from '@angular/core/testing';

import  ControleEntradasComponent  from './controle-entradas.component';

describe('ControleEntradasComponent', () => {
  let component: ControleEntradasComponent;
  let fixture: ComponentFixture<ControleEntradasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ControleEntradasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControleEntradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
