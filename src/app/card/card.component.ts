import { Component, Input, input } from '@angular/core';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
  
})
export class CardComponent {
  @Input()
  person: any;
  delete (
    id: number
  )
  {
    console.log(id);
  }
  edit (
    person: any
  )
  {
    console.log(person);
  }
}
