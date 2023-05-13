import { Component } from '@angular/core';
import { iHardSkill } from 'src/app/iHardSkill';
import { HardSkillServiceService } from 'src/app/services/hard-skill-service.service';

@Component({
  selector: 'app-btn-hard',
  templateUrl: './btn-hard.component.html',
  styleUrls: ['./btn-hard.component.css']
})
export class BtnHardComponent {

  hardSkills : iHardSkill[] = [];
  
  constructor (
    private hardService : HardSkillServiceService
  ) {}

  ngOnInit(): void { 
   
  }
  
  addHardSkill(hardSkill : iHardSkill){
    this.hardService.addHardSkill(hardSkill).subscribe((hardSkill)=>(
      this.hardSkills.push(hardSkill)
    ))
  }      

}

