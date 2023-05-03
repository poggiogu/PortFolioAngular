import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Edu } from 'src/app/Edu';
import { EDUS } from 'src/app/MockExp';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-edu-item',
  templateUrl: './edu-item.component.html',
  styleUrls: ['./edu-item.component.css']
})
export class EduItemComponent implements OnInit {
  
  @Input() edu:Edu = EDUS[0];
  @Output() onDeleteEdu : EventEmitter<Edu> = new EventEmitter()

  faTrash = faTrash;
  faPencil = faPencil;


  constructor () {}; 

  ngOnInit(): void {
    
  };

  onDelete(edu:Edu){
    this.onDeleteEdu.emit(edu)
  };   
}
