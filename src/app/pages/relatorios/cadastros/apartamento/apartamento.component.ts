import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IconDefinition, faFloppyDisk, faXmark, faPenToSquare, faTrash, faEraser, faSearch, faAdd, faFilePdf, faFileExcel } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { iPerson } from 'src/app/interfaces/Iperson';
import { dataMoradores, dataPersons, pessoasRelatorio } from 'src/app/mock/mock-data';
import Pagination from 'src/app/util/pagination';
@Component({
  selector: 'app-apartamento',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, ReactiveFormsModule],
  templateUrl: './apartamento.component.html',
  styleUrls: ['./apartamento.component.css']
})
export default class ApartamentoComponent implements OnInit {

  faEraser: IconDefinition = faEraser;
  faSearch: IconDefinition = faSearch;
  faAdd: IconDefinition = faAdd;
  faTrash: IconDefinition = faTrash;
  faFilePdf: IconDefinition = faFilePdf;
  faFileExcel: IconDefinition = faFileExcel;
  faXmark: IconDefinition = faXmark;
  formCadastroMorador: FormGroup;
  formFiltro: FormGroup;

  update: boolean = false;
  create: boolean = false;
  filtro: boolean = true;

  apartmentList = [
    { id:1, bloco: 'A', apartamento: '6', status: 'Morada', proprietario: 'Luiz Sérgio', morador: 'Luiz Sérgio', preco: 'R$ 220.000,00'},
    { id:2, bloco: 'A', apartamento: '5', status: 'Alugado', proprietario: 'Carlos Correia', morador: 'Julia Santos', preco: 'R$ 240.000,00'},
    { id:3, bloco: 'A', apartamento: '4', status: 'Morada', proprietario: 'Ana Lúcia', morador: 'Ana Lúcia', preco: 'R$ 210.000,00'},
    { id:4, bloco: 'A', apartamento: '3', status: 'Alugado', proprietario: 'Luiz Sérgio', morador: 'Luana Souza', preco: 'R$ 220.000,00'},
    { id:5, bloco: 'A', apartamento: '2', status: 'Disponível', proprietario: ' -- ', morador: 'Vazio', preco: 'R$ 240.000,00'},
    { id:6, bloco: 'A', apartamento: '1', status: 'Disponível', proprietario: ' -- ', morador: 'Vazio', preco: 'R$ 220.000,00'},
  ]

  paginationApartment: Pagination<any> = new Pagination<any>(5, this.apartmentList);
  personList:any[] = this.apartmentList;

  constructor(
    private fb: FormBuilder
  ){

  }

  ngOnInit(): void {
    this.createFormCadastroMorador();
    this.createFormFiltro();
    this.paginationApartment.getPage(1);
    console.log('pages', this.paginationApartment)
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
      email: [person?.email ? person.email : '' , Validators.required],
      bloco: [person?.bloco ? person.bloco : '' , Validators.required],
      apartamento: [person?.apartamento ? person.apartamento : '' , Validators.required]
    });
  }

  createFormFiltro(){
    this.formFiltro = this.fb.group({
      bloco: ['' ],
      status: [''],
      proprietario: ['']
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
      this.paginationApartment.getPage(pageNumber);
    }
    
  }

}
