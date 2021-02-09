import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {

  @Input() message = "";

  constructor() { }

  ngOnInit(): void {
  }

}
