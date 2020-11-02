import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styles: [
  ]
})
export class BindingComponent implements OnInit {
  titre : string = "Demo du data Binding Interpolation abcd ";

  status : boolean = false;

  nom : string ="Nadhem Bel Hadj";
  
  constructor() { }

  ngOnInit(): void {
  }

  changerTitre()
  {
    this.titre = "New Title !";
  }

}
