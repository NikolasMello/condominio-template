import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition, faBan, faXmark, faPenToSquare, faTrash, faEraser, faSearch, faAdd } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-solicitacao-bloqueio',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './solicitacao-bloqueio.component.html',
  styleUrls: ['./solicitacao-bloqueio.component.css']
})
export default  class SolicitacaoBloqueioComponent implements OnInit {

  faEraser: IconDefinition = faEraser;
  faSearch: IconDefinition = faSearch;
  faAdd: IconDefinition = faAdd;
  faTrash: IconDefinition = faTrash;
  faPenToSquare: IconDefinition = faPenToSquare;
  faBan: IconDefinition = faBan;
  faXmark: IconDefinition = faXmark;

  constructor(){

  }

  ngOnInit(): void {
    
  }

}
