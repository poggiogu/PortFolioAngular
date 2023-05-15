import { Component } from '@angular/core';
import { iHardSkill } from 'src/app/iHardSkill';
import { HardSkillServiceService } from 'src/app/services/hard-skill-service.service';

@Component({
  selector: 'app-hard-skill-se',
  templateUrl: './hard-skill-se.component.html',
  styleUrls: ['./hard-skill-se.component.css']
})
export class HardSkillSeComponent {

  hardSkills : iHardSkill[] = [];

  constructor(
    private hardSkillService : HardSkillServiceService
  ) {}
  
  ngOnInit(): void { 
    this.hardSkillService.getHardSkills().subscribe((hardSkills) => 
    (this.hardSkills = hardSkills)); //método subscribe de los observables
  }


}

