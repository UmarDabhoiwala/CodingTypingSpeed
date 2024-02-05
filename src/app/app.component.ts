import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [FormsModule]
})
export class AppComponent {
  targetText = 'Hello World';
  userInput: string = "";

  onInputChange() {
    // Logic to handle user input
  }
}
