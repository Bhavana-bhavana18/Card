import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { title } from 'process';
import { NgFor} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CardComponent,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  post = [
    {
      title: 'Neam tree',
      imageUrl:'neam-tree.jpg',
      username: 'nature',
      content: 'I saw this neam tree today'
    },
    {
      title: 'Snowy Mountain',
      imageUrl:'snowy-mountain.jpg',
      username: 'Mountainlover',
      content: 'Here is the piicture of snowy mountain'
    },
    {
      title: 'Mountain Bike',
      imageUrl:'mountain-bike.jpg',
      username: 'biking222',
      content: 'I did some biking today'
    },
    {
      title: 'School',
      imageUrl:'school.jpg',
      username: 'Mountainlover',
      content: 'Here is the picture of school'
    }
  ];
}
