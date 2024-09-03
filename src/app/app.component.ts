import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { NotFoundComponent } from './not-found/not-found.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavComponent,
    HomeComponent,
    ProductsComponent,
    NotFoundComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'fourthAngular';
  currentPage: string = '';

  onNavigate(page: string) {
    this.currentPage = page;
  }
}
