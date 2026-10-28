import { Component, signal, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './models/product';
import { ProductService } from './services/product.service';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('fake-store');

  products: Product[] = [];

  private productService = inject(ProductService);

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products =>{
       this.products = products;
    })
  }
}