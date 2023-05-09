import { Component, OnInit } from '@angular/core';
import { iHardSkill } from 'src/app/iHardSkill';
import { HardSkillServiceService } from 'src/app/services/hard-skill-service.service';

@Component({
  selector: 'app-hard',
  templateUrl: './hard.component.html',
  styleUrls: ['./hard.component.css']
})
export class HardComponent implements OnInit{

  hardSkills : iHardSkill[] = [];

  constructor(
    private hardSkillService : HardSkillServiceService
  ) {}
  
  ngOnInit(): void { 
    this.hardSkillService.getHardSkills().subscribe((hardSkills) => 
    (this.hardSkills = hardSkills)); //método subscribe de los observables
  }

  deleteSkill(hardSkill : iHardSkill) {
    console.log("deleteSkill del componente hard se ha llamado!")
    this.hardSkillService.deletehardSkill(hardSkill)
    .subscribe( ()=> (
      this.hardSkills = this.hardSkills.filter ((e) => {
        return  e.id !== hardSkill.id 
        })
    ))
  }

}