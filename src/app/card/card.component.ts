import { Component, Input, input } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
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

  editForm = new FormGroup({
    title: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  });

  constructor(private apiservice: ApiService) { }

  deleteProduct(id: number) {
    console.log('Usted está eliminando el producto: ', this.product.id);

    this.apiservice.deleteP(this.product.id)
      .subscribe((response: any) => {
        console.log('Producto eliminado correctamente:', response);

      }, (error: any) => {
        console.error('Error al eliminar producto:', error);
      });
  }

  openEditModal() {
    this.editForm.setValue({
      title: this.product.title,
      price: this.product.price,
      description: this.product.description
    });
    const modal = document.getElementById('editModal');
    if (modal) {
      modal.style.display = 'block';
    }
  }

  closeEditModal() {
    const modal = document.getElementById('editModal');
    if (modal) {
      modal.style.display = 'none';
    }
  }

  saveChanges() {
    const updatedProduct = {
      ...this.product,
      ...this.editForm.value
    };

    this.apiservice.updateProduct(this.product.id, updatedProduct).subscribe(response => {
      console.log('Producto actualizado:', response);
      Object.assign(this.product, updatedProduct);
      this.closeEditModal();
    }, error => {
      console.error('Error al actualizar el producto:', error);
    });
  }
}