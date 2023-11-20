import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition, faFloppyDisk, faXmark, faPenToSquare, faTrash, faEraser, faSearch, faAdd } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule, FontAwesomeModule],
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export default class PerfilComponent implements OnInit {

  form: FormGroup;
  faAdd: IconDefinition = faAdd;
  faEraser: IconDefinition = faEraser;
  faTrash: IconDefinition = faTrash;

  perfis: any[] = [{nome: 'Administrador', dataInclusao: '20/09/2023'}, {nome: 'Portaria', dataInclusao: '20/09/2023'}, {nome: 'Vigilante', dataInclusao: '20/09/2023'}, ];

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
