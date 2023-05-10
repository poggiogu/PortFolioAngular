import { Component, Input} from '@angular/core';
import { EduService } from 'src/app/services/edu.service';
import { Edu } from 'src/app/iEdu';

@Component({
  selector: 'app-edit-edu',
  templateUrl: './edit-edu.component.html',
  styleUrls: ['./edit-edu.component.css']
})
export class EditEduComponent {

  @Input() edu : Edu = {id:0, title:"", course:"", descripcion:"", year:"", instLogoUrl:"", certificadoUrl:""};

  constructor( 
    private eduService : EduService 
  ) {}
  
  ngOnInit (): void { }

  onSubmit() {
    const updatedEdu: Edu = {
      id: this.edu.id,
      title: this.edu.title,
      course: this.edu.course,
      descripcion: this.edu.descripcion,
      year: this.edu.year,
      instLogoUrl: this.edu.instLogoUrl,
      certificadoUrl: this.edu.certificadoUrl
    };
  
    this.eduService.updateEdu(updatedEdu).subscribe(
      () => {
        console.log("Edición Exitosa!!");
      },
      (error) => {
        console.log("Hubo un ERROR al intentar editar");
      }
    );
}

}