import { Component, OnInit } from '@angular/core';
import { Edu } from 'src/app/iEdu';
import { EduService } from 'src/app/services/edu.service';

@Component({
  selector: 'app-edu',
  templateUrl: './edu.component.html',
  styleUrls: ['./edu.component.css']
})
export class EduComponent implements OnInit {
  
  edus:Edu[] = [];

  constructor(
    private eduService : EduService
  ) {}
  
  ngOnInit(): void { 
    //como una promesa
    this.eduService.getEdus().subscribe((edus) => 
    (this.edus = edus)); //método subscribe de los observables
  }

  deleteEdu(edu:Edu) {
    console.log("Delete edu de edu component fue llamado!")
    this.eduService.deleteEdu(edu)
    .subscribe( ()=> (
      this.edus = this.edus.filter ((e) => {
        return  e.id !== edu.id 
        })
    ))
  }

}
