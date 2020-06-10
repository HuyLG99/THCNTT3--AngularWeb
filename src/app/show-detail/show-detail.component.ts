import { Component, OnInit } from '@angular/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';


@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.css']
})
export class ShowDetailComponent implements OnInit {

  mode: ProgressSpinnerMode = 'determinate';
  value = 50;
 

  constructor() { }

  ngOnInit(): void {
   
  }

  
  
  // value = 0;
  // testValue(){
  //   for(let i=0; i<100;i++){
  //     this.value=i;
  //   }
  // }
}
