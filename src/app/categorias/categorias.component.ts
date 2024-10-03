import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss'],
})
export class CategoriasComponent  implements OnInit {
//Arreglo para categorias
categorias=[
  {
  nombre:'Diseño',
  imagencate:'./assets/img/Diseño.jpg',
},
{
  nombre:'Desarollo',
  imagencate:'./assets/img/Desarrollo.jpg'
},
{
  nombre:'Marketing',
  imagencate:'./assets/img/Marketing.jpg'
},
{
  nombre:'Informatica y software',
  imagencate:'./assets/img/Informatica y software.jpg'
},
{
  nombre:'Desarrollo personal',
  imagencate:'./assets/img/Desarrollo personal.jpg'
},
{
  nombre:'Negocios',
  imagencate:'./assets/img/Negocios.jpg'
},
{
  nombre:'Fotografia',
  imagencate:'./assets/img/Fotografia.jpg'
},
{
  nombre:'Musica',
  imagencate:'./assets/img/Musica.jpg'
},

]
  constructor() { }

  ngOnInit() {}

}
