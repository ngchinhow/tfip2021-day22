import { Component } from '@angular/core';

type item = {
  uri: string,
  alt: string,
  count: number
};

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items: Map<string, item> = new Map<string, item>();

  addItem(item: string) {
    let itemObj: item | undefined = this.items.get(item);
    if (itemObj != undefined && itemObj.count) {
      itemObj.count++;
    } else {
      this.items.set(
        item,
        {
          'uri': 'assets/images/' + item + '.png',
          'alt': 'picture of ' + item,
          'count': 1
        }
      );
    }
  }

  removeFromCart(item: string) {
    let itemObj: item | undefined = this.items.get(item);
    if (itemObj != undefined && itemObj.count > 1) {
      itemObj.count--;
    } else {
      this.items.delete(item);
    }
  }
}
