import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatProgressBarModule} from '@angular/material/progress-bar'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatProgressBarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
