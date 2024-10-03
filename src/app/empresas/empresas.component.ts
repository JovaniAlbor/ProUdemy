import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.scss'],
})
export class EmpresasComponent  implements OnInit {
// Arreglo de logos de empresas
empresas = [
  { nombre: 'Empresa 1', logo: 'assets/img/empresa1.png' },
  { nombre: 'Empresa 2', logo: 'assets/img/empresa2.png' },
  { nombre: 'Empresa 3', logo: 'assets/img/empresa3.png' },
  { nombre: 'Empresa 4', logo: 'assets/img/empresa4.png' },
  { nombre: 'Empresa 5', logo: 'assets/img/empresa5.png' },
  { nombre: 'Empresa 6', logo: 'assets/img/empresa6.png' },
  { nombre: 'Empresa 7', logo: 'assets/img/empresa7.png' },
  { nombre: 'Empresa 8', logo: 'assets/img/empresa8.png' }
  // Agrega más empresas si es necesario
];
  constructor() { }

  ngOnInit() {}

}
