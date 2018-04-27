import { Component, OnInit } from '@angular/core';
import { MangodataService } from '../mangodata.service'



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
  posts: any = [];
  constructor(private postsService: MangodataService) { 

  }

  ngOnInit() {
  
this.postsService.getAllposts().subscribe(posts => {
      this.posts = posts;
    });
  }

}
