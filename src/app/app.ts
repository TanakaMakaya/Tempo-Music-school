import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar";


@Component({
  selector: 'app-root',
  imports: [NavbarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'tempoM';
}
