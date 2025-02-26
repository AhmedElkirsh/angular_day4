import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  @Output() navigateTo = new EventEmitter<string>();

  navigate(page: string) {
    this.navigateTo.emit(page);
  }
}
