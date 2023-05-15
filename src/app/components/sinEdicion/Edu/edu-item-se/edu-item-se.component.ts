import { Component,  Input} from '@angular/core';
import { Edu } from 'src/app/iEdu';



@Component({
  selector: 'app-edu-item-se',
  templateUrl: './edu-item-se.component.html',
  styleUrls: ['./edu-item-se.component.css']
})
export class EduItemSeComponent {

  @Input() edu:Edu = {title: "", course: "" , year: "", instLogoUrl: "", certificadoUrl:"", id: 0, descripcion:""};

  constructor () {}; 

  ngOnInit(): void {
    
  };

}

