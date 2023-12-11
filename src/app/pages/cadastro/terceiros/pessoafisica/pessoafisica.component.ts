import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IconDefinition, faFloppyDisk, faXmark, faPenToSquare, faTrash, faEraser, faSearch, faAdd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { iPerson } from 'src/app/interfaces/Iperson';
import { dataPersons, fictionalEnterprises, fictionalIndividuals, vehicles } from 'src/app/mock/mock-data';
import Pagination from 'src/app/util/pagination';

@Component({
  selector: 'app-pessoafisica',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule, FontAwesomeModule],
  templateUrl: './pessoafisica.component.html',
  styleUrls: ['./pessoafisica.component.css']
})
export default class PessoafisicaComponent implements OnInit {

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

  paginationPersons: Pagination<any> = new Pagination<any>(5, fictionalIndividuals);
  PersonsList:any[] = fictionalIndividuals;

  constructor(
    private fb: FormBuilder
  ){

  }

  ngOnInit(): void {
    this.createFormCadastroEmpresa();
    this.createFormFiltro();
    this.paginationPersons.getPage(1);

  }

  createFormCadastroEmpresa(data?: any){
    this.formCadastroMorador = this.fb.group({
      id: [ data?.id ? data.id : '' , Validators.required],
      name: [ data?.name ? data.name : '' , Validators.required],
      cpf: [ data?.cpf ? data.cpf : '' , Validators.required],
    });
  }

  createFormFiltro(){
    this.formFiltro = this.fb.group({
      name: ['' ],
      cpf: ['']
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

  editar(data: any){
    this.update = true;
    this.filtro = false;
    this.create = false;
    this.createFormCadastroEmpresa(data);
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
      this.paginationPersons.getPage(pageNumber);
    }
    
  }

}
