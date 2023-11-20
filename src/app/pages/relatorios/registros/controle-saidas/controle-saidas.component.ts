import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition, faBan, faXmark, faPenToSquare, faTrash, faEraser, faSearch, faAdd, faFilePdf, faFileExcel } from '@fortawesome/free-solid-svg-icons';
import Pagination from 'src/app/util/pagination';
import { dataPersonsEntry } from 'src/app/mock/mock-data';
import { iPerson } from 'src/app/interfaces/Iperson';

@Component({
  selector: 'app-controle-saidas',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './controle-saidas.component.html',
  styleUrls: ['./controle-saidas.component.css']
})
export default class ControleSaidasComponent implements OnInit{

  faEraser: IconDefinition = faEraser;
  faSearch: IconDefinition = faSearch;
  faAdd: IconDefinition = faAdd;
  faTrash: IconDefinition = faTrash;
  faPenToSquare: IconDefinition = faPenToSquare;
  faBan: IconDefinition = faBan;
  faXmark: IconDefinition = faXmark;
  faFilePdf: IconDefinition = faFilePdf;
  faFileExcel: IconDefinition = faFileExcel;

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
