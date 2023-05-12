import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent {
  //form es el nombre del formgroup para ser llamado desde template
  form:FormGroup;
  //inyectamos os servicios en el constructor
  constructor(private formBuilder:FormBuilder, 
              private autenticacionService:AutenticacionService, 
              private ruta:Router){
                
    this.form=this.formBuilder.group(
      //especificar los form controls y validators
      {
        email: ['',[Validators.required,Validators.email]],
        password: ['',[Validators.required,Validators.minLength(8)]],
        deviceInfo:this.formBuilder.group({
          deviceId:["17867868768"],
          deviceType:["DEVICE_TYPE_ANDROID"],
          notificationToken:["67657575eececc34"]
        })
      }
    )
  }

  ngOnInit(): void {
  }

  get Email() {
      return this.form.get('email');
  }

  get Password(){
      return this.form.get('password');
  }

  //metodo onEnviar que al presionar el boton enviar
  onEnviar(event:Event){
    event.preventDefault;//previene el OnSubmit que viene por Default
    this.autenticacionService.IniciarSesion(this.form.value).subscribe(data=>{
      console.log("DATA: " + JSON.stringify(data));
      this.ruta.navigate(['/portfolio']);
    })
  }

}