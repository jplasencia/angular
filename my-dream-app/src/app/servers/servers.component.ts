import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = true;
  serverCreationStatus = "No Server was created";
  serverName = '';

  constructor() { 
    // setTimeout(() => {
    //   this.allowNewServer = true;
    // },2000);

  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus = this.serverName + ' Server was created';
  }

  onUpdateServerName(event: Event){
    this.serverName = event.target.value;
  }

}
