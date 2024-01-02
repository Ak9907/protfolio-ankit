import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from './services/global.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private router: Router,
    private http : HttpClient,
    private globalService: GlobalService
   ) { }
  title = 'my-portfolio';
  data:any;
  api_url:any = "http://localhost:5000/api/hello";
  goToAbout(){
  this.router.navigate(["aboutMe"])
  }

  ngOnInit():void {
    this.getData();
   
  }
  getData(){
    this.http.get(this.api_url).subscribe((res)=>{
      console.log("res" + res)
    this.data = res;
   });
  }
}
