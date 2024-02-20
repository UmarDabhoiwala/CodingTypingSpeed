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
    @ViewChild('caret') caret!: ElementRef;
    @ViewChild('typingContainer') typingContainer!: ElementRef;  

    ngAfterViewInit() {
        this.inputField.nativeElement.focus();
    }

    get targetTextArray(): {char: string, correct: boolean, incorrect:boolean}[] {
        // Convert the target text into an array of characters
        let arr = this.targetText.split('').map((char, index) => {
        return {
            char: char,
            correct: this.userInput.length > index && this.userInput[index] === char,
            incorrect: this.userInput.length > index && this.userInput[index] !== char,
        };
        });
        return arr;
    }


    onInputChange() {
        if (this.userInput === this.targetText) {
            console.log('Completed typing correctly!');
        }

        const characterWidth = this.getCharacterWidth();
        const caretPosition = this.userInput.length * characterWidth;
        this.caret.nativeElement.style.left = `${caretPosition}px`;
        
    }

    getCharacterWidth(): number {
        // Create a temporary span element
        const span = document.createElement('span');
        // Apply the same font properties that your typing-container uses

        span.style.fontFamily = `'Courier New', Courier, monospace`;
        span.style.fontSize = '16px';
        span.style.visibility = 'hidden';
        span.textContent = 'm';
    
        // Append to the body to measure
        document.body.appendChild(span);
        const width = span.getBoundingClientRect().width;
        document.body.removeChild(span);
    
        return width;
    }

}
