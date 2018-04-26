import { Component, OnInit } from '@angular/core';




class expenses {
constructor(
public expencesDate: string = '',
public expencesUser : string= '',
public expencesAmount: string= '',
public categoryList: string= ''

){}
}

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
 model : expenses = new expenses();

 categoryList: string[] = [
    'House Maintenance',
    'Travel',
    'Food & Groceries',
    'Others'
  ];
  constructor() { 

  }

  ngOnInit() {

  }

}
