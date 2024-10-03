import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destacados',
  templateUrl: './destacados.component.html',
  styleUrls: ['./destacados.component.scss'],
})
export class DestacadosComponent  implements OnInit {
destacados=[
  {
  titulocat:'Development',
  subcat:'Python',
  NumApren:'10,000 learners',
  subcat1:'Web development',
  NumApren1:'20,000 learners',
  subcat2:'Machine learning',
  NumApren2:'30,000 learners',
},
{
  titulocat:'Business',
  subcat:'Financial analysis',
  NumApren:'10,000 learners',
  subcat1:'SQL',
  NumApren1:'20,000 learners',
  subcat2:'PMP',
  NumApren2:'30,000 learners',
},
{
  titulocat:'IT and Software',
  subcat:'Amazon AWS',
  NumApren:'10,000 learners',
  subcat1:'Ethical Hacking',
  NumApren1:'20,000 learners',
  subcat2:'Cyber Security',
  NumApren2:'30,000 learners',
},
{
  titulocat:'Design',
  subcat:'Photoshop',
  NumApren:'10,000 learners',
  subcat1:'Graphic design',
  NumApren1:'20,000 learners',
  subcat2:'Drawing',
  NumApren2:'30,000 learners',
},
]
  constructor() { }

  ngOnInit() {}

}
