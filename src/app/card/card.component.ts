import { Component, Input, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
  
})
export class CardComponent {

  @Input()
  product: any;
  title: any

  price = new FormControl('');
  description = new FormControl('');
  titulo = new FormControl('');
  images = new FormControl('');

  constructor(private apiservice: ApiService) { }

  deleteProduct (id: number) {
    console.log('Usted está eliminando el producto: ', this.product.id);

    this.apiservice.deleteP(this.product.id)
      .subscribe((response: any) => {
        console.log('Producto eliminado correctamente:', response);
        
      }, (error: any) => {
        console.error('Error al eliminar producto:', error);
      }); 
  }

  edit (product: any) {
    const NewProduct = {
      title: this.titulo,
      price: this.price,
      description: this.description,
      images: ['https://placeimg.com/640/480/any'],
      categoryId: 1
    }
  }
}
