import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class MangodataService {

  constructor(private http: Http) {

   }


  getAllposts()
{
	return this.http.get('http://localhost:3000/api/posts')
	.map(res => res.json());
}
}
