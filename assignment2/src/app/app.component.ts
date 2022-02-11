import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isFilled =false;
  onStarClicked(){
    this.isFilled = !this.isFilled
  }
  
  title = 'assignment2';
  status= "bi-toggle2-off";
  onButtonClick(){
    if (this.status =="bi-toggle2-off"){
      this.status = "bi-toggle2-on";
    }
    else{
      this.status = "bi-toggle2-off";
    }
  }

}
