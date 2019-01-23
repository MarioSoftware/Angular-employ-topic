import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { EmpleosComponent } from './empleos/empleos.component';

//Importamos modulo para enrutamiento
import { RouterModule, Route } from '@angular/router';
import { AptitudesComponent } from './aptitudes/aptitudes.component';
import { EmpleadosComponent } from './empleados/empleados.component';

const routes:Route[]=[
{path:'Empleos',component:EmpleosComponent},
{path:'Aptitudes',component:AptitudesComponent},
{path: 'Empleados',component:EmpleadosComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    EmpleosComponent,
    AptitudesComponent,
    EmpleadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes) //Importamos las rutas navegables
  ],
  providers: [],
  bootstrap: [AppComponent]
 
})
export class AppModule { }
