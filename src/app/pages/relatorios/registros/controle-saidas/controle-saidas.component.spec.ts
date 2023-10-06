import { ComponentFixture, TestBed } from '@angular/core/testing';

import  ControleSaidasComponent  from './controle-saidas.component';

describe('ControleSaidasComponent', () => {
  let component: ControleSaidasComponent;
  let fixture: ComponentFixture<ControleSaidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ControleSaidasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControleSaidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
