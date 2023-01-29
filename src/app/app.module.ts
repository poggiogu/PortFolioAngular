import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavBrandButtonComponent } from './components/nav-brand-button/nav-brand-button.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SkillBarsComponent } from './components/skill-bars/skill-bars.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { FormacionComponent } from './components/formacion/formacion.component';
import { Error404Component } from './components/error404/error404.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavBrandButtonComponent,
    ContactCardComponent,
    CarrouselComponent,
    SkillBarsComponent,
    ExperienciaComponent,
    FormacionComponent,
    Error404Component,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
