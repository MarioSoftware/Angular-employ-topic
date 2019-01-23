import { Component, OnInit } from '@angular/core';
import 'C:/AngularProyects/employ-topic/src/assets/scripts/empleados.js';
import { Empleo} from '../Models/empleo';
import { EmpleoInmediato } from '../Models/EmpleoInmediato';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  public static empleosInmediatos:EmpleoInmediato[]=[];
   public static pempleosFormales:Empleo[]=[];
  private empleo :EmpleoInmediato=new EmpleoInmediato();

  constructor() { 
     
  }

  ngOnInit() {
 
  }
  public AgregarEmpleoInmediato(){ 
    
    

     this.empleo.user="Mario ";
     this.empleo.descripcionTarea="";
     this.empleo.remuneracion="400";
     this.empleo.horasEstimadas="2";

     EmpleadosComponent.empleosInmediatos.push(this.empleo);
  
  }

}
