import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isNav = true;
  constructor(private ar : ActivatedRoute) { }

  ngOnInit() {
    alert(JSON.stringify(this.ar.snapshot.paramMap))
      //this.isNav = false;
      //alert();
    
  
  }
}
