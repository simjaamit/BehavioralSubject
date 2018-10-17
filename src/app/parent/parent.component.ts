import { Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-parent',
  template:`
            <h1>Parent</h1>
            Message : {{message}}
   <app-child (messageEvent)="receiveMessage($event)"></app-child>
            `,
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit{

message: string;
  constructor(private data : DataService) { }


  ngOnInit(){

this.data.currentMessage.subscribe(message => this.message  = message)
  }
 

}