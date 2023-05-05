import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Edu } from 'src/app/Edu';
import { EduService } from 'src/app/services/edu.service';
import { Subscription } from 'rxjs';
import { EduUiService } from 'src/app/services/edu-ui.service';

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
  edus:Edu[] = [];
  showAddEdu: boolean = false;
  subscription?: Subscription;
    
  constructor( 
    private eduService : EduService,
    private eduUiService : EduUiService
  ) {
    this.subscription = this.eduUiService.onToggle().subscribe(value => this.showAddEdu = value)
  };
  ngOnInit (): void {}
  
  //modified code
  getId() {
    this.eduService.getEdus().subscribe((edus: any) => 
    (this.id = this.edus.length)) 
    this.id += 2
  }  
  //modified code

  onSubmit(){
    if(this.title.length === 0){
      alert("Please add a course or degree item!")
      return
    }
    const {title, course, instLogoUrl, year, certificadoUrl, id} = this 
    const newEdu = {title, course, instLogoUrl, certificadoUrl, year, id};

    this.onAddEdu.emit(newEdu)
  }
}
