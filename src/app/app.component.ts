import { Component } from '@angular/core';
import { Link } from './link/link.model'; // Importa la clase Link
import { LinkComponent } from './link/link.component'; // Importa LinkComponent
import { CommonModule } from '@angular/common'; // Importa CommonModule




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule,LinkComponent] // Asegúrate de que LinkComponent esté importado aquí
})
export class AppComponent {

  links: Link[] ;

  constructor() {
    this.links =[
      new Link('Angular', 'http://angular.io', 10),
      new Link('James', 'http://fullstack.io', 5),
    ];
    console.log(this.links)
  }

  addLink(title: HTMLInputElement, link: HTMLInputElement) {
   this.links.push(new Link(title.value, link.value)); // Agrega el nuevo enlace
   title.value='';
   link.value= '';

   return false;

}


sortedLinks() {
  return this.links.sort((a: Link, b: Link) => b.votes - a.votes);
}

}