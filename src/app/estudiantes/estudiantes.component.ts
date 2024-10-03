import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.scss'],
})
export class EstudiantesComponent  implements OnInit {
//Arreglo lo que los estudiantes estan viendo
estudiantes=[
  {nombre:'Desde 0 hasta Desarrollador en Python',
    imagencurso:'./assets/img/python1.jpg',
    descripcion:'aqui va una breve descripcion del curso',
    puntuacion:'4,6★★★★★',
    precio:'179 MX'},
  {nombre:'Universidad python ',
      imagencurso:'./assets/img/python2.jpg',
      descripcion:'aqui va una breve descripcion del curso',
      puntuacion:'4,7★★★★★',
      precio:'179 MX'},
  {nombre:'Python para no matematicos',
        imagencurso:'./assets/img/python3.jpg',
        descripcion:'aqui va una breve descripcion del curso',
        puntuacion:'4,5★★★★★',
        precio:'229 MX'},
  {nombre:'Curso python: de principiante a avanzado',
          imagencurso:'./assets/img/python4.jpg',
          descripcion:'aqui va una breve descripcion del curso',
          puntuacion:'4,4★★★★',
          precio:'229 MX'},
]
  constructor() { }

  ngOnInit() {}

}
