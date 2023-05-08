import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Exp } from 'src/app/iExp';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-exp-item',
  templateUrl: './exp-item.component.html',
  styleUrls: ['./exp-item.component.css']
})

export class ExpItemComponent implements OnInit {
  
  @Input() exp : Exp = {text: "", dates: "", brandLogoUrl:"", cargo:"", id: 0};
  
  @Output() onDeleteExp : EventEmitter<Exp> = new EventEmitter()

  faTrash = faTrash;
  faPencil = faPencil;

  constructor () {}; 

  ngOnInit(): void {
    
  };

  onDelete(exp:Exp){
    this.onDeleteExp.emit(exp)
  };   
}
