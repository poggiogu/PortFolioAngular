import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { SorryComponent } from './components/Messages/sorry/sorry.component';
import { Error404Component } from './components/Messages/error404/error404.component';
import { IniciarSesionComponent } from './components/Inicio/iniciar-sesion/iniciar-sesion.component';
import { PortfolioSEComponent } from './components/sinEdicion/portfolio-se/portfolio-se.component';
import { AuthGuard } from './auth-guard.guard';
import { AboutComponent } from './components/Messages/about/about.component';

const routes: Routes = [
  {path: '', component : PortfolioSEComponent},
  {path: 'editable', component: PortfolioComponent, canActivate: [AuthGuard]}, 
  {path: 'sorry', component: SorryComponent},
  {path: 'iniciar-sesion', component: IniciarSesionComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component: Error404Component}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard] 
})
export class AppRoutingModule { }