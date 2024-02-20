import { CommonModule, NgFor } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [FormsModule, NgFor, CommonModule]
})
export class AppComponent implements AfterViewInit{
  targetText = 'Hello World';
  userInput = '';

  @ViewChild('inputField') inputField!: ElementRef;

  ngAfterViewInit() {
    this.inputField.nativeElement.focus();
  }

  get targetTextArray(): {char: string, correct: boolean}[] {
    return this.targetText.split('').map((char, index) => {
      return {
        char: char,
        correct: this.userInput.length > index && this.userInput[index] === char
      };
    });
  }

  onInputChange() {
    if (this.userInput === this.targetText) {
        console.log('Completed typing correctly!');
    }
  }

}
