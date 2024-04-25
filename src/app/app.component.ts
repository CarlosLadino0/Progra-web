import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { NgForOf } from '@angular/common';
import { countReset } from 'console';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, NgForOf], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Progra-web';
  people = [
    {
    name: "Maria",
    country: "Colombia",
    },
    {
    name: "Alonso",
    country: "Perú"
    },
    {
    name: "Andres",
    country: "Ecuador"
    },
    {
    name: "Carlos",
    country: "Panama"
    },
    {
    name: "Beto",
    country: "Argentina"
    }
]
}
