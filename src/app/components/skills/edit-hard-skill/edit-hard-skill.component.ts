import { Component, Input} from '@angular/core';
import { HardSkillServiceService } from 'src/app/services/hard-skill-service.service';
import { iHardSkill } from 'src/app/iHardSkill';


@Component({
  selector: 'app-edit-hard-skill',
  templateUrl: './edit-hard-skill.component.html',
  styleUrls: ['./edit-hard-skill.component.css']
})
export class EditHardSkillComponent {

  @Input() hardSkill : iHardSkill = {id:0, titulo:"", color:"", porcentaje:"", imagen:""};

  constructor( 
    private hardService : HardSkillServiceService 
  ) {}
  
  ngOnInit (): void { }

  onSubmit() {
    const updatedSkill: iHardSkill = {
      id: this.hardSkill.id,
      titulo: this.hardSkill.titulo,
      color: this.hardSkill.color,
      porcentaje: this.hardSkill.porcentaje,
      imagen: this.hardSkill.imagen
    };
  
    this.hardService.updateHardSkill(updatedSkill).subscribe(
      () => {
        console.log("Edición Exitosa!!");
      },
      (error) => {
        console.log("Hubo un ERROR al intentar editar");
      }
    );
}
}