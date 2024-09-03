import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() title: string = '';
  @Input() imagePath: string = '';
  @Input() price: number = 0;
  @Input() discount: number = 0;
  @Input() isDiscounted: boolean = false;
  @Output() applyDiscount = new EventEmitter<void>();
  @Output() deleteCard = new EventEmitter<void>(); // Emit when delete is triggered

  get discountedPrice(): number {
    return this.price - (this.price * this.discount) / 100;
  }

  onEdit() {
    this.applyDiscount.emit();
  }

  onDelete() {
    this.deleteCard.emit(); // Emit delete event
  }
}
