import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Exp } from 'src/app/Exp';
import { ExpService } from 'src/app/services/exp.service';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

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
  id : number = 0;
  exps:Exp[] = [];
  showAddExp: boolean = false;
  subscription?: Subscription;
    
  constructor( 
    private expService : ExpService,
    private uiService:UiService
  ) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddExp = value)
  };
  ngOnInit (): void {}
  
  //modified code
  getId() {
    this.expService.getExps().subscribe((exps: any) => 
    (this.id = this.exps.length)) 
    this.id += 2
  }  
  //modified code

  onSubmit(){
    if(this.text.length === 0){
      alert("Please add a working experience item!")
      return
    }
    const {text, dates, brandLogoUrl, id} = this 
    const newExp = {text, dates, brandLogoUrl, id};

    this.onAddExp.emit(newExp)

  }
}