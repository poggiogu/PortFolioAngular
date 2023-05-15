import { Component } from '@angular/core';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faGithub = faGithub;
  
   

  constructor(
    public authService: AutenticacionService
  ){};

  ngOnInit(): void {    
  };




  

}
