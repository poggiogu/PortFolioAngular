import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Exp } from 'src/app/Exp';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { EXPS } from 'src/app/MockExp';

@Component({
  selector: 'app-exp-item',
  templateUrl: './exp-item.component.html',
  styleUrls: ['./exp-item.component.css']
})

export class ExpItemComponent implements OnInit {
  
  @Input() exp:Exp = EXPS[0];
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

