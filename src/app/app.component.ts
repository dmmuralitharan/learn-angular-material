import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatProgressSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  isSpinnerVisible = signal<boolean>(false)


  fetchDataFromDB() {
    this.isSpinnerVisible.set(true)
    
    setTimeout(() => {
      console.log("Data Fetched Successfully");
      
      this.isSpinnerVisible.set(false)
    }, 5000)
  }

}


