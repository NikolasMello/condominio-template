import { ComponentFixture, TestBed } from '@angular/core/testing';

import  MoradiaComponent  from './moradia.component';

describe('MoradiaComponent', () => {
  let component: MoradiaComponent;
  let fixture: ComponentFixture<MoradiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MoradiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoradiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
