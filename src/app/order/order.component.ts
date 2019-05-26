import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radio-option.model';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { OrderService } from './order.service';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {


  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro' , value:"MON" },
    {label: 'Cartão de Débito' , value:"DEB" },
    {label: 'Cartão Refeição' , value:"REF" }
  ]

  delivery: number = 8;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  cartItems(){
   return this.orderService.cartItems();
  }

  increaseQty(item: CartItem){
    this.orderService.increaseQty(item);
    console.log(item)
  }

  decreaseQty(item: CartItem){
    this.orderService.decreaseQty(item);
  }

  remove(item: CartItem){
    this.orderService.remove(item);
  }

  itemsValue(): number{
    return this.orderService.itemsValue();
  }
}
