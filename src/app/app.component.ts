import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterPreloader } from '@angular/router';
import { Router,Route } from '@angular/router';
import { RouterModule } from '@angular/router';
//import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,  FormsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'summer';
}
 