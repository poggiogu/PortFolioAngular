import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Error404Component } from './components/error404/error404.component';
import { FooterComponent } from './components/footer/footer.component';
import { IntroComponent } from './components/intro/intro.component';
import { ExpComponent } from './components/experience/exp/exp.component';
import { AddExpComponent } from './components/experience/add-exp/add-exp.component';
import { ExpItemComponent } from './components/experience/exp-item/exp-item.component';
import { AboutComponent } from './components/about/about.component';
import { ExperiencesHeaderButtonComponent } from './components/experience/experiences-header-button/experiences-header-button.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { EduComponent } from './components/education/edu/edu.component';
import { EduItemComponent } from './components/education/edu-item/edu-item.component';
import { AddEduComponent } from './components/education/add-edu/add-edu.component';
import { EducationHeaderButtonComponent } from './components/education/education-header-button/education-header-button.component';
import { SorryComponent } from './components/sorry/sorry.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { ProyectosComponent } from './components/Proyects/proyectos/proyectos.component';
import { ProyectoComponent } from './components/Proyects/proyecto-item/proyecto.component';
import { AddProyectoBtnComponent } from './components/Proyects/add-proyecto-btn/add-proyecto-btn.component';
import { ProyectoElementComponent } from './components/Proyects/proy/proyecto-element.component';
import { AddProyectComponent } from './components/Proyects/add-proyect/add-proyect.component';
import { ExperienciasLaboralesComponent } from './components/experience/experiencias-laborales/experiencias-laborales.component';
import { FormacionCursosComponent } from './components/education/formacion-cursos/formacion-cursos.component';
import { SkillsComponent } from './components/skills/hardSkills/skills.component';
import { HardSkillItemComponent } from './components/skills/hard-skill-item/hard-skill-item.component';
import { BtnHardComponent } from './components/skills/btn-hard/btn-hard.component';
import { AddHardComponent } from './components/skills/add-hard/add-hard.component';
import { HardComponent } from './components/skills/hard/hard.component';
import { SoftSkillsComponent } from './components/soft-skills/soft-skills.component';
import { IdiomasComponent } from './components/idiomas/idiomas.component';
import { EditProyectComponent } from './components/Proyects/edit-proyect/edit-proyect.component';
import { EditHardSkillComponent } from './components/skills/edit-hard-skill/edit-hard-skill.component';
import { EditEduComponent } from './components/education/edit-edu/edit-edu.component';
import { EditExpComponent } from './components/experience/edit-exp/edit-exp.component';


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
    Error404Component,
    FooterComponent,
    IntroComponent,
    ExpComponent,
    AddExpComponent,
    ExpItemComponent,
    AboutComponent,
    ExperiencesHeaderButtonComponent,
    PortfolioComponent,
    EduComponent,
    EduItemComponent,
    AddEduComponent,
    EducationHeaderButtonComponent,
    SorryComponent,
    IniciarSesionComponent,
    LoginButtonComponent,
    ProyectosComponent,
    ProyectoComponent,
    AddProyectoBtnComponent,
    ProyectoElementComponent,
    AddProyectComponent,
    ExperienciasLaboralesComponent,
    FormacionCursosComponent,
    SkillsComponent,
    HardSkillItemComponent,
    BtnHardComponent,
    AddHardComponent,
    HardComponent,
    SoftSkillsComponent,
    IdiomasComponent,
    EditProyectComponent,
    EditHardSkillComponent,
    EditEduComponent,
    EditExpComponent,
],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing:true}),
    ReactiveFormsModule,
    // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
      
      
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }