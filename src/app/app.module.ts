import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavBrandButtonComponent } from './components/nav-brand-button/nav-brand-button.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { SkillBarsComponent } from './components/skill-bars/skill-bars.component';
import { FormacionComponent } from './components/formacion/formacion.component';
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

const appRoutes: Routes = [
  {path: '', component : PortfolioComponent},
  {path: 'card', component : ContactCardComponent},
  {path: 'about', component : AboutComponent},
  {path: '**', component: Error404Component}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavBrandButtonComponent,
    ContactCardComponent,
    CarrouselComponent,
    SkillBarsComponent,
    FormacionComponent,
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
    WorkEduComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing:true})  
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
