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
  name = new FormControl('');

  constructor(private apiservice: ApiService) { }



  deleteProduct (id: number) {
    console.log('Delete button clicked for person:', this.product.id);

    this.apiservice.deleteP(this.product.id)
      .subscribe((response: any) => {
        console.log('Person deleted successfully:', response);
        
      }, (error: any) => {
        console.error('Error deleting person:', error);
      });
  }
  edit (
    product: any
  )
  {
    console.log(product);
  }
}
