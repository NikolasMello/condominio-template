import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition, faBan, faXmark, faPenToSquare, faTrash, faEraser, faSearch, faAdd } from '@fortawesome/free-solid-svg-icons';
import Pagination from 'src/app/util/pagination';
import { iPerson } from '../../../interfaces/Iperson';
import { dataPersons, dataPersonsEntry } from '../../../mock/mock-data';

@Component({
  selector: 'app-registro-entrada',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './registro-entrada.component.html',
  styleUrls: ['./registro-entrada.component.css']
})
export default  class RegistroEntradaComponent implements OnInit {

  faEraser: IconDefinition = faEraser;
  faSearch: IconDefinition = faSearch;
  faAdd: IconDefinition = faAdd;
  faTrash: IconDefinition = faTrash;
  faPenToSquare: IconDefinition = faPenToSquare;
  faBan: IconDefinition = faBan;
  faXmark: IconDefinition = faXmark;

  paginationPerson: Pagination<iPerson> = new Pagination<iPerson>(5, dataPersonsEntry);
  personList:iPerson[] = dataPersonsEntry;

  
  ngOnInit(): void {
    this.getPage(1);
  }

  getPage(pageNumber: number | string){
    if( typeof pageNumber === 'number'){
      this.paginationPerson.getPage(pageNumber);
    }
    
  }

}
