import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parent-child',
  templateUrl: './parent-child.component.html',
  styleUrls: ['./parent-child.component.css']
})
export class ParentChildComponent implements OnInit {
   
   @Output() notify :EventEmitter<String> = new EventEmitter <String>();
  constructor() { }
  @Input() products: any; 
  @Input() headersArray: any; 
  isChecked=[]; showOptions : boolean;
  masterSelected:boolean;checklist:any;
  checkedList:any;

  ngOnInit() {
  }
  myMethod(des:any){
    alert(des);
    console.log(des);
    this.notify.emit(des);
    }



    onKeySearch(evt){
      console.log(evt);
      var sv = evt.currentTarget.value;
      var searchValue = sv.toLowerCase();
      var totlaList = this.products; var hed = this.headersArray;
      console.log(searchValue);
       const afterSerach = totlaList.filter(keyItem =>{
         console.log(keyItem); 
         var return_value = false;

         console.log(hed);
         hed.forEach(function(val,index) { 
          console.log(val);
          
         });
        //  if(keyItem.message.toLowerCase().includes(searchValue)){
        //    return true;
        //  }

       });
      //this.products = afterSerach;
    }
    checkUncheckAll() {
      debugger;
      for (var i = 0; i < this.products.length; i++) {
        this.products[i].isSelected = this.masterSelected;
      }
       this.getCheckedItemList();
    }
    isAllSelected() {
      debugger;
      this.masterSelected = this.products.every(function(item:any) {
          return item.isSelected == true;
        })
      this.getCheckedItemList();
    }
    getCheckedItemList(){
      debugger;
      this.showOptions = false;
      this.checkedList = [];
      for (var i = 0; i < this.products.length; i++) {
        if(this.products[i].isSelected)
        this.checkedList.push(this.products[i].id);
      }
     
      if(this.checkedList.length>0){
        this.showOptions = true;
      }
      this.checkedList = JSON.stringify(this.checkedList);
    }
    deleteRecords(){
      console.log(this.checkedList);
    }
 

}



