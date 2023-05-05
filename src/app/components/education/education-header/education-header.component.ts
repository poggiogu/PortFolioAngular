import { Component } from '@angular/core';
import { EduUiService } from 'src/app/services/edu-ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-education-header',
  templateUrl: './education-header.component.html',
  styleUrls: ['./education-header.component.css']
})
export class EducationHeaderComponent {

  title: string = 'Formación y Certificaciones';
  showAddEdu : boolean = false;
  subscription? : Subscription;

  constructor (
    private eduUiService:EduUiService,
    private router:Router
  ) {
    this.subscription = this.eduUiService.onToggle().subscribe((value: boolean) => this.showAddEdu = value)
  };

  toggleAddEdu(): void {
    this.eduUiService.toggleAddEdu();
  };

  hasRoute(route:String) {
    return this.router.url === route;
  }

}
