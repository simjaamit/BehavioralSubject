import { Component, OnInit} from '@angular/core';
import { DataService } from "../services/data.service";

@Component({
  selector: 'app-child',
  template: `<div class="notification is-primary">
            <h3>Child</h3>
            Message : {{message}}
            </div>`,
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit{

message : string;
  constructor(private data : DataService) {}

ngOnInit(){
this.data.currentMessage.subscribe(message => this.message = message)
}
  

}