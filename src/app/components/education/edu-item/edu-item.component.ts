import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Edu } from 'src/app/iEdu';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-edu-item',
  templateUrl: './edu-item.component.html',
  styleUrls: ['./edu-item.component.css']
})
export class EduItemComponent implements OnInit {
  
  @Input() edu:Edu = {title: "", course: "" , year: "", instLogoUrl: "", certificadoUrl:"", id: 0, descripcion:""};
  
  @Output() onDeleteEdu : EventEmitter<Edu> = new EventEmitter()

  faTrash = faTrash;
  faPencil = faPencil;

  constructor () {}; 

  ngOnInit(): void {
    
  };

  onDelete(edu:Edu){
    console.log("onDelete del edu-item fue llamado!")
    this.onDeleteEdu.emit(edu)
  };   
}
