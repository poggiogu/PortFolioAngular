import { Component, OnInit } from '@angular/core';
import { Exp } from 'src/app/iExp';
import { ExpService } from 'src/app/services/exp.service';

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.css']
})
export class ExpComponent implements OnInit {
  
  exps:Exp[] = [];

  constructor(
    private expService : ExpService
  ) {}

  
  ngOnInit(): void { 
    //como una promesa
    this.expService.getExps().subscribe((exps) => 
    (this.exps = exps)); //método subscribe de los observables
  }

  deleteExp(exp:Exp) {
    this.expService.deleteExp(exp)
    .subscribe( ()=> (
      this.exps = this.exps.filter ((e) => {
        return  e.id !== exp.id 
        })
    ))
  }

  addExp(exp:Exp){
    this.expService.addExp(exp).subscribe((exp)=>(
      this.exps.push(exp)
    ))
  }
}


