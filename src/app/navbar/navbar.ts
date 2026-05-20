import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
  // No styleUrls needed — all styles via Tailwind
})
export class NavbarComponent {
  navLinks = [
    { label: 'Home', active: true },
    { label: 'Lessons', active: false },
    { label: 'About', active: false },
    { label: 'Contact', active: false },
  ];
}