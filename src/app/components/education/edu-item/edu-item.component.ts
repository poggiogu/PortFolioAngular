import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Edu } from 'src/app/Edu';
import { faTimes } from '@fortawesome/free-solid-svg-icons'; 
import { EDUS } from 'src/app/MockExp';

@Component({
  selector: 'app-edu-item',
  templateUrl: './edu-item.component.html',
  styleUrls: ['./edu-item.component.css']
})
export class EduItemComponent implements OnInit {
  
  @Input() edu:Edu = EDUS[0];
  @Output() onDeleteEdu : EventEmitter<Edu> = new EventEmitter()

  faTimes = faTimes;

  constructor () {}; 

  ngOnInit(): void {
    
  };

  onDelete(edu:Edu){
    this.onDeleteEdu.emit(edu)
  };   
}
