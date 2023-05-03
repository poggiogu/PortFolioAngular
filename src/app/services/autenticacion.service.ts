import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  //url de nuestra api de autenticacion
  url= "http://npinti.ddns.net:9008/api/auth/login"
  
  //objeto donde llamamos nuestro observable, siempre hay que inicializar el behavior
  //subject porque éste siempre devuelve un estado a diferencia de los observables comunes.
  currentUserSubject: BehaviorSubject<any>;

  //como http es un servicio lo llamamos en el constructor
  constructor(private http:HttpClient) {  
    console.log("El servicio de autenticacion está corriendo.")

    //inicializacion del BehaviorSubject!, puede ser current user o cualquier nombre, 
    this.currentUserSubject= new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'));
  }
  //en iniciar sesion se hace la llamada a la API
  IniciarSesion(credenciales:any):Observable<any>{
    
    //el metodo pipe lo que hace es encadenar operadores realizar acciones antes de retornar la respuesta
    //en este caso usamos el metodo 'map'
    return this.http.post(this.url, credenciales).pipe(map(data=>{
      
      //llevamos al storage la data(lo que nos devuele la api)---> el TOKEN
      //el storage es un objeto que nos permite almacenar informacion en el navegador 
      //sin la necesidad de requerirlo a la base de datos, en este caso sessionStorage
      sessionStorage.setItem('currentUser', JSON.stringify(data));//lo almacena en una cadena con estructura de json.
      this.currentUserSubject.next(data);
      return data;
    } ))
  }

  get UsuarioAutenticado ()
  {
    return this.currentUserSubject.value;
  }

}
