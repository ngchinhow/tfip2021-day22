import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {
  inventory: Array<string> = ['apple', 'kiwi', 'orange', 'lemon'];
  inventoryData: Array<Array<string>> = [];

  @Output() itemSelected = new EventEmitter<string>();

  constructor() {
    for (let item of this.inventory) {
      this.inventoryData.push(
        [
          'assets/images/' + item + '.png',
          'picture of ' + item,
          item
        ]
      )
    }
  }

  addToCart(item: string) {
    this.itemSelected.emit(item);
  }
}
