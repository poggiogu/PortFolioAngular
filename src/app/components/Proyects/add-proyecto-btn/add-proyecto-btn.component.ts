import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-proyecto-btn',
  templateUrl: './add-proyecto-btn.component.html',
  styleUrls: ['./add-proyecto-btn.component.css']
})
export class AddProyectoBtnComponent {
  @Input() text:string = "add +";
  @Input() color:string = "green";
  @Output() btnClick = new EventEmitter();
  constructor () {}

  ngonInit(): void {}

  onClick() {
    this.btnClick.emit();
  }
}