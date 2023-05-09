import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { iHardSkill } from 'src/app/iHardSkill';

@Component({
  selector: 'app-hard-skill-item',
  templateUrl: './hard-skill-item.component.html',
  styleUrls: ['./hard-skill-item.component.css']
})
export class HardSkillItemComponent {

  @Input() hardSkill:iHardSkill = {id:0, titulo:"", color:"", porcentaje:"", imagen:""};

  @Output() onDeleteSkill : EventEmitter<iHardSkill> = new EventEmitter()

  faTrash = faTrash;
  faPencil = faPencil;

  constructor () {}; 

  ngOnInit(): void {};

  onDelete(hardSkill : iHardSkill){
    console.log("onDelete de hardSkill-item se ha llamado!")
    this.onDeleteSkill.emit(hardSkill)
  };   

}