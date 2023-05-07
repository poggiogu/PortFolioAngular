import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit{

  title:string = "src/HOLA_SOY_GUI/Full Stack Developer Jr._";
  text1:string = "";
  text2: string = "...Soy un apasionado de la tecnología, tengo excelente manejo del portugués y el inglés, pero principalmente me encantan los nuevos desafíos y seguir aprendiendo constantemente...";
  nombre: string = "Guillermo Poggioni"
  titulo: string = "Full Stack Developer Jr."
  constructor(){};

  ngOnInit(): void {};
  

}