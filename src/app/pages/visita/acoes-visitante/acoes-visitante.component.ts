import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition, faFloppyDisk, faXmark, faPenToSquare, faTrash, faEraser, faSearch, faAdd } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-acoes-visitante',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, ReactiveFormsModule],
  templateUrl: './acoes-visitante.component.html',
  styleUrls: ['./acoes-visitante.component.css']
})
export default class AcoesVisitanteComponent implements OnInit {

  form: FormGroup;
  faAdd: IconDefinition = faAdd;
  faEraser: IconDefinition = faEraser;
  faTrash: IconDefinition = faTrash;

  perfis: any[] = [{nome: 'Visita', dataInclusao: '20/09/2023'}, {nome: 'Entrega - Ifood', dataInclusao: '20/09/2023'}, {nome: 'Entrega - Produto', dataInclusao: '20/09/2023'}, ];

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
