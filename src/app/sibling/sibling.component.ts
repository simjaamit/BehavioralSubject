import { Component, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-sibling',
  template: `
              <h1>Sibling</h1>
              {{message}}
  <button (click)="newMessage()" class="button">New Message</button>
              `,
  styleUrls: ['./sibling.component.css']
})
export class SiblingComponent implements OnInit {
message : string;
  constructor(private data : DataService) { }

  ngOnInit() {
 this.data.currentMessage.subscribe(message => this.message  = message)
  
  }

newMessage()
{
  this.data.changeMessage("Hello from sibling")
}
}