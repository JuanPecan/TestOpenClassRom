import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'awesome app'
  isAuth = false;

  appareils = [
    {
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      name: 'Télévision',
      status: 'allumé'
    },
    {
      name: 'Ordinateur',
      status: 'éteint'
    },
  ]

  // appareilOne = 'Machine à laver';
  // appareilTwo = 'Télévision';
  // appareilThree = 'Ordinateur';


  constructor(){
    setTimeout(
      () => {
      this.isAuth = true;
    }, 5000);
  }

    onAllumer() {
    console.log('On allume tout !');
    }
}
 