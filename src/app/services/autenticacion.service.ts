import { Injectable } from '@angular/core';
import { Router, RouterModule } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
 
    isLoggedIn = false;
    auth : string = "";

    constructor(
      private router: Router
    ){}
  
    login(username: string, password: string): boolean {
      // Lógica de verificación de credenciales
      if (username === 'poggiogu' && password === 'YoProgramo31674183') {
        this.isLoggedIn = true;
        localStorage.setItem('isLoggedIn', 'true');
        console.log("logged-in")
        this.router.navigate(['/editable']);
        console.log("navegando a editable")
        return true;
        
      } else {
        console.log("error al intentar login")
        alert("algo salio mal, intentalo nuevamente");
        return false;
      }
    }
  
    logout(): void {
      this.isLoggedIn = false;
      localStorage.setItem('isLoggedIn', 'false');
      console.log("logged-out")
      this.router.navigate(['/']);

    }

    isLoggedInFn() : boolean {
        if( localStorage.getItem('isLoggedIn') === 'true'){
        return true;
      } else {
        return false;
      }
    }

}