import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-open-model',
  templateUrl: './open-model.component.html',
  styleUrls: ['./open-model.component.css']
})

export class OpenModelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  openModel(myModel){
   // modalService.open(myModel)
  }

}
