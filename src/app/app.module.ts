import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { SkillBarsComponent } from './components/skill-bars/skill-bars.component';
import { Error404Component } from './components/error404/error404.component';
import { FooterComponent } from './components/footer/footer.component';
import { IntroComponent } from './components/intro/intro.component';
import { ExpComponent } from './components/experience/exp/exp.component';
import { AddExpComponent } from './components/experience/add-exp/add-exp.component';
import { ExpItemComponent } from './components/experience/exp-item/exp-item.component';
import { AboutComponent } from './components/about/about.component';
import { ExperiencesHeaderComponent } from './components/experience/experiences-header/experiences-header.component';
import { ExperiencesHeaderButtonComponent } from './components/experience/experiences-header-button/experiences-header-button.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { WorkEduComponent } from './components/work-edu/work-edu.component';
import { EduComponent } from './components/education/edu/edu.component';
import { EduItemComponent } from './components/education/edu-item/edu-item.component';
import { AddEduComponent } from './components/education/add-edu/add-edu.component';
import { EducationHeaderComponent } from './components/education/education-header/education-header.component';
import { EducationHeaderButtonComponent } from './components/education/education-header-button/education-header-button.component';
import { SorryComponent } from './components/sorry/sorry.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';

const appRoutes: Routes = [
  {path: 'portfolio', component : PortfolioComponent},
  {path: 'sorry', component: SorryComponent},
  {path: '**', component: Error404Component},
  {path: 'iniciar-sesion', component: IniciarSesionComponent},
  {path: '', redirectTo:'portfolio', pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarrouselComponent,
    SkillBarsComponent,
    Error404Component,
    FooterComponent,
    IntroComponent,
    ExpComponent,
    AddExpComponent,
    ExpItemComponent,
    AboutComponent,
    ExperiencesHeaderComponent,
    ExperiencesHeaderButtonComponent,
    PortfolioComponent,
    WorkEduComponent,
    EduComponent,
    EduItemComponent,
    AddEduComponent,
    EducationHeaderComponent,
    EducationHeaderButtonComponent,
    SorryComponent,
    IniciarSesionComponent,
    LoginButtonComponent,
    ProyectosComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing:true}),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
