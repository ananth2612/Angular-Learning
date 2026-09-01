import { Component } from '@angular/core';
import { Header } from './header/header';
import { Sidebar } from './sidebar/sidebar';
import { Footer } from './footer/footer';
import { Dashboard } from './dashboard/dashboard';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Header, Sidebar, Footer, Dashboard, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}