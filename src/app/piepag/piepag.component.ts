import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piepag',
  templateUrl: './piepag.component.html',
  styleUrls: ['./piepag.component.scss'],
})
export class PiepagComponent  implements OnInit {
  piepag=[
    {
    subcat1:'udemy Business',
    subcat2:'Enseña en Udemy',
    subcat3:'Consigue la aplicacion',
    subcat4:'¿Quienes somos?',
    subcat5:'Ponte en contacto con nosotros',
    
  },
  {
    subcat1:'Empleo',
    subcat2:'Blog',
    subcat3:'Ayuda y asistencia',
    subcat4:'Afiliado',
    subcat5:'Inversores',
    
  },
  {
    subcat1:'Condiciones ',
    subcat2:'Politica de privacidad',
    subcat3:'Configuracion de cookies',
    subcat4:'Mapa del sitio',
    subcat5:'Declaracion de accesibilidad',
    
  },
  
  ]
  constructor() { }

  ngOnInit() {}

}
