import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-experiences-header',
  templateUrl: './experiences-header.component.html',
  styleUrls: ['./experiences-header.component.css']
})
export class ExperiencesHeaderComponent {

  title: string = 'Working Experience';
  showAddExp : boolean = false;
  subscription? : Subscription;

  constructor (
    private uiService:UiService,
    private router:Router
  ) {
    this.subscription = this.uiService.onToggle().subscribe((value: boolean) => this.showAddExp = value)
  };

  ngOnInit(): void {};

  toggleAddExp(): void {
    this.uiService.toggleAddExp();
  };

  hasRoute(route:String) {
    return this.router.url === route;
  }
}