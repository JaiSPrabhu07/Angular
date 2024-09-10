import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit {
  message: string = 'Component Intialized';

  ngOnInit(): void {
    console.log('Child Component Intialized');
    console.log(this.message);
  }
}
