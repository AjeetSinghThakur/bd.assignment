import { Component, Input, OnInit } from '@angular/core';
import { EventData } from '@app/models';

@Component({
  selector: 'qa-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  @Input() errorMessage: string;
  @Input() events: EventData[];

  constructor() { }

  ngOnInit(): void {
  }

}
