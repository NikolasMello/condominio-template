import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition, faFloppyDisk, faXmark, faPenToSquare, faTrash, faEraser, faSearch, faAdd, } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-perfil-acessos',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, ReactiveFormsModule, FormsModule],
  templateUrl: './perfil-acessos.component.html',
  styleUrls: ['./perfil-acessos.component.css']
})
export default class PerfilAcessosComponent {

  form: FormGroup;
  faAdd: IconDefinition = faAdd;
  faFloppyDisk: IconDefinition = faFloppyDisk;
  faEraser: IconDefinition = faEraser;
  faTrash: IconDefinition = faTrash;

  perfis: any[] = [{nome: 'Administrador', dataInclusao: '20/09/2023', viewMoradorEVisitante: true, entradaESaida:true, viewFinanceiro: true},
  {nome: 'Portaria', dataInclusao: '20/09/2023',viewMoradorEVisitante: true, entradaESaida:true, viewFinanceiro: false},
  {nome: 'Vigilante', dataInclusao: '20/09/2023',viewMoradorEVisitante: true, entradaESaida:true, viewFinanceiro: false},
  ];

  constructor(
    private fb: FormBuilder
  ){

  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.form = this.fb.group({
      nome:'',
    })
  }

  cadastrar(){

  }

  limpar(){

  }


}
