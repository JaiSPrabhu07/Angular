import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-son',
  standalone: true,
  imports: [],
  templateUrl: './son.component.html',
  styleUrl: './son.component.css'
})
export class SonComponent {
  _name!: string;
  constructor(){
    console.log("The son component was just instantiated.");
  }
  ngOnInit(){
    console.log("The son component is now fully initialized.");
  }
  @Input() set Name(name:string){
    this._name = (name && name.trim()) || "I am a son.";
  }
  get Name(){
    return this._name;
  }
}
