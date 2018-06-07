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
  serverStatus : string  = '';
  servers = ["Server 1","Server 2", "Server 3", "Server 4"];
  displayParagraph = true;
  logTimes = [];


  ngOnInit() {
  }

  constructor(){
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  toggleShowText(){
    this.displayParagraph = this.displayParagraph == true ? false : true;
    this.logTimes.push(new Date());
    console.log('the click is working');
  }

  setUsername(event){
    this.value = event.target.value;
    if (this.value.length > 0) {
      this.userNameNotPresent = false;
    } else{
      this.userNameNotPresent = true;
    }
    console.log(this.value);
  }

  getColor(){
    if(this.serverStatus ===' online'){
      return 'red';
    } else{
      return 'green';
    }
  }

  setUserNameOnClick(){
    this.selectedUserName = this.userName;
    this.userName = '';
    this.userNameNotPresent = true;
  }



}
