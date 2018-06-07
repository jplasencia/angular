import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  userName : string = '';
  value : string = '';
  userNameNotPresent : any  = true;
  selectedUserName : string = '';
  constructor() { }

  ngOnInit() {
  }

  setUsername(event){
    this.value = event.target.value;
    if(this.value.length > 0) {
      this.userNameNotPresent = false;
    }else{
      this.userNameNotPresent = true;
    }
    console.log(this.value);
  }

  setUserNameOnClick(){
    this.selectedUserName = this.userName;
    this.userName = '';
    this.userNameNotPresent = true;
  }



}
