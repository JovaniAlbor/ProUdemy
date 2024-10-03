import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss'],
})
export class BusinessComponent  implements OnInit {
business=[
  {
titulobus:'Desarrolla las habilidades de tu equipo gracias a Udemy Business',
punto1: 'Acceso ilimitado a más de 27 000 de los mejores cursos de Udemy en cualquier momento y lugar',
punto2: 'Colección internacional de cursos en 14 idiomas',
punto3: 'Las certificaciones más populares en tecnología y empresas',
}
]
business2=[
{
  titulobus1:'Conviértete en instructor',
  punto11: 'Instructores de todo el mundo enseñan a millones de estudiantes en Udemy. Proporcionamos las herramientas y las habilidades para que enseñes lo que te apasiona.',
  }
]
  constructor() { }

  ngOnInit() {}
}
