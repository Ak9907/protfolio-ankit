import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  api_url:any = "http://localhost:5000/api/hello";
  data: any;

  constructor(
    private http: HttpClient
  ) { }


}
