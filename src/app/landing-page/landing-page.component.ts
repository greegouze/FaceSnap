import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

  //j'injecte le router dans mon constructor comme pour un service
  constructor(private router: Router){}

  //je change de route programmatiquement, en gros à l'aide d'une fonction 
  //directement dans le TS grâce à la methode navigateByUrl()
  onContinue(): void {
    this.router.navigateByUrl('facesnaps')
  }
}
