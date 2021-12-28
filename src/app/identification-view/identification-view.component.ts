import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-identification-view',
  templateUrl: './identification-view.component.html',
  styleUrls: ['./identification-view.component.css']
})
export class IdentificationViewComponent implements OnInit {

  constructor() { }

  name: string ="";

  ngOnInit(): void {
  }

  enterKey(event:any){
    this.name=event.target.value;
  }

}
