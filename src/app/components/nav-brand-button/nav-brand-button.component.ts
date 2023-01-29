import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav-brand-button',
  templateUrl: './nav-brand-button.component.html',
  styleUrls: ['./nav-brand-button.component.css']
})
export class NavBrandButtonComponent implements OnInit{

  @Output() btnClick = new EventEmitter();

  constructor(){};

  ngOnInit(){};

  onClick() {
    this.btnClick.emit();
  }

}
