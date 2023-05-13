import { Component, Output, EventEmitter } from '@angular/core';
import { HardSkillServiceService } from 'src/app/services/hard-skill-service.service';
import { iHardSkill } from 'src/app/iHardSkill';

@Component({
  selector: 'app-add-hard',
  templateUrl: './add-hard.component.html',
  styleUrls: ['./add-hard.component.css']
})
export class AddHardComponent {

  [x: string]: any;

  @Output() onAddSkill : EventEmitter<iHardSkill> = new EventEmitter();
  //inicializacion de las variables
  id:number = 0;
  titulo:string = "";
  color:string = "";
  porcentaje:string = "";
  imagen:string = "";
      
  constructor( private hardService : HardSkillServiceService ) {}
  
  ngOnInit (): void {}
  
  onSubmit(){
    if(this.titulo.length === 0){
      alert("debes agregar un nombre de Skill!")
      return
    }
    const { id, titulo, color, porcentaje, imagen } = this 
    const newSkill = { id, titulo, color, porcentaje, imagen };

    this.onAddSkill.emit(newSkill)

  }

}
