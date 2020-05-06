import { Component, OnInit } from '@angular/core';



@Component({

  selector: 'app-imperial-bmi-calc',

  templateUrl: './imperial-bmi-calc.component.html',

  styleUrls: ['./imperial-bmi-calc.component.css']

})

export class ImperialBmiCalcComponent implements OnInit {



  weightLB: number;



  heightIN: number;



  bmiImperial: number;



  constructor() { }



  ngOnInit(): void {

  }



  bodyMassIndexCalcImperial(): number {

    return this.bmiImperial = (this.weightLB * 507) / (this.heightIN * this.heightIN);

  }



}