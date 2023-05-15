import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent {
  //form es el nombre del formgroup para ser llamado desde template
  form:FormGroup;
  //inyectamos os servicios en el constructor
  constructor(private formBuilder: FormBuilder, private autenticacionService:AutenticacionService) {
  
  this.form = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }              
    
  ngOnInit(): void {
  }

  get Password(){
      return this.form.get('password');
  }

  //metodo onEnviar que al presionar el boton enviar
  onEnviar(event: Event): void {
    event.preventDefault();

    console.log("enviado")
    
    const userName = this.form.get('userName')?.value;
    const password = this.form.get('password')?.value;

    this.autenticacionService.login(userName, password);
      
      // Resto de la lógica para mostrar u ocultar los botones de edición
    }
  }

