import { ComponentFixture, TestBed } from '@angular/core/testing';

import  PessoafisicaComponent  from './pessoafisica.component';

describe('PessoafisicaComponent', () => {
  let component: PessoafisicaComponent;
  let fixture: ComponentFixture<PessoafisicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PessoafisicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PessoafisicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
