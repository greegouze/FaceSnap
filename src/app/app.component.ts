// Complétez vos connaissances sur Angular
import { Component, OnInit } from '@angular/core';
//map filter tap sont des opérateurs bas niveau (touche directement aux emisions)
import { Observable, filter, interval, map, tap } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit{

  //Déclare interval$ comme Observable qui émet des numbers
  //attention c'est l'émission finale qui définit le type de l'Observable global
  interval$!: Observable<string>
  
  ngOnInit(): void {
    //Tant qu'on ne soucri pas à un observable, il ne fait rien 
    //Si on souscri plusieurs fois à observable on creer de nouvelles instances de cette observable
   this.interval$ = interval(3000).pipe(
    //Pipe permet d'appliquer des opérateurs à un Observable
    filter(value => value % 3 === 0),
    //map(opérateur) permet de transformer les émissions d'un Observable
    map(value => value % 2 === 0 ? 
      `Je suis ${value} et je suis pair` :
      `Je suis ${value} et je suis impair`
      ),
      //tap permet d'ajouter des effet "secondaire" => c'est une fonction qui fait quelque chose
      //avec les emissions d'un Observable sans le modifier(ici log la value)
      tap(text => this.logger(text))
   )
  }

  logger(text: string): void {
    console.log(`Log: ${text}`); 
  }
  
}
