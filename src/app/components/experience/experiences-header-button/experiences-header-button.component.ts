import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-experiences-header-button',
  templateUrl: './experiences-header-button.component.html',
  styleUrls: ['./experiences-header-button.component.css']
})

export class ExperiencesHeaderButtonComponent {

  @Input() text:string = "";
  @Input() color:string = "";
  @Output() btnClick = new EventEmitter();
  constructor () {}

  ngonInit(): void {}

  onClick() {
    this.btnClick.emit();
  }

}
