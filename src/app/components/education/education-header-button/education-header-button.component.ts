import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Edu } from 'src/app/iEdu';
import { EduService } from 'src/app/services/edu.service';

@Component({
  selector: 'app-education-header-button',
  templateUrl: './education-header-button.component.html',
  styleUrls: ['./education-header-button.component.css']
})
export class EducationHeaderButtonComponent implements OnInit{

  edus : Edu[] = [];
  
  constructor (
    private eduService: EduService,
    
  ) {}

  ngOnInit(): void { 
    //como una promesa
    this.eduService.getEdus().subscribe((edus) => 
    (this.edus = edus)); //método subscribe de los observables
  }
  
  addEdu(edu : Edu){
    this.eduService.addEdu(edu).subscribe((edu)=>(
      this.edus.push(edu)
      
    ))
    console.log("curso creado correctamente!");
    

  }  
}

