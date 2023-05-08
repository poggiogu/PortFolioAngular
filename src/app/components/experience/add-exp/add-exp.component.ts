import { Component, Output, EventEmitter } from '@angular/core';
import { Exp } from 'src/app/iExp';
import { ExpService } from 'src/app/services/exp.service';

@Component({
  selector: 'app-add-exp',
  templateUrl: './add-exp.component.html',
  styleUrls: ['./add-exp.component.css']
})

export class AddExpComponent {
  [x: string]: any;
  @Output() onAddExp : EventEmitter<Exp> = new EventEmitter();
  text:string = "";
  dates:string = "";
  brandLogoUrl:string = "";
  cargo:string = "";
  id : number = 0;
  descripcion:string = "";
      
  constructor( 
    private expService : ExpService,
    
  ) { };
  ngOnInit (): void {}
  
  onSubmit(){
    if(this.text.length === 0){
      alert("Por favor agregue una experiencia laboral!")
      return
    }
    const {text, dates, brandLogoUrl, cargo, id, descripcion} = this 
    const newExp = {text, dates, brandLogoUrl, cargo, id, descripcion};

    this.onAddExp.emit(newExp)

  }
}