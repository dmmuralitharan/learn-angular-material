import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatBadgeModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  hideMessageBadge = signal<boolean>(false)
  matBadgeCount = signal<number>(20)

  readMessage(): void {
    // this.hideMessageBadge.set(true)
    // this.matBadgeCount.set(0)
    


    this.hideMessageBadge.set(!this.hideMessageBadge())
  }
}
