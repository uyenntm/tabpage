import { Component } from '@angular/core';


import { CommonModule } from '@angular/common';  
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isProbleShow: true| false = true;
  isCheckInShow: true| false = false;
  isDetailsShow: true| false = false;
  isApprovalShow: true| false = false;
  openPage(pageName: string){
    this.isProbleShow = false;
    this.isCheckInShow = false;
    this.isDetailsShow = false;
    this.isApprovalShow = false;
    console.log("pageName:", pageName);

   switch(pageName){
    case "Problem":  default:{
      this.isProbleShow = true;
    }
    break;
    case "CheckIn":{
      this.isCheckInShow = true;
    }
    break;
    case "Details":{
      this.isDetailsShow = true;
    }
    break;
    case "Approvals":{
      this.isApprovalShow = true;
    }
    break;
   }
   console.log( this.isProbleShow,this.isCheckInShow,this.isDetailsShow,this.isApprovalShow);
    
  }
}
