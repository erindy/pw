import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  password = '';
  length = 0;




  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwyz';
    const symbols = '!@##$%^&*()';

    let validChars ='';

    if (this.includeLetters) {
      validChars += letters;
       
    } 
    if (this.includeNumbers){
      validChars += numbers;
    }

    if (this.includeSymbols){
      validChars += symbols;
    }

    let generatedPassword = '';
    for (let i=0; i<this.length; i++){
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;


  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeLength(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    const parsedValue = parseInt(filterValue);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }
  
}
