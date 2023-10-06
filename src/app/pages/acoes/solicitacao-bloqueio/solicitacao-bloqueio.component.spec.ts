import { ComponentFixture, TestBed } from '@angular/core/testing';

import  SolicitacaoBloqueioComponent  from './solicitacao-bloqueio.component';

describe('SolicitacaoBloqueioComponent', () => {
  let component: SolicitacaoBloqueioComponent;
  let fixture: ComponentFixture<SolicitacaoBloqueioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SolicitacaoBloqueioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitacaoBloqueioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
