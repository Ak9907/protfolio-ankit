import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  selectedIndex: string = '1';
  selectedImageNumber: any;
  resumeSec: boolean = true ;
  targetDiv: any = '';
  name:string ='';
  email: string ='';
  subject: string = '';
  fullmessage: string = '';
  Email: any;
  message: any;
  userdata:any;
  data:any;
  constructor(
   private router: Router,
   private http:HttpClient,
   private globalService: GlobalService
  ) { }

  ngOnInit(): void {
   this.router.navigate(["aboutMe"]);
      this.resumeSec = true;
      this.scrollToElement("home", 0);

}
  changeColor(selectedIndex:string){
    
    if(this.selectedIndex = selectedIndex){
       this.selectedIndex = selectedIndex;
    } else{
       this.selectedIndex = '1';
    }
    if(selectedIndex === '3'){
      this.router.navigate(["Resume"]);
      this.resumeSec = false;
    }
 }
 selectedImage(image:number){
    
    this.selectedImageNumber = image;
 }
 openResume(){
   this.selectedImageNumber = '3'
    this.router.navigate(["Resume"]);
    this.resumeSec = false;
 }
 scrollToElement(targetId: string, sourceDiv: number) {
   setTimeout(() => {
     this.targetDiv = document.getElementById(targetId);
     const key = this.targetDiv.offsetTop - sourceDiv - 110;
     window.scrollTo({
       top: key,
       behavior: "smooth",
     });
   }, 10);
 }

 sendMail(){
  this.Email.send({
    Host : "smtp.gmail.com",
    Username : "ankitagnihotri213@gmail.com",
    Password : "password",
    To : "ankitagnihotri213@gmail.com",
    From : this.email,
    Subject : this.subject,
    Body : this.fullmessage
}).then(
  this.message.alert(this.fullmessage)
);
 }
}
