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

  // This is a temporary function that needs to be deleted
  // once the functions for each buttons are added. It was
  // necessary to include so that I could add a click handler
  // to each button in the design.
  // Michael (9/29/18, 8:15pm)
  replaceThis() {}

  result(a) {

    if (this.new == true || this.display == '0' && a == 0 || this.display == '0' && a != 0) {
      //this.clear();
      this.display = a;
    }else {
      this.display = this.display + "" + a;
    }
    this.new = false;
  }

  op(o) {
    //console.log(this.memory);
    if (this.memory[0] == undefined) {
      if ( this.display != "0") {
        this.memory[this.index] = this.display + o;
        this.index++;
        console.log(this.index);
      }
    }else {
      this.memory[this.index] = this.memory[this.index] + o;
      this.index++;
      //this.compute(o);
    }
    this.new = true;
  }

  compute() {
    console.log("index: " + this.index);
    console.log("memory: " + this.memory);
    console.log("display: " + this.display);
    this.memory[this.index] = this.display;
    var show = this.display;
      console.log("here");
      if (this.memory[0].length > 1) {
      var o = this.memory[0].charAt(this.memory[0].length-1);
      this.memory[0] = this.memory[0].substring(0, this.memory[0].length - 1);
      console.log(o);
      if (o == "+") {//+
        var temp = parseInt(this.memory[0]) + parseInt(this.memory[1]);
        this.display = temp.toString();
       //return this.display;
      }
      if (o == "-") {//-
        var temp = parseInt(this.memory[0]) - parseInt(this.memory[1]);
        this.display = temp.toString();
        //return this.display;
      }
      if (o == "x") {//x
        var temp = parseInt(this.memory[0]) * parseInt(this.memory[1]);
        this.display = temp.toString();
        //return this.display;
      }
      if (o == "/") {// div
        var temp = parseInt(this.memory[0]) / parseInt(this.memory[1]);
        this.display = temp.toString();
       // return this.display; 
      }
      this.index = 0;
      console.log("memory: " + this.memory);
      console.log("display: " + this.display);
      this.memory[1] = this.display;
      console.log("memory: " + this.memory);
      this.memory.splice(0,1);
      console.log("index: " + this.index);
      console.log("memory: " + this.memory);
      this.new = true;

    }else { 
      console.log("clearrrrrrr");
      this.clear();
      this.display = show;
    }
  }

  clear() {
    this.display = '0';
    this.index = 0;
    this.memory = [];
    this.new = true;
    console.log(this.memory);
  }

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
