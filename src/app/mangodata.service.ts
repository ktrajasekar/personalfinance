import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MangodataService {

  constructor(private http: HttpClientModule) { }


  getAllposts()
{
	return this.http.get('/api/posts')
	.map(res => res.json());
}
}
