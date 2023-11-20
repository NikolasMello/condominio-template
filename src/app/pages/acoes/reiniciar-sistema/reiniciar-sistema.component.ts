import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition, faRotate } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-reiniciar-sistema',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './reiniciar-sistema.component.html',
  styleUrls: ['./reiniciar-sistema.component.css']
})
export default  class ReiniciarSistemaComponent {

  faRotate: IconDefinition = faRotate;

  restart(){
    
  }

}
