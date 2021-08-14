import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-type',
  templateUrl: './customer-type.component.html',
  styleUrls: ['./customer-type.component.scss']
})
export class CustomerTypeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public women(): void {
    console.log("Women");
  }
  
  public men(): void {
    console.log("Men");
  }
  
  public children(): void {
    console.log("Children");
  }

}
