import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public isP = true;
  constructor(private ar : ActivatedRoute) { }

  ngOnInit() {
    // if(){
    //   this.isP = false;
      //alert(this.ar.snapshot.paramMap.has("/login"));
      this.ar.paramMap.subscribe((params : ParamMap)=>{alert(params.has("login"))})


  }

}
