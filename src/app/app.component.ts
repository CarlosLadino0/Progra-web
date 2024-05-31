import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { NgForOf } from '@angular/common';
import { ApiService } from './services/api.service';
import { NgIf } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, NgForOf, NgIf, ReactiveFormsModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  apiUrl = 'http://localhost:3000/products';
  products: any[] = [];
  tittle = 'ProyectoApis';
  product: any = [];

  price = new FormControl('');
  description = new FormControl('');
  title = new FormControl('');
  categoryId = new FormControl('');
  images = new FormControl('');

  constructor(private apiservice: ApiService) { }

  ngOnInit(): void {
    this.apiservice.getAllProducts().subscribe(data => {
      this.products = data;
      data.map((item: any) => {

        let imageStringify = JSON.stringify(item.images); // convertimos el array de imagenes a string
        let imageNoGarbage = imageStringify
        
        .substring(2, imageStringify.length - 2)
        .replaceAll('\\', ' ')
        .replaceAll('""', '"')
        .replaceAll('" "', '"')
        .replaceAll(' ', '');
        try {
        item.images = JSON.parse(imageNoGarbage);
        item.imagesActual = item.images[0];
        } catch (e) {}
        });
    });
  }

  onSummit(){
    const NewProduct = {
      title: this.title.value,
      price: this.price.value,
      description: this.description.value,
      images: [this.images.value],
      categoryId: this.categoryId.value
    }
    this.apiservice.createProduct(NewProduct).subscribe((data: any) => {
      console.log(data);
      this.product.push(data);
    })
  }
}
