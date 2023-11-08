import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IconDefinition, faFloppyDisk, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-morador',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule, FontAwesomeModule ],
  templateUrl: './morador.component.html',
  styleUrls: ['./morador.component.css']
})
export default class MoradorComponent implements OnInit {

  faFloppyDisk: IconDefinition = faFloppyDisk;
  faXmark: IconDefinition = faXmark;
  formCadastroMorador: FormGroup;
  update: boolean = false;
  acao: boolean = true;

  constructor(
    private fb: FormBuilder
  ){

  }

  ngOnInit(): void {
    this.createFormCadastroMorador();
  }

  createFormCadastroMorador(){
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

  salvar(){

  }

}
