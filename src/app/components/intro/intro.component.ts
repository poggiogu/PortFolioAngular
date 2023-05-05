import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit{

  title:string = "</Hola, soy Guille>";
  text1:string = "/Full Stack Developer Jr. de la provincia de Córdoba, Argentina, en este portfolio van a encontrar un poco de mi formación educativa, experiencias laborales y algunos de mis proyectos;";
  text2: string = "...Soy una persona muy adaptable a cualquier equipo y estilo de trabajo, aprendo muy rápidamente, soy autodidacta, tengo excelente manejo del portugués y el inglés, pero principalmente me encantan los nuevos desafíos y seguir aprendiendo constantemente...";
  nombre: string = "Guillermo Poggioni"
  titulo: string = "Full Stack Developer Jr."
  constructor(){};

  ngOnInit(): void {};
  

}