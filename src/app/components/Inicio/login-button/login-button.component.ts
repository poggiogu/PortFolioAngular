import { Component } from '@angular/core';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent {

  faSignIn = faSignIn;

  constructor(){};

  ngOnInit(): void {
  };

}
