import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Edu } from 'src/app/iEdu';
import { EduService } from 'src/app/services/edu.service';
@Component({
  selector: 'app-add-edu',
  templateUrl: './add-edu.component.html',
  styleUrls: ['./add-edu.component.css']
})
export class AddEduComponent {
  [x: string]: any;
  @Output() onAddEdu : EventEmitter<Edu> = new EventEmitter();
  title:string = "";
  course:string = "";
  year:string = "";
  instLogoUrl:string = "";
  certificadoUrl:string = "";
  id : number = 0;
  descripcion: string ="";
  
    
  constructor( 
    private eduService : EduService,
    ) {};
  ngOnInit (): void {}
  
  onSubmit(){
    if(this.title.length === 0){
      alert("Por favor agregar un curso!")
      return
    }
    const {title, course, instLogoUrl, year, certificadoUrl, id, descripcion} = this 
    const newEdu = {title, course, instLogoUrl, certificadoUrl, year, id, descripcion};

    this.onAddEdu.emit(newEdu)
  }
}