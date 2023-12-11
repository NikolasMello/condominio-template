import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IconDefinition, faFloppyDisk, faXmark, faPenToSquare, faTrash, faEraser, faSearch, faAdd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { iPerson } from 'src/app/interfaces/Iperson';
import { dataPersons } from 'src/app/mock/mock-data';
import Pagination from 'src/app/util/pagination';

@Component({
  selector: 'app-controle-entrada-saida',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, ReactiveFormsModule],
  templateUrl: './controle-entrada-saida.component.html',
  styleUrls: ['./controle-entrada-saida.component.css']
})
export default class ControleEntradaSaidaComponent implements OnInit {

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

  entradaESaida: any[] = [
    {nome: 'Alberto Ferreira', dtEntrada: '20/11/2023 - 10:06h', dtSaida: '20/11/2023 - 11:06h', portaria: 'Allan', autorizado: 'Vicente Paulo', endereco: "Bloco A, Ap 3"},
    {nome: 'Julia Antunes', dtEntrada: '20/11/2023 - 09:15h', dtSaida: '20/11/2023 - 11:03h', portaria: 'Allan', autorizado: 'Maria Oliveira', endereco: "Bloco B, Ap 6"},
    {nome: 'João Santos', dtEntrada: '20/11/2023 - 08:43h', dtSaida: '20/11/2023 - 09:15h', portaria: 'Allan', autorizado: 'José Prates', endereco: "Bloco C, Ap 11"},
    {nome: 'Cristian Douglas', dtEntrada: '19/11/2023 - 18:43h', dtSaida: '19/11/2023 - 20:55h', portaria: 'Sandra', autorizado: 'Beatriz Almeida', endereco: "Bloco B, Ap 14"},
    {nome: 'Mateus Magno', dtEntrada: '19/11/2023 - 17:03h', dtSaida: '19/11/2023 - 18:15h', portaria: 'Sandra', autorizado: 'Tatiane Prado', endereco: "Bloco D, Ap 3"},
    {nome: 'Giovanni Rocha', dtEntrada: '19/11/2023 - 17:00h', dtSaida: '19/11/2023 - 17:45h', portaria: 'Sandra', autorizado: 'Marcia Oliveira', endereco: "Bloco F, Ap 1"},
    {nome: 'Ariane Santos', dtEntrada: '19/11/2023 - 15:05h', dtSaida: '19/11/2023 - 17:12h', portaria: 'Sandra', autorizado: 'Pedro Paulo', endereco: "Bloco F, Ap 3"},
    {nome: 'Alberto Ferreira', dtEntrada: '20/11/2023 - 10:06h', dtSaida: '20/11/2023 - 11:06h', portaria: 'Allan', autorizado: 'Vicente Paulo', endereco: "Bloco B, Ap 2"},
    {nome: 'Julia Antunes', dtEntrada: '20/11/2023 - 09:15h', dtSaida: '20/11/2023 - 11:03h', portaria: 'Allan', autorizado: 'Maria Oliveira', endereco: "Bloco A, Ap 5"},
    {nome: 'João Santos', dtEntrada: '20/11/2023 - 08:43h', dtSaida: '20/11/2023 - 09:15h', portaria: 'Allan', autorizado: 'José Prates', endereco: "Bloco A, Ap 22"},
    {nome: 'Cristian Douglas', dtEntrada: '19/11/2023 - 18:43h', dtSaida: '19/11/2023 - 20:55h', portaria: 'Sandra', autorizado: 'Beatriz Almeida', endereco: "Bloco C, Ap 21"},
    {nome: 'Mateus Magno', dtEntrada: '19/11/2023 - 17:03h', dtSaida: '19/11/2023 - 18:15h', portaria: 'Sandra', autorizado: 'Tatiane Prado', endereco: "Bloco C, Ap 14"},
    {nome: 'Giovanni Rocha', dtEntrada: '19/11/2023 - 17:00h', dtSaida: '19/11/2023 - 17:45h', portaria: 'Sandra', autorizado: 'Marcia Oliveira', endereco: "Bloco E, Ap 8"},
    {nome: 'Ariane Santos', dtEntrada: '19/11/2023 - 15:05h', dtSaida: '19/11/2023 - 17:12h', portaria: 'Sandra', autorizado: 'Pedro Paulo', endereco: "Bloco E, Ap 4"},        
  ];

  paginationPerson: Pagination<any> = new Pagination<any>(5, this.entradaESaida);
  personList:any[] = this.entradaESaida;

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
      rg: [person?.rg ? person.rg : '' , Validators.required],
      cep: [person?.cep ? person.cep : '' , Validators.required],
      endereco: [person?.endereco ? person.endereco : '' , Validators.required],
      cel: [person?.cel ? person.cel : '' , Validators.required],
    });
  }

  createFormFiltro(){
    this.formFiltro = this.fb.group({
      nome: ['' ],
      endereco: [''],
      dtEntrada: ['' ],
      dtSaida: ['']
    })
  }

  salvar(){

  }

  pesquisar(){

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
