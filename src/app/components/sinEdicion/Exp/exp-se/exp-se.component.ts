import { Component } from '@angular/core';
import { Exp } from 'src/app/iExp';
import { ExpService } from 'src/app/services/exp.service';

@Component({
  selector: 'app-exp-se',
  templateUrl: './exp-se.component.html',
  styleUrls: ['./exp-se.component.css']
})
export class ExpSeComponent {
  exps:Exp[] = [];

  constructor(
    private expService : ExpService
  ) {}

  
  ngOnInit(): void { 
    //como una promesa
    this.expService.getExps().subscribe((exps) => 
    (this.exps = exps)); //método subscribe de los observables
  }


}


