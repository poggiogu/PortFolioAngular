import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Exp } from 'src/app/iExp';

@Component({
  selector: 'app-exp-item-se',
  templateUrl: './exp-item-se.component.html',
  styleUrls: ['./exp-item-se.component.css']
})
export class ExpItemSeComponent {
  
  @Input() exp : Exp = {text: "", dates: "", brandLogoUrl:"", cargo:"", id: 0, descripcion: ""};

  constructor () {}; 

  ngOnInit(): void {
    
  };

}

