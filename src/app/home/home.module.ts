import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { EmpresasComponent } from '../empresas/empresas.component';
import { SeleccioncursosComponent } from '../seleccioncursos/seleccioncursos.component';
import { EstudiantesComponent } from '../estudiantes/estudiantes.component';
import { CategoriasComponent } from '../categorias/categorias.component';
import { DestacadosComponent } from '../destacados/destacados.component';
import { BusinessComponent } from '../business/business.component';
import { PiepagComponent } from '../piepag/piepag.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,EmpresasComponent,SeleccioncursosComponent,EstudiantesComponent,CategoriasComponent,DestacadosComponent,BusinessComponent,PiepagComponent]
})
export class HomePageModule {}
