import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IconDefinition, faFloppyDisk, faXmark, faPenToSquare, faTrash, faEraser, faSearch, faAdd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { iPerson } from 'src/app/interfaces/Iperson';
import { dataPersons } from 'src/app/mock/mock-data';
import Pagination from 'src/app/util/pagination';

@Component({
  selector: 'app-funcionarios',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule, FontAwesomeModule ],
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export default class FuncionariosComponent implements OnInit {

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
      nome: [ person?.nome ? person.nome : '' , Validators.required],
      dataNascimento: [ person?.dataNascimento ? person.dataNascimento : '' , Validators.required],
      rg: [person?.rg ? person.rg : '' , Validators.required],
      cpf: [person?.cpf ? person.cpf : '' , Validators.required],
      cep: [person?.cep ? person.cep : '' , Validators.required],
      endereco: [person?.endereco ? person.endereco : '' , Validators.required],
      tel: person?.tel ? person.tel : '',
      cel: [person?.cel ? person.cel : '' , Validators.required],
      email: [person?.email ? person.email : '' , Validators.required]
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
