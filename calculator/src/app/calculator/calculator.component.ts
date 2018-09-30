import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  // This is a temporary function that needs to be deleted
  // once the functions for each buttons are added. It was
  // necessary to include so that I could add a click handler
  // to each button in the design.
  // Michael (9/29/18, 8:15pm)
  replaceThis() {}
  

  ngOnInit() {
  }

}
