import { ComponentFixture, TestBed } from '@angular/core/testing';

import  AlteracaoDeCadastroComponent  from './alteracao-de-cadastro.component';

describe('AlteracaoDeCadastroComponent', () => {
  let component: AlteracaoDeCadastroComponent;
  let fixture: ComponentFixture<AlteracaoDeCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AlteracaoDeCadastroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlteracaoDeCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
