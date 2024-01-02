import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
targetDiv: any = '';

constructor(
  private router: Router
){

}
  ngOnInit():void{
  this.scrollToElement("resume",0);
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
  backToProfile(){
    this.router.navigate([""])
  }
  print(){
    window.print();
  }

}
