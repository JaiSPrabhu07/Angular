import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DadComponent } from "./dad/dad.component";
import { PhasesComponent } from "./phases/phases.component";
import { SonComponent } from "./son/son.component";
import { ParentComponent } from "./parent/parent.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports : [RouterOutlet, ParentComponent],
  // imports: [RouterOutlet, DadComponent, PhasesComponent, SonComponent, ParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lifecycle';
}
