import { Component, OnInit } from '@angular/core';
import { Exp } from 'src/app/Exp';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ExpService } from 'src/app/services/exp.service';

@Component({
  selector: 'app-experiences-header-button',
  templateUrl: './experiences-header-button.component.html',
  styleUrls: ['./experiences-header-button.component.css']
})

export class ExperiencesHeaderButtonComponent implements OnInit{

  exps : Exp[] = [];
  
  constructor (private expService: ExpService) {}

  ngOnInit(): void { 
    //como una promesa
    this.expService.getExps().subscribe((exps) => 
    (this.exps = exps)); //método subscribe de los observables
  }
  
  addExp(exp : Exp){
    this.expService.addExp(exp).subscribe((exp)=>(
      this.exps.push(exp)
    ))
  }  
}