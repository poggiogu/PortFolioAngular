import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit{

  title:string = "Hi, my name is Guillermo Poggioni, but everybody call´s me 'Gui'...";
  text1:string = "I´m a full stack Jr web developer from Córdoba, Argentina, and in this minimalistic"
  text2:string = "portfolio you´ll find some of my projects, education and working experience."
  text3: string = "I am the very proactive, motivated and fast learner developer that you won´t regreat to hire!!!"
  text4:string = "Hope you like my job, scroll down to check this out!"

  constructor(){};

  ngOnInit(): void {};
  

}

