import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IconDefinition, faFloppyDisk, faXmark, faPenToSquare, faTrash, faEraser, faSearch, faAdd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { iPerson } from 'src/app/pages/interfaces/Iperson';
import { dataPersons } from 'src/app/pages/mock/mock-data';
import Pagination from 'src/app/util/pagination';

@Component({
  selector: 'app-morador',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule, FontAwesomeModule ],
  templateUrl: './morador.component.html',
  styleUrls: ['./morador.component.css']
})
export default class MoradorComponent implements OnInit {

  faEraser: IconDefinition = faEraser;
  faSearch: IconDefinition = faSearch;
  faAdd: IconDefinition = faAdd;
  faTrash: IconDefinition = faTrash;
  faPenToSquare: IconDefinition = faPenToSquare;
  faFloppyDisk: IconDefinition = faFloppyDisk;
  faXmark: IconDefinition = faXmark;
  formCadastroMorador: FormGroup;
  formFiltro: FormGroup;

  update: boolean = false;
  create: boolean = false;
  filtro: boolean = true;

  paginationPerson: Pagination<iPerson> = new Pagination<iPerson>(5, dataPersons);
  personList:iPerson[] = dataPersons;

  constructor(
    private fb: FormBuilder
  ){

  }

  ngOnInit(): void {
    this.createFormCadastroMorador();
    this.createFormFiltro();
    this.paginationPerson.getPage(1);
    console.log('pages', this.paginationPerson)
  }

  createFormCadastroMorador(person?: iPerson){
    this.formCadastroMorador = this.fb.group({
      idMorador: '',
      nome: ['' , Validators.required],
      dataNascimento: ['' , Validators.required],
      rg: ['' , Validators.required],
      cpf: ['' , Validators.required],
      cep: ['' , Validators.required],
      endereco: ['' , Validators.required],
      tel: '',
      cel: ['' , Validators.required],
      email: ['' , Validators.required]
    });
  }

  createFormFiltro(){
    this.formFiltro = this.fb.group({
      nome: ['' ],
      endereco: [''],
      email: ['']
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

  editar(person: iPerson){
    this.update = true;
    this.filtro = false;
    this.create = false;
    this.createFormCadastroMorador(person);
  }

  limpar(){
    this.formFiltro.reset();
  }

  fecharCadastro(){
    this.create = false;
    this.update = false;
    this.filtro = true;
    this.formCadastroMorador.reset();
  }

  getPage(pageNumber: number | string){
    if( typeof pageNumber === 'number'){
      this.paginationPerson.getPage(pageNumber);
    }
    
  }

}
