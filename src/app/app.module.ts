import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Error404Component } from './components/Messages/error404/error404.component';
import { FooterComponent } from './components/footer/footer.component';
import { IntroComponent } from './components/Inicio/intro/intro.component';
import { ExpComponent } from './components/experience/exp/exp.component';
import { AddExpComponent } from './components/experience/add-exp/add-exp.component';
import { ExpItemComponent } from './components/experience/exp-item/exp-item.component';
import { AboutComponent } from './components/Messages/about/about.component';
import { ExperiencesHeaderButtonComponent } from './components/experience/experiences-header-button/experiences-header-button.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { EduComponent } from './components/education/edu/edu.component';
import { EduItemComponent } from './components/education/edu-item/edu-item.component';
import { AddEduComponent } from './components/education/add-edu/add-edu.component';
import { EducationHeaderButtonComponent } from './components/education/education-header-button/education-header-button.component';
import { SorryComponent } from './components/Messages/sorry/sorry.component';
import { IniciarSesionComponent } from './components/Inicio/iniciar-sesion/iniciar-sesion.component';
import { LoginButtonComponent } from './components/Inicio/login-button/login-button.component';
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
import { EditarPerfilComponent } from './components/Inicio/editar-perfil/editar-perfil.component';
import { PerfilComponent } from './components/Inicio/perfil/perfil.component';
import { LogoutButtonComponent } from './components/Inicio/logout-button/logout-button.component';
import { AppRoutingModule } from './app-routing.module';
import { PortfolioSEComponent } from './components/sinEdicion/portfolio-se/portfolio-se.component';
import { PerfilSeComponent } from './components/sinEdicion/perfil/perfil-se/perfil-se.component';
import { IntroSeComponent } from './components/sinEdicion/perfil/intro-se/intro-se.component';
import { ExperienciasSeComponent } from './components/sinEdicion/Exp/experiencias-se/experiencias-se.component';
import { ExpSeComponent } from './components/sinEdicion/Exp/exp-se/exp-se.component';
import { ExpItemSeComponent } from './components/sinEdicion/Exp/exp-item-se/exp-item-se.component';
import { FormacionCursosSeComponent } from './components/sinEdicion/Edu/formacion-cursos-se/formacion-cursos-se.component';
import { EduSeComponent } from './components/sinEdicion/Edu/edu-se/edu-se.component';
import { EduItemSeComponent } from './components/sinEdicion/Edu/edu-item-se/edu-item-se.component';
import { ProyectosSeComponent } from './components/sinEdicion/Proyectos/proyectos-se/proyectos-se.component';
import { ProyectoElementSeComponent } from './components/sinEdicion/Proyectos/proyecto-element-se/proyecto-element-se.component';
import { ProyectoSeComponent } from './components/sinEdicion/Proyectos/proyecto-se/proyecto-se.component';
import { HardskillsSeComponent } from './components/sinEdicion/Tech-skills/hardskills-se/hardskills-se.component';
import { HardSkillItemSeComponent } from './components/sinEdicion/Tech-skills/hard-skill-item-se/hard-skill-item-se.component';
import { HardSkillSeComponent } from './components/sinEdicion/Tech-skills/hard-skill-se/hard-skill-se.component';




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
    EditarPerfilComponent,
    PerfilComponent,
    LogoutButtonComponent,
    PortfolioSEComponent,
    PerfilSeComponent,
    IntroSeComponent,
    ExperienciasSeComponent,
    ExpSeComponent,
    ExpItemSeComponent,
    FormacionCursosSeComponent,
    EduSeComponent,
    EduItemSeComponent,
    ProyectosSeComponent,
    ProyectoElementSeComponent,
    ProyectoSeComponent,
    HardskillsSeComponent,
    HardSkillItemSeComponent,
    HardSkillSeComponent
],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
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
      
      
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }