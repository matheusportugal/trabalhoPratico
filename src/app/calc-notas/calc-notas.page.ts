import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-calc-notas',
  templateUrl: './calc-notas.page.html',
  styleUrls: ['./calc-notas.page.scss'],
})
export class CalcNotasPage implements OnInit {

  data: any;
  nota1: number;
  nota2: number;
  constante1 = 0.4;
  constante2 = 0.6;
  media = 0;
 
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.data = JSON.parse(params.special);
      }
    });
    console.log(this.nota1)
    console.log(this.nota2)
  }

  ngOnInit() {
  }

  calcMedia() {
    this.media = (this.nota1 * this.constante1) + (this.nota2 * this.constante2);
    console.log(this.media);
  }

}
