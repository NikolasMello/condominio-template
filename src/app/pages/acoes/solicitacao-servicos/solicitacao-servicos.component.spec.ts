import { ComponentFixture, TestBed } from '@angular/core/testing';

import  SolicitacaoServicosComponent  from './solicitacao-servicos.component';

describe('SolicitacaoServicosComponent', () => {
  let component: SolicitacaoServicosComponent;
  let fixture: ComponentFixture<SolicitacaoServicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SolicitacaoServicosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitacaoServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
