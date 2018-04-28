import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { NgForm } from '@angular/forms';  
import 'rxjs/add/operator/map';

import { MongodataService } from '../mongodata.service'

class expenses {
constructor(
public expensesDate: string = '',
public expensesUser : string= '',
public expensessAmount: string= '',
public categoryList: string= '',
public expensesOtherNotes: string =''
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
  posts: any = [];
  url: string='';
  constructor(private postsService: MongodataService, private http:Http) {}

  ngOnInit() {
  
this.postsService.getAllposts().subscribe(posts => {
      this.posts = posts;
    });
  }
  expensesSubmit(expencesForm:NgForm){
 	console.log(expencesForm.value);  
 	this.url = '';
 	this.postsService.postData(this.url, expencesForm.value);
  }

}
