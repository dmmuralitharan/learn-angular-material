import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonToggle, MatButtonToggleGroup } from '@angular/material/button-toggle';
import { MatDivider } from '@angular/material/divider';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule, MatButtonToggle, MatButtonToggleGroup, MatDivider, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'learn-angular-material';

  hideMultipleSelectionIndicator = signal(true)
  hideSingleSelectionIndicator = signal(true)

  selectedValuesByForms!: string
  selectedValuesByReactiveForms = new FormControl('')
}
