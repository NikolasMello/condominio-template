import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IconDefinition, faFloppyDisk, faXmark, faPenToSquare, faTrash, faEraser, faSearch, faAdd, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { iPerson } from 'src/app/interfaces/Iperson';
import { dataMoradores, dataPersons } from 'src/app/mock/mock-data';
import Pagination from 'src/app/util/pagination';


@Component({
  selector: 'app-chat-moradores',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule ],
  templateUrl: './chat-moradores.component.html',
  styleUrls: ['./chat-moradores.component.css']
})
export default class ChatMoradoresComponent implements OnInit {

  faEraser: IconDefinition = faEraser;
  faPaperPlane: IconDefinition = faPaperPlane;
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
  activeid: number;
  personList:iPerson[] = dataMoradores;

  chat = [
    {
      operador: true,
      text: 'Olá Maria, tudo bem?',
      time: '10:10h'
    },
    {
      operador: false,
      text: 'Tudo certo.',
      time: '10:11h'
    },
    {
      operador: true,
      text: 'Você solicitou um serviço de entregas da amazon?',
      time: '10:12h'
    },
    {
      operador: false,
      text: 'Isso, solicitei, pode liberar por favor.',
      time: '10:13h'
    },
    {
      operador: true,
      text: 'OK, vou liberar',
      time: '10:14h'
    }
  ]

  constructor(
    private fb: FormBuilder
  ){

  }

  ngOnInit(): void {
    this.createFormCadastroMorador();
    this.createFormFiltro();
    this.activeid = dataMoradores[0].id;
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
      nome: ['' ],
      bloco: [''],
      apartamento: [''],
      email: ['']
    })
  }

  salvar(){

  }

  pesquisar(){

  }

  limpar(){
    this.formFiltro.reset();
  }

  verifyId(id: number):boolean{
    if(id === this.activeid){
      return true;
    } else {
      return false;
    }
  }

  setActiveChat(id: number){
    this.activeid = id;
  }


}
