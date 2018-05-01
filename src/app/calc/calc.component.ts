import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { NgForm } from '@angular/forms';  
import 'rxjs/add/operator/map';
import { UUID } from 'angular2-uuid';

import { MongodataService } from '../mongodata.service'

class expenses {
constructor(
public expensesDate: string = '',
public expensesUser : string= '',
public expensesAmount: string= '',
public categoryList: string= '',
public expensesOtherNotes: string ='',
//public expensesID: string = ''
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
  public expensesID: string;
  constructor(private postsService: MongodataService, private http:Http) {}

  ngOnInit() {
   this.expensesID = UUID.UUID();
// this.postsService.getAllposts().subscribe(posts => {
//       this.posts = posts;
//     });
  }
  expensesSubmit(expencesForm:NgForm){
 	console.log(expencesForm.value);  
 	this.postsService.postData(this.url, expencesForm.value);
  }

}
