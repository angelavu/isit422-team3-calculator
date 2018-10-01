import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css', '../../styles/app.scss']
})
export class CalculatorComponent implements OnInit {

  display = "0";
  memory = [];
  index = 0;
  new = true;

  constructor() { }

  //this method takes in numbers and or a period and displays it
  result(a) {
    if (this.new == true || this.display == '0' && a == 0 || this.display == '0' && a != 0) {
      if (a == "." && this.display =="0" ) {
        this.display = "0.";
      }else {
        this.display = a;
      }
    }else {
      this.display = this.display + "" + a;
    }
    this.new = false;
  }

  //this method takes in a string either +,-,x, or / 
  //and adds it to the current number and stores it
  op(o) {
    if (this.memory[0] == undefined) {
      if ( this.display != "0") {
        this.memory[this.index] = this.display + o;
        this.index++;
      }
    }else {
      this.memory[this.index] = this.display + o;
      this.index++;
    }
    this.new = true;
  }

  //this method calculates the expression depending on the selected operator
  compute() {
    this.memory[this.index] = this.display;
    var show = this.display;
      if (this.memory[0].length > 1) {
      var o = this.memory[0].charAt(this.memory[0].length-1);
      //takes away operator from number
      this.memory[0] = this.memory[0].substring(0, this.memory[0].length - 1);
      if (o == "+") {//+ addition
        var temp = parseFloat(this.memory[0]) + parseFloat(this.memory[1]);
        this.display = temp.toString();
      }
      if (o == "-") {//- subtraction
        var temp = parseFloat(this.memory[0]) - parseFloat(this.memory[1]);
        this.display = temp.toString();
      }
      if (o == "x") {//x multiplication
        var temp = parseFloat(this.memory[0]) * parseFloat(this.memory[1]);
        this.display = temp.toString();
      }
      if (o == "/") {// divsion
        var temp = parseFloat(this.memory[0]) / parseFloat(this.memory[1]);
        this.display = temp.toString();
      }
      this.index = 0;
      this.memory[1] = this.display;
      this.memory.splice(0,1);
      this.new = true;

    }else { 
      this.clear();
      this.display = show;
    }
  }

  //this method resets everything
  clear() {
    this.display = '0';
    this.index = 0;
    this.memory = [];
    this.new = true;
  }

  //this method deletes the last added number
  delete() {
    if (this.display != '0' && this.display.length > 1) {
    this.display = this.display.substring(0, this.display.length-1);
    }else {
      this.clear();
    }
  }
  

  ngOnInit() {
  }

}
