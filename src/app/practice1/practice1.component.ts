import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice1',
  templateUrl: './practice1.component.html',
  styleUrls: ['./practice1.component.css']
})
export class Practice1Component implements OnInit {
  isOnline:string='offline'
  constructor() { 
    this.isOnline = Math.random()>0.5?'online':'offline';
    setTimeout(() => {
    this.allowMeToClick = true;
    }, 3000);
  }

  ngOnInit() {
  }
  allowMeToClick:boolean = false;
  serverStatus="Not yet created"; serverName='';
  serverCreated :boolean=false;
  createServer(){
    this.serverCreated = true;
    this.serverStatus = "You created Server";
  }
  onKeyUPP(evt){
      console.log(evt);
      this.serverName = evt.target.value;
  }
  getColor(){
    return this.isOnline ==='online' ? 'green':'red';
  }



}
