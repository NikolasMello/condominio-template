import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IconDefinition, faFloppyDisk, faXmark, faPenToSquare, faTrash, faEraser, faSearch, faAdd } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { iPerson } from 'src/app/interfaces/Iperson';
import { dataPersons, vehicles } from 'src/app/mock/mock-data';
import Pagination from 'src/app/util/pagination';
import { IVehicle } from 'src/app/interfaces/IVehicle';

@Component({
  selector: 'app-veiculo',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule, FontAwesomeModule],
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.css']
})
export default class VeiculoComponent implements OnInit {

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

  paginationVehicle: Pagination<IVehicle> = new Pagination<IVehicle>(5, vehicles);
  vehicleList:IVehicle[] = vehicles;

  constructor(
    private fb: FormBuilder
  ){

  }

  ngOnInit(): void {
    this.createFormCadastroVehicle();
    this.createFormFiltro();
    this.paginationVehicle.getPage(1);
    console.log('pages', this.paginationVehicle)
  }

  createFormCadastroVehicle(vechicle?: IVehicle){
    this.formCadastroMorador = this.fb.group({
      id: [ vechicle?.id ? vechicle.id : '' , Validators.required],
      name: [ vechicle?.name ? vechicle.name : '' , Validators.required],
      type: [ vechicle?.type ? vechicle.type : '' , Validators.required],
      owner: [ vechicle?.owner ? vechicle.owner : '' , Validators.required],
      plate: [ vechicle?.plate ? vechicle.plate : '' , Validators.required]
    });
  }

  createFormFiltro(){
    this.formFiltro = this.fb.group({
      placa: ['' ],
      proprietario: [''],
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

  editar(vehicle: IVehicle){
    this.update = true;
    this.filtro = false;
    this.create = false;
    this.createFormCadastroVehicle(vehicle);
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
      this.paginationVehicle.getPage(pageNumber);
    }
    
  }

}
