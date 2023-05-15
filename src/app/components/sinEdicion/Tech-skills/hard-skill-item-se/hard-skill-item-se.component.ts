import { Component, Input } from '@angular/core';
import { iHardSkill } from 'src/app/iHardSkill';

@Component({
  selector: 'app-hard-skill-item-se',
  templateUrl: './hard-skill-item-se.component.html',
  styleUrls: ['./hard-skill-item-se.component.css']
})
export class HardSkillItemSeComponent {
  
  @Input() hardSkill:iHardSkill = {id:0, titulo:"", color:"", porcentaje:"", imagen:""};

  constructor () {}; 

  ngOnInit(): void {};

}
