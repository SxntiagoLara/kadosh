import { Component } from '@angular/core';
import { RegisterComponent } from '../register/register.component';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RegisterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
