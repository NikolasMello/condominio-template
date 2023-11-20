import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IconDefinition, faFloppyDisk, faXmark, faPenToSquare, faTrash, faEraser, faSearch, faAdd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { iPerson } from 'src/app/interfaces/Iperson';
import { dataPersons, fictionalApartments } from 'src/app/mock/mock-data';
import Pagination from 'src/app/util/pagination';
import { iMoradia } from 'src/app/interfaces/Imoradia';

@Component({
  selector: 'app-moradia',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule, FontAwesomeModule],
  templateUrl: './moradia.component.html',
  styleUrls: ['./moradia.component.css']
})
export default  class MoradiaComponent implements OnInit {

  faEraser: IconDefinition = faEraser;
  faSearch: IconDefinition = faSearch;
  faAdd: IconDefinition = faAdd;
  faTrash: IconDefinition = faTrash;
  faPenToSquare: IconDefinition = faPenToSquare;
  faFloppyDisk: IconDefinition = faFloppyDisk;
  faXmark: IconDefinition = faXmark;
  formCadastrarMoradia: FormGroup;
  formFiltro: FormGroup;

  update: boolean = false;
  create: boolean = false;
  filtro: boolean = true;

  paginationMoradia: Pagination<iMoradia> = new Pagination<iMoradia>(5, fictionalApartments);
  moradiaList:iMoradia[] = fictionalApartments;

  constructor(
    private fb: FormBuilder
  ){

  }

  ngOnInit(): void {
    this.createFormCadastrarMoradia();
    this.createFormFiltro();
    this.paginationMoradia.getPage(1);
  }

  createFormCadastrarMoradia(moradia?: iMoradia){
    this.formCadastrarMoradia = this.fb.group({
      id: [ moradia?.id ? moradia.id : '' ],
      apNumber: [ moradia?.apNumber ? moradia.apNumber : '' , Validators.required ],
      block: [ moradia?.block ? moradia.block : '' , Validators.required],
      area: [ moradia?.area ? moradia.area : '' , Validators.required],
      homeDescritption: [ moradia?.homeDescritption ? moradia.homeDescritption : '' ],
      price: [ moradia?.price ? moradia.price : '' , Validators.required],
      complement:[ moradia?.complement ? moradia.complement : '' , Validators.required],
    });
  }

  createFormFiltro(){
    this.formFiltro = this.fb.group({
      block: ['' ],
      minPrice: [''],
      maxPrice: [''],
      minArea: [''],
      maxArea: ['']
    })
  }

  salvar(){

  }

  pesquisar(){

  }

  cadastrar(){
    this.create = true;
    this.update = false;
    this.filtro = false;
  }

  editar(person: iMoradia){
    this.update = true;
    this.filtro = false;
    this.create = false;
    this.createFormCadastrarMoradia(person);
  }

  limpar(){
    this.formFiltro.reset();
  }

  fecharCadastro(){
    this.create = false;
    this.update = false;
    this.filtro = true;
    this.formCadastrarMoradia.reset();
  }

  getPage(pageNumber: number | string){
    if( typeof pageNumber === 'number'){
      this.paginationMoradia.getPage(pageNumber);
    }
    
  }

}
