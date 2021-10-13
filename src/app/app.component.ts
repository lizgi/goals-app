import { Component } from '@angular/core';
import { Goal } from './goal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
goals:Goal[]=[
{id:1, name:"watch series"},
{id:2, name:"pray and fast"},
{id:3, name:"live andlove"}

];
}
