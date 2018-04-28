import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MangodataService {

  constructor(private http: Http) {}

  getAllposts()
{
	return this.http.get('http://localhost:3000/api/posts')
	.map(res => res.json());
}

postData(url, body){
	return this.http.post(url + body, httpOptions);
}

}
