import { Component, OnInit, Input } from '@angular/core';
import { Empleo} from '../Models/empleo';
import { EmpleoInmediato } from '../Models/EmpleoInmediato';
import { EmpleadosComponent } from '../empleados/empleados.component';

@Component({
  selector: 'app-empleos',
  templateUrl: './empleos.component.html',
  styleUrls: ['./empleos.component.css']
})
export class EmpleosComponent implements OnInit {

  empleos:Empleo[];

  empleosInmediatos:EmpleoInmediato[];

  constructor() {
  }

  ngOnInit() {
    this.empleosInmediatos = EmpleadosComponent.empleosInmediatos;
  }

 

}
