import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-education-header-button',
  templateUrl: './education-header-button.component.html',
  styleUrls: ['./education-header-button.component.css']
})
export class EducationHeaderButtonComponent {

  @Input() text:string = "";
  @Input() color:string = "";
  @Output() btnClick = new EventEmitter();
  constructor () {}

  ngonInit(): void {}

  onClick() {
    this.btnClick.emit();
  }

}
