import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition, faBan, faXmark, faPenToSquare, faTrash, faEraser, faSearch, faAdd } from '@fortawesome/free-solid-svg-icons';
import Pagination from 'src/app/util/pagination';

@Component({
  selector: 'app-controlador-entrada',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './controlador-entrada.component.html',
  styleUrls: ['./controlador-entrada.component.css']
})
export default class ControladorEntradaComponent implements OnInit {

  faEraser: IconDefinition = faEraser;
  faSearch: IconDefinition = faSearch;
  faAdd: IconDefinition = faAdd;
  faTrash: IconDefinition = faTrash;
  faPenToSquare: IconDefinition = faPenToSquare;
  faBan: IconDefinition = faBan;
  faXmark: IconDefinition = faXmark;

  ngOnInit(): void {
    
  }

}
