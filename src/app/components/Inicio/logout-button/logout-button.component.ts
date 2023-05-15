import { Component } from '@angular/core';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.css']
})
export class LogoutButtonComponent {

  faSignOut = faSignOut;

  constructor(
    private autenticacionService:AutenticacionService
  ){};

  ngOnInit(): void {
  };

  onLogOut():void{
    this.autenticacionService.logout();
  }

}