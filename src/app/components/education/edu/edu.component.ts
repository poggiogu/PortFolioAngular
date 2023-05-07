import { Component, OnInit } from '@angular/core';
import { Edu } from 'src/app/Edu';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHandler } from '@angular/common/http';
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
    this.eduService.deleteEdu(edu)
    .subscribe( ()=> (
      this.edus = this.edus.filter ((e) => {
        return  e.id !== edu.id 
        })
    ))
  }

}
