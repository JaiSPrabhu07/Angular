import { Component } from '@angular/core';
import { SonComponent } from "../son/son.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dad',
  standalone: true,
  imports: [SonComponent, CommonModule],
  templateUrl: './dad.component.html',
  styleUrl: './dad.component.css'
})
export class DadComponent {
  message:string = "I am Dad";
  arrSonNames = ['Shri Ram','Sita Mata','Shri Lakshman','Pavan Putra Hanuman'];
  // arrSonNames = ['Jai','Shri','Ram'];
}
