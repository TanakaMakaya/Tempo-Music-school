import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar";
import { Hero } from './hero/hero';


@Component({
  selector: 'app-root',
  imports: [NavbarComponent, Hero],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tempoM';
}
