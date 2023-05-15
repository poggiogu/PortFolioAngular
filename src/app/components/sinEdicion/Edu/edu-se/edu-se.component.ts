import { Component, OnInit } from '@angular/core';
import { Edu } from 'src/app/iEdu';
import { EduService } from 'src/app/services/edu.service';

@Component({
  selector: 'app-edu-se',
  templateUrl: './edu-se.component.html',
  styleUrls: ['./edu-se.component.css']
})
export class EduSeComponent {

  edus:Edu[] = [];

  constructor(
    private eduService : EduService
  ) {}
  
  ngOnInit(): void { 
    //como una promesa
    this.eduService.getEdus().subscribe((edus) => 
    (this.edus = edus)); //método subscribe de los observables
  }

}

