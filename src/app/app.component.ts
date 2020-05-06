import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bmicalc';
 kilograms: number;
  centimeters : number;
   calresult: number;

  calculate(){
    
      this.calresult = this.kilograms / Math.pow (this.centimeters/100,2)

  }

}
 // Formula: weight (lb) / [height (in)]2 x 703

  // BMI by dividing weight in pounds (lbs) by height in inches (in) squared and multiplying by a conversion factor of 703.
  
  // Example: Weight = 150 lbs, Height = 5’5″ (65″)
  //Calculation: [150 ÷ (65)2] x 703 = 24.96