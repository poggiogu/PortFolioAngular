import { Component, Input} from '@angular/core';
import { ExpService } from 'src/app/services/exp.service';
import { Exp } from 'src/app/iExp';

@Component({
  selector: 'app-edit-exp',
  templateUrl: './edit-exp.component.html',
  styleUrls: ['./edit-exp.component.css']
})
export class EditExpComponent {

  @Input() exp : Exp = {id:0, text:"", cargo:"", descripcion:"", dates:"", brandLogoUrl:""};

  constructor( 
    private expService : ExpService 
  ) {}
  
  ngOnInit (): void { }

  onSubmit() {
    const updatedExp: Exp = {
      id: this.exp.id,
      text: this.exp.text,
      cargo: this.exp.cargo,
      descripcion: this.exp.descripcion,
      dates: this.exp.dates,
      brandLogoUrl: this.exp.brandLogoUrl,
    };
  
    this.expService.updateExp(updatedExp).subscribe(
      () => {
        console.log("Edición Exitosa!!");
      },
      (error) => {
        console.log("Hubo un ERROR al intentar editar");
      }
    );
  }
}