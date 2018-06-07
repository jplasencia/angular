import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // newServerName = '';
  // newServerContent = '';
  @Output() serverCreated  = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @ViewChild('serveContentInput') serverContentInput: ElementRef;


  constructor() { }

  ngOnInit() {
  }


  onAddServer(nameInput: HTMLInputElement) {
    // console.log(this.serverContentInput);
   this.serverCreated.emit({
    serverName: nameInput.value, 
    serverContent: this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
  //   this.blueprintCreated
  //   .emit({serverName: nameInput.value, serverContent: this.newServerContent});
  // }

}
