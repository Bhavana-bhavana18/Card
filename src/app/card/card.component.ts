import { NgFor, NgIf} from '@angular/common';
import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  cardss:any;
  @Input() title ='';
  @Input() imageUrl ='';
  @Input() userName ='';
  @Input() content ='';
  
  constructor()
  {}

  
}
